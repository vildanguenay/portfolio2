import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../img/react.svg';
import meter2 from '../img/html.svg';
import meter3 from '../img/css.svg';
import meter6 from '../img/materialUI.svg';
import meter7 from '../img/js.svg';
import meter8 from '../img/bootstrap.svg';
import meter9 from '../img/sass.svg';
import meter11 from '../img/cypress.svg';
import meter12 from '../img/jest.png';
import meter14 from '../img/figma.svg';

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
                  <h5>SCSS</h5>
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
                  <img src={meter11} alt="Image1" />
                  <h5>Cypress</h5>
                </div>
                <div className="item">
                  <img src={meter12} alt="Image1" />
                  <h5>Jest</h5>
                </div>
                <div className="item">
                  <img src={meter14} alt="Image1" />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
