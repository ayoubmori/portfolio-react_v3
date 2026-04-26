import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { sendEmail } from '../../utils/emailjs';
import Spinner from '../shared/Spinner';

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.background.light};
`;

const ContactDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '20px'});
  transition: all 0.6s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.default};
  font-weight: 500;
  background: white;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ theme }) => theme.colors.secondary};
  }

  &.resume-btn {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    &:hover { background: ${({ theme }) => theme.colors.primaryDark}; }
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '20px'});
  transition: all 0.6s ease-out 0.2s;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  &:focus { outline: none; border-color: ${({ theme }) => theme.colors.primary}; }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  min-height: 150px;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', reply_to: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      setStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' });
      setFormData({ from_name: '', reply_to: '', message: '' });
    } catch (error) {
      console.error("Message submission failed:", error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    }
    setIsSubmitting(false);
  };

  return (
    <ContactSection id="contact">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Get In Touch</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
          Open for collaborations or data science opportunities!
        </p>

        <ContactDetails ref={ref} $visible={inView}>
          <ContactLink href="mailto:ayoubtaouabi66@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/ayoub-taouabi/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </ContactLink>
          <ContactLink 
            href="https://drive.google.com/file/d/1ixzYShWU6FmOkJOmeqhblZuyUoPFe5hc/view?usp=sharing" 
            target="_blank" 
            className="resume-btn"
          >
            <FontAwesomeIcon icon={faEye} /> View Resume
          </ContactLink>
        </ContactDetails>

        <ContactForm $visible={inView} onSubmit={handleSubmit}>
          <Input 
            type="text" placeholder="Your Name" required 
            value={formData.from_name} 
            onChange={(e) => setFormData({...formData, from_name: e.target.value})} 
          />
          <Input 
            type="email" placeholder="Your Email" required 
            value={formData.reply_to} 
            onChange={(e) => setFormData({...formData, reply_to: e.target.value})} 
          />
          <Textarea 
            placeholder="Your Message" required 
            value={formData.message} 
            onChange={(e) => setFormData({...formData, message: e.target.value})} 
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ width: '100%', padding: '1rem', background: '#4338CA', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            {isSubmitting ? <Spinner /> : 'Send Message'}
          </button>
          {status && (
            <div style={{ marginTop: '1rem', textAlign: 'center', color: status.type === 'success' ? 'green' : 'red' }}>
              {status.message}
            </div>
          )}
        </ContactForm>
      </div>
    </ContactSection>
  );
};

export default Contact;