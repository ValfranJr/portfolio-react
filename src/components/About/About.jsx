import styles from "./About.module.css";
import FotoPerfil from "../../assets/perfil1.png";

export default function About() {
  return (
    <div className={styles.section_container}>
      <div className={styles.section_content}>
        <h2 className={styles.section_title} id="about">
          Sobre mim
        </h2>
        <div className={styles.about_me_content}>
          <img src={FotoPerfil} alt="foto de perfil" />
          <p>
            Meu nome é Valfran Jr. e sou um desenvolvedor web em constante
            evolução. Minha trajetória começou movida pela curiosidade em
            entender como as coisas funcionam no mundo digital, e desde então
            tenho me dedicado a transformar ideias em soluções práticas e
            funcionais. Sou apaixonado por tecnologia e inovação, e vejo no
            desenvolvimento web uma oportunidade de unir criatividade e lógica
            para impactar positivamente pessoas e negócios. Ao longo do tempo,
            venho aprimorando minhas habilidades em diversas áreas do
            desenvolvimento, explorando frameworks modernos, linguagens e boas
            práticas que tornam os projetos mais eficientes e escaláveis. Além
            disso, busco sempre me atualizar, acompanhando tendências e novas
            ferramentas que possam agregar valor aos meus trabalhos. Acredito
            que a tecnologia vai muito além do código: ela é um meio de resolver
            problemas reais. Por isso, mantenho o foco em entregar resultados
            que façam diferença, sem abrir mão da qualidade e da experiência do
            usuário. Estou sempre em busca de novos desafios que me permitam
            crescer, aprender e colaborar em projetos inovadores.
          </p>
        </div>
      </div>
    </div>
  );
}
