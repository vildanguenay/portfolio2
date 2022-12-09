import Netflix from '../assets/img/netflix.png';
import Webshop from '../assets/img/webshop.png';
import firstWebsite from '../assets/img/website.png';
import presenting from '../assets/img/presenting.jpg';
import office from '../assets/img/office.jpg';
import master from '../assets/img/master.jpg';

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
    office: office,
    master: master,
  };

  return (
    <div className="proj-imgbx">
      <img src={images[image]} alt="" />
      {/* <div className="proj-txtx">
        <a href={link}>
          <h4>{title}</h4>
        </a>
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
      </div> */}
    </div>
  );
};
