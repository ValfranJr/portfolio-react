import styles from "./Skills.module.css";
import {
  HTMLICON,
  CSSICON,
  JSICON,
  GITICON,
  GITHUBICON,
  REACTICON,
  NEXTJSICON,
  TYPESCRIPTICON,
  GITJESTICICON,
  TESTINGLIBRARYICON,
} from "../../assets";

export default function Skills() {
  return (
    <div className={styles.section_container}>
      <div className={styles.section_content}>
        <h2 className={styles.section_title} id="skills">
          Habilidades
        </h2>
        <div className={styles.skills_content}>
          <div className={styles.skill_item}>
            <img src={HTMLICON} alt="HTML ICON" />
            <h3>HTML</h3>
            <p>
              O HTML é a linguagem responsável por estruturar o conteúdo da web.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src={CSSICON} alt="CSS ICON" />
            <h3>CSS</h3>
            <p>
              O CSS define o estilo das páginas. Possuo grande conhecimento.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src={JSICON} alt="JavaScript ICON" />
            <h3>JavaScript</h3>
            <p>
              Linguagem responsável por adicionar lógica aos sites. Possuo amplo
              domínio
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src={GITICON} alt="Git ICON" />
            <h3>Git</h3>
            <p>Ferramenta de controle de versão. Possuo um grande domínio.</p>
          </div>
          <div className={styles.skill_item}>
            <img src={GITHUBICON} alt="GitHub ICON" />
            <h3>GitHub</h3>
            <p>
              O GitHub é uma plataforma de hospedagem de repositórios Git.
              Possuo um grande domínio.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src={REACTICON} alt="React ICON" />
            <h3>React</h3>
            <p>
              O React é uma biblioteca JavaScript voltada para a criação de
              interfaces. Possuo um grande domínio.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src={NEXTJSICON} alt="NextJS ICON" />
            <h3>NextJS</h3>
            <p>
              É um framework baseado em React que oferece recursos avançados.
              Possuo um grande domínio.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src={TYPESCRIPTICON} alt="TypeScript ICON" />
            <h3>TypeScript</h3>
            <p>
              O TypeScript é um superset do JavaScript que adiciona tipagem
              estática. Possuo um grande conhecimento.
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src={GITJESTICICON} alt="Jest ICON" />
            <h3>Jest</h3>
            <p>
              O Jest é um framework de testes em JavaScript, amplamente
              utilizado em projetos
            </p>
          </div>
          <div className={styles.skill_item}>
            <img src={TESTINGLIBRARYICON} alt="Testing Library ICON" />
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
