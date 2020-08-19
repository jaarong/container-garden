import React, { useRef, useEffect } from "react";

type Props = {
  title?: string,
  children: React.Node,
};

const Page = () => {
  return (
    <div ref={pageRef} className="m-3 max-w-screen-md mx-auto">
      <div className="container mx-auto p-6 max-w-screen-md">
        {title && <h1 className="text-3xl">{title}</h1>}
        <div className="mt-4">
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
