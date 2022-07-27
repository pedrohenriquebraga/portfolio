import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Container, ProjectsSliderImagesContainer } from "./styles";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(
    () => [
      {
        name: "Ecoleta",
        image_url: "/ecoleta.webp",
        github_url: "https://github.com/pedrohenriquebraga/nlw1",
      },
      {
        name: "Clima Web",
        image_url: "/clima-web.webp",
        github_url: "https://github.com/pedrohenriquebraga/clima-web",
      },
      {
        name: "Plant Manager",
        image_url: "/plant-manager.webp",
        github_url: "https://github.com/pedrohenriquebraga/nlw5",
      },
      {
        name: "Saturn Chat Website",
        image_url: "/saturn-chat-website.webp",
        github_url: "https://github.com/flow-apps/saturn-chat-web",
      },
      {
        name: "Green Force",
        image_url: "/green-force.webp",
        github_url: "https://github.com/pedrohenriquebraga/green-force",
      },
      {
        name: "Happy",
        image_url: "/happy.webp",
        github_url: "https://github.com/pedrohenriquebraga/nlw3",
      },
      {
        name: "Saturn Chat App",
        image_url: "/saturn-chat-app.webp",
        github_url: "https://github.com/flow-apps/saturn-chat-mobile",
      },
    ],
    []
  );

  const handleSlideChange = (direction: "prev" | "next") => {
    if (direction === "prev" && currentSlide === 0) {
      return setCurrentSlide(slides.length - 1);
    }

    if (direction === "prev" && currentSlide > 0) {
      return setCurrentSlide(currentSlide - 1);
    }

    if (direction === "next" && currentSlide === slides.length - 1) {
      return setCurrentSlide(0);
    }

    if (direction === "next" && currentSlide < slides.length - 1) {
      return setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <Container id="my-projects">
      <div id="my-projects-container">
        <h2>My projects</h2>
        <p>
          These are all my projects designed and developed by me. all images
          will take you to the repository on my Github. All projects here are
          personal. I&apos;ve never done a professional project, but I&apos;m
          looking for new Job opportunities. For more projects{" "}
          <a
            href="https://github.com/pedrohenriquebraga"
            target="_blank"
            rel="noopener noreferrer"
          >
            visit my Github
          </a>
          .
        </p>
        <ProjectsSliderImagesContainer>
          <div id="slider-container">
            <div id="slider-controller-container">
              <div
                className="slider-controller prev"
                onClick={() => handleSlideChange("prev")}
              >
                <FiArrowLeft />
              </div>
              <div
                className="slider-controller next"
                onClick={() => handleSlideChange("next")}
              >
                <FiArrowRight />
              </div>
            </div>
            <div id="slider-main-image">
              <a
                href={slides[currentSlide].github_url}
                target="_blank"
                rel="external noreferrer"
              >
                <img
                  src={slides[currentSlide].image_url}
                  alt={slides[currentSlide].name}
                />
              </a>
            </div>
          </div>
        </ProjectsSliderImagesContainer>
      </div>
    </Container>
  );
};

export default Projects;
