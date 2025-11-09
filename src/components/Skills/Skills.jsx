import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.section_container}>
      <div className={styles.section_content}>
        <h2 className={styles.section_title} id="skills">
          Habilidades
        </h2>
        <div className={styles.skills_content}>
          <div className={styles.skill_item}>
            <img src="./public/HTML ICON.png" alt="HTML ICON" />
            <h3>HTML</h3>
            <p>
              O HTML é a linguagem responsável por estruturar o conteúdo da web.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src="./public/CSS ICON.png" alt="CSS ICON" />
            <h3>CSS</h3>
            <p>
              O CSS define o estilo das páginas. Possuo grande conhecimento.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src="./public/JS ICON.png" alt="JavaScript ICON" />
            <h3>JavaScript</h3>
            <p>
              Linguagem responsável por adicionar lógica aos sites. Possuo amplo
              domínio
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src="./public/git_icon.png" alt="Git ICON" />
            <h3>Git</h3>
            <p>Ferramenta de controle de versão. Possuo um grande domínio.</p>
          </div>
          <div className={styles.skill_item}>
            <img src="./public/github_icon.png" alt="GitHub ICON" />
            <h3>GitHub</h3>
            <p>
              O GitHub é uma plataforma de hospedagem de repositórios Git.
              Possuo um grande domínio.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src="./public/React-icon.svg.png" alt="React ICON" />
            <h3>React</h3>
            <p>
              O React é uma biblioteca JavaScript voltada para a criação de
              interfaces. Possuo um grande domínio.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src="./public/nextjs_icon.png" alt="NextJS ICON" />
            <h3>NextJS</h3>
            <p>
              É um framework baseado em React que oferece recursos avançados.
              Possuo um grande domínio.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src="./public/typescript.png" alt="TypeScript ICON" />
            <h3>TypeScript</h3>
            <p>
              O TypeScript é um superset do JavaScript que adiciona tipagem
              estática. Possuo um grande conhecimento.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src="./public/jest_icon.png" alt="Jest ICON" />
            <h3>Jest</h3>
            <p>
              O Jest é um framework de testes em JavaScript, amplamente
              utilizado em projetos
            </p>
          </div>
          <div className={styles.skill_item}>
            <img
              src="./public/testing-library.png"
              alt="Testing Library ICON"
            />
            <h3>Testing Library</h3>
            <p>
              A Testing Library é uma coleção de bibliotecas para testes de
              interface
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
