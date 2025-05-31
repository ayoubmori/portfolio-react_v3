import emailjs from 'emailjs-com';

// Replace these with your actual EmailJS credentials
const EMAILJS_USER_ID = 'YOUR_USER_ID';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

export const initEmailJS = () => {
  emailjs.init(EMAILJS_USER_ID);
};

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    return response;
  } catch (error) {
    throw error;
  }
};
