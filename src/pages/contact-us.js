import React, { useState }  from "react"
import axios from "axios";
import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks';
import { graphql } from 'gatsby';
import type { MarkdownRemark } from '../types';

type Props = {
    data: {
      markdownRemark: MarkdownRemark
    }
};

const ContactPage = ({ data }: Props) => {
    const { siteTitle, siteSubtitle } = useSiteMetadata();
    const { html: pageBody } = data.markdownRemark;
    const { frontmatter } = data.markdownRemark;
    const { title: pageTitle, description: pageDescription, socialImage } = frontmatter;

    const [emailInput, setEmail] = useState("");
    const [nameInput, setName] = useState("");
    const [messageInput, setMessage] = useState("");

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/9468c9cd-2770-4d33-9103-a4dbbe4d150d",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
        });
    };

    return (
        <Layout title={`${pageTitle} - ${siteTitle}`} description={siteSubtitle}>
            <div className="m-3 max-w-screen-md mx-auto">
                <div className="container mx-auto p-6 max-w-screen-md">
                    <h1 className="text-5xl">{pageTitle}</h1>
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: pageBody }} />
                    <form method="post" onSubmit={handleOnSubmit} name="contact">
                        <div className="form-group block p-5">
                            <label className="block pb-2" htmlFor="emailInput" required="required">Email address</label>
                            <input type="email" name="email" className="form-control text-black" id="emailInput" aria-describedby="emailHelp" value={emailInput} onChange={event => setEmail(event.target.value)} />
                        </div>
                        <div className="form-group block p-5">
                            <label className="block pb-2" htmlFor="nameInput">Name</label>
                            <input type="text" name="name" className="form-control text-black" id="nameInput" required="required" value={nameInput} onChange={event => setName(event.target.value)} />
                        </div>
                        <div className="form-group block p-5">
                            <label className="block pb-2" htmlFor="messageInput">Message</label>
                            <textarea type="text" rows="5" cols="40" name="message" className="form-control text-black" id="messageInput" required="required" value={messageInput} onChange={event => setMessage(event.target.value)} />
                        </div>
                        <button className="border border-white text-lg rounded-lg p-3 m-4 hover:bg-sunglow hover:text-dark" type="submit" disabled={serverState.submitting}>Send</button>
                        {serverState.status && (
                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                            {serverState.status.msg}
                            </p>
                        )}
                    </form> 
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
  query ContactQuery {
    markdownRemark(frontmatter: {title: {eq: "Contact me"}}) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default ContactPage