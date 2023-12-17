import React, { useMemo } from "react";
import Image from "next/image";
import { Container, ProjectsCardsContainer } from "./styles";
import { useTranslations } from "next-intl";

const Projects: React.FC = () => {
  const t = useTranslations("home");

  const slides = useMemo(
    () => [
      {
        name: "Portfólio",
        image_url: "/projects/portfolio-project.jpg",
        github_url: "https://github.com/pedrohenriquebraga/portfolio",
        description:
          "Apresento meu portfólio aprimorado, marcado por modernidade e inovação. Com a adição de um blog pessoal e uma contagem regressiva para meu aniversário, acompanhada por um exclusivo mural de congratulações, este projeto destaca-se como um marco significativo em minha trajetória profissional.",
        techs: ["Typescript", "NextJs", "MongoDB", "Styled Components"],
      },
      {
        name: "Saturn Chat",
        image_url: "/projects/saturn-chat-project.jpg",
        github_url: "https://github.com/flow-apps/saturn-chat-mobile",
        description:
          "Este projeto em desenvolvimento é minha iniciativa mais significativa até o momento. Um aplicativo de mensagens para dispositivos móveis, simplificando funcionalidades do WhatsApp e Discord de maneira mais intuitiva. Destaca-se por um sistema avançado de convites, atribuição de cargos, envio de arquivos e mensagens de voz.",
        techs: ["Typescript", "React Native", "Expo", "Styled Components"],
      },
      {
        name: "Saturn Chat (API)",
        image_url: "/projects/saturn-chat-api-project.jpg",
        github_url: "https://github.com/flow-apps/saturn-chat-core",
        description:
          "Essa API é a base operacional do Saturn Chat. Ela utiliza Express, o banco de dados PostgresSQL (acessado via TypeORM) e se destaca pelo avançado sistema de websockets. Esse sistema facilita a transmissão em tempo real de eventos entre o aplicativo e a API, otimizado com o Redis para armazenamento em cache.",
        techs: [
          "Typescript",
          "Express",
          "PostgresSQL",
          "Socket IO",
          "Typeorm",
          "Redis",
        ],
      },
      {
        name: "Green Force",
        image_url: "/projects/green-force-project.jpg",
        github_url: "https://github.com/pedrohenriquebraga/green-force",
        description:
          "Um website elaborado com o propósito de promover a arborização como medida mitigadora do aquecimento global, este representa um dos primeiros projetos por mim desenvolvidos. Constitui-se como uma significativa vitrine de minha transição para a posição de desenvolvedor Fullstack.",
        techs: [
          "HTML",
          "CSS",
          "Javascript",
          "Axios",
          "NodeJs",
          "SQLite",
        ],
      },
      {
        name: "Soundify",
        image_url: "/projects/soundify-project.jpg",
        github_url: "https://github.com/pedrohenriquebraga/soundify",
        description:
          "Um app de música para dispositivos móveis projetado para aprimorar a reprodução de faixas armazenadas localmente. Oferecendo recursos como reprodução em segundo plano, um reprodutor dinâmico com seleção automática de cores para o layout, e uma funcionalidade de listagem automática das músicas no dispositivo.",
        techs: ["Typescript", "React Native", "Expo", "Styled Components"],
      },
    ],
    []
  );

  return (
    <Container id="my-projects">
      <div id="my-projects-container">
        <h2>{t("my_projects.title")}</h2>
        <p>
          {t.rich("my_projects.subtitle", {
            link: (children) => (
              <a
                href="https://github.com/pedrohenriquebraga"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          })}
        </p>
        <ProjectsCardsContainer>
          {slides.map((project) => (
            <div key={project.name} className="card-container">
              <img src={project.image_url} alt={project.name} />
              <div id="project-infos-container">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div id="techs-container">
                  {project.techs.map((tech) => {
                    return (
                      <span key={tech} className="tech">
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver no Github
                </a>
              </div>
            </div>
          ))}
        </ProjectsCardsContainer>
      </div>
    </Container>
  );
};

export default Projects;
