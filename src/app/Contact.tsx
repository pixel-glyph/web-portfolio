'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { clsx } from 'clsx';

import Spinner from './Spinner';
import envelopeIcon from '../../public/envelope.svg';

import styles from './Contact.module.scss';
import Toast from './Toast';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsSubmitting(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }

      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      alert('There was an error submitting the form. Please try again later.');
    }

    setIsSubmitting(false);
  }

  return (
    <section className={styles.section} id="contact">
      <h2>Get in Touch</h2>
      <p className={styles.info}>I am currently available for hire.</p>
      <p className={styles.info}>
        If you’re on the lookout for a driven, best practices-following,
        detail-oriented frontend developer, look no further!
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.nameInputs}>
          <div className={styles.inputWrapper}>
            <label htmlFor="frm-first">First Name</label>
            <input
              id="frm-first"
              className={styles.textInput}
              type="text"
              name="first"
              autoComplete="given-name"
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="frm-last">Last Name</label>
            <input
              id="frm-last"
              className={styles.textInput}
              type="text"
              name="last"
              autoComplete="family-name"
              required
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="frm-email">Email</label>
          <input
            id="frm-email"
            className={styles.textInput}
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="frm-company">Company</label>
          <input
            id="frm-company"
            className={styles.textInput}
            type="text"
            name="company"
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="frm-message">Message</label>
          <textarea
            id="frm-message"
            className={styles.textarea}
            rows={10}
            name="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx({
            [styles.button]: true,
            [styles.disabled]: isSubmitting,
          })}
        >
          {!isSubmitting ? (
            <>
              <Image
                src={envelopeIcon}
                alt=""
                width={33}
                height={22}
                className={styles.icon}
              />
              <span className={styles.buttonText}>MESSAGE ME</span>
            </>
          ) : (
            <Spinner />
          )}
        </button>
      </form>
      <Toast show={showToast} text="Message received!" />
    </section>
  );
}
