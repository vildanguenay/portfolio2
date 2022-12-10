import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <div>
            <a href="mailto:vildan-guenay@hotmail.com" className="footerLink">
              mailto: vildan-guenay@hotmail.com
            </a>
          </div>
          <div className="social-icon navbar-text">
            <a href="https://www.instagram.com/vildanguenay/" alt="">
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>
            <a href="https://www.linkedin.com/in/vildan-guenay" alt="">
              <i>
                <FontAwesomeIcon icon={faLinkedin} />
              </i>
            </a>
            <a href="https://github.com/vildanguenay" alt="">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
          </div>
          <p>
            <FontAwesomeIcon icon={faCopyright} /> Copyright 2022 Vildan Günay
          </p>
        </Row>
      </Container>
    </footer>
  );
};
