import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard2 } from './ProjectCard2';
import colorSharp from '../assets/img/color-sharp.png';
import data from '../aboutDescriptions.json';

export const About2 = () => {
  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>About Me</h2>
              <p>Hover over or tap on card for more information.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 flex-md-row"
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
                    <Nav.Link eventKey="fourth">
                      Web Development & Design
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                {data.map((project) => (
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {project.id === 1 ? (
                          <ProjectCard2 key={project.id} {...project} />
                        ) : null}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {console.log(data)}
                      <Row>
                        {project.id === 2 ? (
                          <ProjectCard2 key={project.id} {...project} />
                        ) : null}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {project.id === 3 ? (
                          <ProjectCard2 key={project.id} {...project} />
                        ) : null}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {project.id === 4 ? (
                          <ProjectCard2 key={project.id} {...project} />
                        ) : null}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                ))}
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt=""></img>
    </section>
  );
};
