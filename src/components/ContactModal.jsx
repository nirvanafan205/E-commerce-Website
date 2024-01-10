import React, { useState } from "react";

const ContactModal = ({ closeModal }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-800">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border rounded-md py-2 px-3"
              value={subject}
              onChange={handleSubjectChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800">
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="w-full border rounded-md py-2 px-3"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-800">
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border rounded-md py-2 px-3"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-950 text-white px-4 py-2 rounded-md hover:bg-purple-800"
            >
              Send
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="ml-2 text-purple-950 hover:text-purple-800"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
