import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { sendEmail } from '../../utils/emailjs';
import Spinner from '../shared/Spinner';

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.background.light};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.text.primary};
  color: #333;
`;

const ContactIntro = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing[12]};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const ContactDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  transition: ${({ theme }) => theme.transitions.slow};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.default};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }

  &.download-cv {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[5]};
    border: 2px solid transparent;

    svg {
      font-size: 1.1em;
      margin-right: ${({ theme }) => theme.spacing[1]};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-2px);
      border-color: ${({ theme }) => theme.colors.primaryDark};
    }

    &:active {
      transform: translateY(0);
    }
  }

  svg {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? '0' : '20px'});
  transition: ${({ theme }) => theme.transitions.slow};
  transition-delay: 0.2s;
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const inputStyles = ({ theme }) => `
  width: 100%;
  padding: ${theme.spacing[3]};
  border: 2px solid ${theme.colors.background.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  font-family: ${theme.typography.fontFamily.sans};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Textarea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 150px;
`;

const ErrorMessage = styled.small`
  color: ${({ theme }) => theme.colors.error.dark};
  margin-top: ${({ theme }) => theme.spacing[1]};
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &.success {
    background: ${({ theme }) => theme.colors.success.light};
    color: ${({ theme }) => theme.colors.success.dark};
  }

  &.error {
    background: ${({ theme }) => theme.colors.error.light};
    color: ${({ theme }) => theme.colors.error.dark};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const [detailsRef, detailsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formRef, formInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    }
    if (!formData.reply_to.trim()) {
      newErrors.reply_to = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.reply_to)) {
      newErrors.reply_to = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {        // Use the configured emailjs utility
        await sendEmail(formData);
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ from_name: '', reply_to: '', message: '' });
      } catch (error) {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactIntro>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </ContactIntro>
        
        <ContactDetails ref={detailsRef} visible={detailsInView}>
          <ContactLink href="mailto:ayoubtaouabi66@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>ayoubtaouabi66@gmail.com</span>
          </ContactLink>
          <ContactLink 
            href="https://www.linkedin.com/in/ayoub-taouabi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn Profile</span>
          </ContactLink>
          <ContactLink 
            href="https://github.com/ayoubmori" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub Profile</span>
          </ContactLink>
          <ContactLink 
            href="/assets/Ayoub_Taouabi_CV.pdf"
            download
            className="download-cv"
            aria-label="Download CV"
          >
            <FontAwesomeIcon icon={faFileDownload} />
            <span>Download CV</span>
          </ContactLink>
        </ContactDetails>

        <ContactForm onSubmit={handleSubmit} ref={formRef} visible={formInView}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Full Name"
            />
            {errors.from_name && <ErrorMessage>{errors.from_name}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
            {errors.reply_to && <ErrorMessage>{errors.reply_to}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message here..."
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </FormGroup>          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </SubmitButton>

          {status && (
            <StatusMessage className={status.type}>
              {status.message}
            </StatusMessage>
          )}
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;
