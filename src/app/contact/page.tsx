import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="text-cyan-600 body-font relative">
        <div className="contact-container">
          {/* Title Section */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="contact-title">
              Contact Us
            </h1>
            <p className="contact-description">
              Drop me a line, or send me a message by submitting the form.
            </p>
          </div>

          {/* Form Section */}
          <div className="contact-form">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="contact-social-icons">
            <a href="mailto:shaziasamma921@gmail.com" className="text-cyan-200">shaziasamma921@gmail.com</a>
            <span className="inline-flex">
              <a href="https://linkedin.com" className="text-blue-600">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://github.com" className="ml-4 text-white">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="ml-4 text-red-900">
                <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
