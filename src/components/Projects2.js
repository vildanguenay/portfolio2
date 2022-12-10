import { Container, Row, Col, Tab } from 'react-bootstrap';
import { ProjectCard2 } from './ProjectCard2';
import colorSharp from '../assets/img/color-sharp.png';
import data from '../projectsDescriptions.json';

export const Projects2 = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Please hover over project for more information. Also, by
                clicking the title you will be redirected to the project site
                itself.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {data.map((project, index) => {
                        return <ProjectCard2 key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt=""></img>
    </section>
  );
};
