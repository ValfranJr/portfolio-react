import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Preencha todos os campos!" });
      return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        message: "Por favor, insira um email válido!",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Configurações do EmailJS

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Configurações do EmailJS não encontradas. Verifique o arquivo .env"
        );
      }

      // Parâmetros do template
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "valfran-goncalves@hotmail.com",
      };

      // Enviar email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      });

      // Limpar formulário
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus({
        type: "error",
        message:
          "Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.section_container}>
      <div className={styles.section_content}>
        <h2 className={styles.section_title} id="contact">
          Entre Em Contato
        </h2>
        <form onSubmit={onSubmit} className={styles.contact_content}>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <textarea
            placeholder="Mensagem"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          ></textarea>

          {status.message && (
            <div className={`${styles.status_message} ${styles[status.type]}`}>
              {status.message}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}
