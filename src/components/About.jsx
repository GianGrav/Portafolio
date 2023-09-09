import React from 'react';
import styles from '../styles/about.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>About Me</h2>
        <p>
          Bienvenido a mi portafolio. Soy [Tu Nombre], un desarrollador de software apasionado por [Tus Intereses].
        </p>
        <p>
          [Más información sobre ti y tus habilidades].
        </p>
      </div>
    </section>
  );
}

