import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.section_container}>
      <div className={styles.section_content}>
        <h2 className={styles.section_title} id="contact">
          Entre Em Contato
        </h2>
        <div className={styles.contact_content}>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu email" />
          <textarea placeholder="Mensagem" rows="5"></textarea>
          <button type="submit">Enviar</button>
        </div>
      </div>
    </div>
  );
}
