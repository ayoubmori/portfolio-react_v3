import emailjs from '@emailjs/browser';

export const sendEmail = async (templateParams) => {
  // 🚨 DIAGNOSTIC CHECK: Are the variables loading?
  console.log("Diagnostic Check - Keys:", {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    paramsBeingSent: templateParams
  });

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