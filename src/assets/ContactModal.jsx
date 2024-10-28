import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
        <button 
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name*</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Company Name*</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email*</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Contact Number*</label>
            <input type="tel" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Leave Your Message Here*</label>
            <textarea className="w-full p-2 border rounded" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-[#00ADD3] text-white font-bold py-2 px-4 rounded-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
