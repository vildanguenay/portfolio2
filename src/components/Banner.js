import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../img/field2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Vildan', 'a Speaker', 'a Web Developer', 'a Web Designer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animated__animated animate__bounce' : ''
                  }
                >
                  <span className="tagline">Welcome!</span>
                  {/* <h1>
                    {`I'm `}
                    <span className="wrap">{text}</span>
                  </h1> */}
                  <p className="taglineText">
                    On this website you can find projects I have developed and
                    mostly designed myself. Also, I have created an About Me
                    section where you can read about my educational background
                    and current interests. Lastly, a slider showcases all
                    technologies I have studied and implemented so far.
                  </p>
                  <a href="#project">
                    Check out my side projects <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <img src={headerImg} alt="Header Img" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
