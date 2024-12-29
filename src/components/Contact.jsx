import React from 'react';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "380b4b7c-c0a7-4707-ac65-0e79816f55aa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      setResult("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center  w-full my-20">
      <div className="contact flex justify-center items-center w-[90%] md:w-[80%] lg:w-[60%] h-2/3 rounded-lg p-5">
        <form className="w-2/3" onSubmit={onSubmit}>
          <h2 className="text-center text-red-500 text-[24px] md:text-[30px]">
            Get in touch
          </h2>
          <div className="input-box mt-5">
            <label className="block text-white">Full Name</label>
            <input
              type="text"
              className="bg-transparent w-full h-10 p-2 mt-2 outline-none placeholder border border-red-500 rounded-lg"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="input-box mt-5">
            <label className="block text-white">Email Address</label>
            <input
              type="email"
              className="bg-transparent w-full h-10 p-2 mt-2 outline-none placeholder border border-red-500 rounded-lg"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box mt-5">
            <label className="block text-white">Your Message</label>
            <textarea
              className="w-full resize-none h-28 bg-transparent border border-red-500 p-2 rounded-lg"
              placeholder="Enter your message"
              name="message"
              required
            />
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
          {result && (
            <p className="mt-5 text-center text-white">{result}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
