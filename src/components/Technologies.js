import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/react.svg';
import meter2 from '../assets/img/html.svg';
import meter3 from '../assets/img/css.svg';
import meter4 from '../assets/img/graphql.svg';
import meter5 from '../assets/img/apollo.svg';
import meter6 from '../assets/img/materialUI.svg';
import meter7 from '../assets/img/js.svg';
import meter8 from '../assets/img/bootstrap.svg';
import meter9 from '../assets/img/sass.svg';
import meter10 from '../assets/img/scrum1.png';
import meter11 from '../assets/img/cypress.svg';
import meter12 from '../assets/img/jest.png';
import meter13 from '../assets/img/slack.svg';

export const Technologies = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Technologies</h2>
              <p>
                Below you can find my collection of technologies I have so far
                studied and implemented.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image1" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image3" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image1" />
                  <h5>GraphQL</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image1" />
                  <h5>Apollo</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image1" />
                  <h5>Material UI</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image1" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image1" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="Image1" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="Image1" />
                  <h5>Scrum</h5>
                </div>
                <div className="item">
                  <img src={meter11} alt="Image1" />
                  <h5>Cypress</h5>
                </div>
                <div className="item">
                  <img src={meter12} alt="Image1" />
                  <h5>Jest</h5>
                </div>
                <div className="item">
                  <img src={meter13} alt="Image1" />
                  <h5>Slack</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
