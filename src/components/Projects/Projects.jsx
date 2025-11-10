import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.section_container}>
      <div className={styles.section_content}>
        <h2 className={styles.section_title} id="projects">
          Projetos
        </h2>
        <div className={styles.projects_content}>
          <div className={styles.project_item}>
            <div
              className={
                styles.project_item_image + " " + styles.project_image_1
              }
            ></div>
            <div className={styles.project_text}>
              <h3>Landing Page de Startup</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                ea, excepturi expedita et laudantium sint quisquam cum saepe
                tenetur illum.
              </p>
            </div>
          </div>
          <div className={styles.project_item}>
            <div
              className={
                styles.project_item_image + " " + styles.project_image_2
              }
            ></div>
            <div className={styles.project_text}>
              <h3>Página de Hotel</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                ea, excepturi expedita et laudantium sint quisquam cum saepe
                tenetur illum.
              </p>
            </div>
          </div>
          <div className={styles.project_item}>
            <div
              className={
                styles.project_item_image + " " + styles.project_image_3
              }
            ></div>
            <div className={styles.project_text}>
              <h3>Portfólio de Programador</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                ea, excepturi expedita et laudantium sint quisquam cum saepe
                tenetur illum.
              </p>
            </div>
          </div>
          <div className={styles.project_item}>
            <div
              className={
                styles.project_item_image + " " + styles.project_image_4
              }
            ></div>
            <div className={styles.project_text}>
              <h3>Previsão do Tempo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                ea, excepturi expedita et laudantium sint quisquam cum saepe
                tenetur illum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
