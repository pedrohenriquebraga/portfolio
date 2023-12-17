import React, { useMemo } from "react";
import { Container, ProjectsCardsContainer } from "./styles";
import { useTranslations } from "next-intl";

const Projects: React.FC = () => {
  const t = useTranslations("home.my_projects");

  const projects = useMemo(
    () => [
      {
        name: t("projects.portfolio.name"),
        image_url: "/projects/portfolio-project.jpg",
        github_url: "https://github.com/pedrohenriquebraga/portfolio",
        description: t("projects.portfolio.description"),
        techs: ["Typescript", "NextJs", "MongoDB", "Styled Components"],
      },
      {
        name: t("projects.saturn_chat.name"),
        image_url: "/projects/saturn-chat-project.jpg",
        github_url: "https://github.com/flow-apps/saturn-chat-mobile",
        description: t("projects.saturn_chat.description"),
        techs: [
          "Typescript",
          "React Native",
          "Expo",
          "Firebase",
          "Styled Components",
        ],
      },
      {
        name: t("projects.saturn_chat_api.name"),
        image_url: "/projects/saturn-chat-api-project.jpg",
        github_url: "https://github.com/flow-apps/saturn-chat-core",
        description: t("projects.saturn_chat_api.description"),
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
        name: t("projects.green_force.name"),
        image_url: "/projects/green-force-project.jpg",
        github_url: "https://github.com/pedrohenriquebraga/green-force",
        description: t("projects.green_force.description"),
        techs: ["HTML", "CSS", "Javascript", "Axios", "NodeJs", "SQLite"],
      },
      {
        name: t("projects.soundify.name"),
        image_url: "/projects/soundify-project.jpg",
        github_url: "https://github.com/pedrohenriquebraga/soundify",
        description: t("projects.soundify.description"),
        techs: ["Typescript", "React Native", "Expo", "Styled Components"],
      },
    ],
    []
  );

  return (
    <Container id="my-projects">
      <div id="my-projects-container">
        <h2>{t("title")}</h2>
        <p>
          {t.rich("subtitle", {
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
          {projects.map((project) => (
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
                  {t("projects.github_button")}
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
