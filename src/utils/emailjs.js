import emailjs from 'emailjs-com';

// Your EmailJS credentials
const EMAILJS_USER_ID = 'yOD5gtvVCpaGdGqYJ';      // Your EmailJS public key
const EMAILJS_SERVICE_ID = 'service_czvlyl5'; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_4infp5a'; // Your EmailJS template ID

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
