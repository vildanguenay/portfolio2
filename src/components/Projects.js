import { Container } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp.png';
import data from '../projectsDescriptions.json';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? 'animated__animated animate__bounce' : ''}
            >
              <h2>Projects</h2>
              <p>
                Please hover over project for more information. Also, by
                clicking the title you will be redirected to the project site
                itself.
              </p>
            </div>
          )}
        </TrackVisibility>
        <div className="cardsContainer">
          {data.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
