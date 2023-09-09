import React from 'react';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContent}>
        <h2>About Me</h2>
        <p>
          Mis Redes: <a href="https://github.com/giangrav" target='_blank'>GitHub</a>
        </p>
      </div>
    </section>
  );
}

