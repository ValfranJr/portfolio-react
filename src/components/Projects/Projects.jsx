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
              <h3>
                <a href="https://ecommerce-bewear-beta.vercel.app/">
                  Ecommerce - BeWear
                </a>
              </h3>
              <p>
                O BeWear é um ecommerce voltado para clientes de roupas. Com
                ela, os usuários podem encontrar produtos de alta qualidade e
                preços acessíveis. O desenvolvimento foi realizado com a
                abordagem mobile first, garantindo uma experiência otimizada em
                dispositivos móveis e com Integração ao Stripe para pagamentos.
              </p>
              <a href="https://github.com/ValfranJr/Ecommerce---BEWEAR">
                Link para o projeto - Github
              </a>
            </div>
          </div>
          <div className={styles.project_item}>
            <div
              className={
                styles.project_item_image + " " + styles.project_image_2
              }
            ></div>
            <div className={styles.project_text}>
              <h3>
                <a href="https://roleta-parme.vercel.app/">Roleta Parme</a>
              </h3>
              <p>
                A roleta checkout foi criada para ajudar os usuários a adquirir
                leads de markteplace. Com ela, os donos de deliverys conseguem
                adquirir leads validados disponibilizando cupons de desconto.
              </p>
              <a href="https://github.com/ValfranJr/roleta-parme">
                Link para o projeto - Github
              </a>
            </div>
          </div>
          <div className={styles.project_item}>
            <div
              className={
                styles.project_item_image + " " + styles.project_image_3
              }
            ></div>
            <div className={styles.project_text}>
              <h3>
                <a href="https://fsw-barber-six-phi.vercel.app/">
                  FSW Barber - Agendamentos
                </a>
              </h3>
              <p>
                O FSW Barber é uma plataforma de agendamento voltada para
                clientes de barbearias. Com ela, os usuários podem reservar
                serviços, gerenciar seus horários e acessar o sistema com
                praticidade através do login com Google. Todo o desenvolvimento
                foi pensado com a abordagem mobile first, garantindo uma
                experiência otimizada em dispositivos móveis.
              </p>
              <a href="https://github.com/ValfranJr/FSW-BARBER">
                Link para o projeto - Github
              </a>
            </div>
          </div>
          <div className={styles.project_item}>
            <div
              className={
                styles.project_item_image + " " + styles.project_image_4
              }
            ></div>
            <div className={styles.project_text}>
              <h3>
                <a href="https://github.com/ValfranJr/task-manager">
                  Task Manager
                </a>
              </h3>
              <p>
                Eu precisava de uma forma simples e visualmente organizada para
                administrar minhas tarefas diárias, divididas por períodos do
                dia. Os aplicativos existentes eram complexos, cheios de
                anúncios e distrações.
              </p>
              <a href="https://github.com/ValfranJr/task-manager">
                Link para o projeto - Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
