import emailjs from '@emailjs/browser';

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
    console.error("The exact reason it failed is:", error);
    throw error;
  }
};