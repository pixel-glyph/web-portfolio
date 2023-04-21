'use client';

import Image from 'next/image';
import styles from './Contact.module.scss';

import envelopeIcon from '../../public/envelope.svg';

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    fetch('/api/contact', {
      method: 'post',
      body: new URLSearchParams(data),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        alert('Message sent!');
      })
      .catch((reason) => {
        console.error(reason);
        alert(
          'There was an error submitting the form. Please try again later.'
        );
      });
  }

  return (
    <section className={styles.section} id="contact">
      <h2>Get in Touch</h2>
      <p className={styles.info}>I am currently available for hire.</p>
      <p className={styles.info}>
        If you’re on the lookout for a driven, best practices-following,
        detail-oriented frontend developer, look no further!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="emailField">
          <label htmlFor="frm-email">Email</label>
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="nameField">
          <div>
            <label htmlFor="frm-first">First Name</label>
            <input
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
            />
          </div>
          <div>
            <label htmlFor="frm-last">Last Name</label>
            <input
              id="frm-last"
              type="text"
              name="last"
              autoComplete="family-name"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="frm-company">Company</label>
          <input id="frm-company" type="text" name="company" />
        </div>
        <div className="messageField">
          <label htmlFor="frm-message">Message</label>
          <textarea
            id="frm-message"
            rows={6}
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          <Image
            src={envelopeIcon}
            alt=""
            width={33}
            height={22}
            className={styles.icon}
          />
          <span className={styles.buttonText}>MESSAGE ME</span>
        </button>
      </form>
    </section>
  );
}
