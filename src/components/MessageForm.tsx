const MessageForm = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Title */}
        <p className="text-black text-lg font-semibold mb-6">
          Fill Up the Form
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300 hover:bg-green-700"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default MessageForm;
