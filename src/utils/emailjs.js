import emailjs from 'emailjs-com';

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    // Adding a console log here helps you debug if it fails
    console.error("EmailJS Error:", error);
    throw error;
  }
};