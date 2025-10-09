import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../validation-schema/contact-schema.js";
import toast from "react-hot-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const useContact = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "+91",
      email: "",
      message: "",
    },
  });

  const doSubmit = async (formData) => {
    console.log("Sending form data:", formData);

    try {
      setLoading(true);

      // 👇 Send email directly via EmailJS
    const res = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,  // e.g. "service_ab12cd"
        import.meta.env.VITE_EMAIL_TEMPLATE, // e.g. "template_34xyz"
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC   // e.g. "public_NKLMOP12345"
      );

      console.log("EmailJS response:", res);

      toast.success("Message sent successfully 🎉");
      reset(); // clear form
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return { register, doSubmit, errors, handleSubmit, loading };
};
