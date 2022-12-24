import { Col } from 'react-bootstrap';
import Netflix from '../img/netflix.png';
import Webshop from '../img/webshop.png';
import firstWebsite from '../img/website.png';
import presenting from '../img/presenting.jpg';
import solidarity from '../img/solidarity.jpg';
import design from '../img/design.jpg';
import unbiased from '../img/cf vildan blur.jpg';

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  header,
  header2,
  description2,
}) => {
  const images = {
    netflix: Netflix,
    webshop: Webshop,
    firstWebsite: firstWebsite,
    presenting: presenting,
    solidarity: solidarity,
    design: design,
    unbiased: unbiased,
  };

  return (
    <Col size={12} sm={12}>
      <div className="proj-imgbx">
        <img src={images[image]} alt="" />
        <div className="proj-txtx">
          <h4>
            <a href={link}>{title}</a>
          </h4>
          <h5>{header}</h5>
          <ul
            className="featureText"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <h5>{header2}</h5>
          <ul
            className="featureText"
            dangerouslySetInnerHTML={{ __html: description2 }}
          />
        </div>
      </div>
    </Col>
  );
};
