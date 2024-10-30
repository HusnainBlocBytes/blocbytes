import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    contactNumber: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmailWithTimeout = (formData, timeout = 10000) => {
    return new Promise((resolve, reject) => {
      const controller = new AbortController();
      const signal = controller.signal;

      const timeoutId = setTimeout(() => {
        controller.abort(); // Abort the request after timeout
        reject(new Error('Request timed out'));
      }, timeout);

      emailjs.send(
        'service_hd18zs9',  // Replace with your EmailJS Service ID
        'template_42uc8fv',  // Replace with your EmailJS Template ID
        formData,
        'x0EtSmuHKCrY5xT9Z',  // Replace with your EmailJS User ID
        { signal }
      )
      .then((response) => {
        clearTimeout(timeoutId); // Clear timeout on successful response
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timeoutId); // Clear timeout on error as well
        reject(error);
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    sendEmailWithTimeout(formData)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          contactNumber: '',
          message: '',
        });
      })
      .catch((err) => {
        setIsSubmitting(false);
        setError('Failed to send message. Please try again.');
        console.error('EmailJS error:', err);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        
        {isSubmitted ? (
          <p className="text-green-500">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Company Name*</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Contact Number*</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Leave Your Message Here*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-[#00ADD3] text-white font-bold py-2 px-4 rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
