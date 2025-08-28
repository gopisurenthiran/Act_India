import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <section className="w-full px-6 md:px-16 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className="text-gray-500 text-sm tracking-wide uppercase">
            We’ re here to help you
          </p>
          <h2 className="text-4xl font-bold leading-tight">
            LET’S <span className="text-black">TALK</span> <br />
            ABOUT <br />
            YOUR NEEDS
          </h2>
          <p className="text-gray-500 max-w-md">
            Looking for top-quality services and trusted dealership solutions?
            Reach out to us today.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" size={22} />
              <p className="text-gray-700">
                <span className="block font-medium">E-mail</span>
                actindia@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" size={22} />
              <p className="text-gray-700">
                <span className="block font-medium">Phone Number</span>
                +91 95952 22292
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold">E-mail</label>
            <input
              type="email"
              placeholder="Enter Your Mail"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              placeholder="Enter Your Message"
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="w-full mt-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center gap-2 text-blue-600 font-semibold"
          >
            Learn More →
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
