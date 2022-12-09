import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp.png';
import data from '../aboutDescriptions.json';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animated__animated animate__bounce' : ''
                  }
                >
                  <h2>About Me</h2>
                  <p>Hover over or tap on card for more information.</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center flex-sm-row"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Storytelling</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mediation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Journalism</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Wed Development & Dsign</Nav.Link>
                </Nav.Item>
              </Nav>
              {data.map((project, isVisible) => (
                <Tab.Content
                  id="slideInUp"
                  className={
                    isVisible ? 'animate__animated animate__slideInUp' : ''
                  }
                >
                  <Tab.Pane eventKey="first">
                    <Row className="justify-content-center align-items-center">
                      {project.id === 1 ? (
                        <ProjectCard key={project.id} {...project} />
                      ) : null}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="justify-content-center align-items-center">
                      {project.id === 2 ? (
                        <ProjectCard key={project.id} {...project} />
                      ) : null}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row className="justify-content-center align-items-center">
                      {project.id === 3 ? (
                        <ProjectCard key={project.id} {...project} />
                      ) : null}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Row className="justify-content-center align-items-center">
                      {project.id === 4 ? (
                        <ProjectCard key={project.id} {...project} />
                      ) : null}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              ))}
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
