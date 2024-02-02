import React, { useState } from 'react';
import Layout from '../components/Layout';
import emailjs from '@emailjs/browser';
import styles from '../css/Contact.module.css';
import '../css/index.css';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID_KEY,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID_KEY,
        e.target,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 3000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  console.log(stateMessage);
  return (
    <Layout>
      <section
        className={`${styles.intro_portfolio_item} ${styles.contact}`}
        id={styles['contact']}
      >
        <h2
          className={`section__title ${styles.section__title_intro_portfolio_item}`}
        >
          Contact
        </h2>
        <p
          className={`${styles.portfolio_item_subtitle} ${styles.contact_subtitle}`}
        >
          Let's get in touch!
        </p>
        <form className={styles.contact_form} onSubmit={sendEmail}>
          <input
            className={styles.fnameInput}
            id="firstName"
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            className={styles.lnameInput}
            id="email"
            type="email"
            name="user_email"
            placeholder="E-mail"
            required
          />

          <textarea
            type="text"
            className={styles.messageTextarea}
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <input
            type="submit"
            value="Send"
            disabled={isSubmitting}
            className={styles.btn}
          />
          {stateMessage && (
            <p className={styles.confirmation_text}>{stateMessage}</p>
          )}
        </form>
      </section>
    </Layout>
  );
}

export default Contact;
