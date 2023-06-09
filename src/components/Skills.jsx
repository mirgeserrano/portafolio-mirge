import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import bootstrap from "../assets/img/bootstrap.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
          <Col className="col-12">
            <div className="skill-bx">
              <h2>Habilidades</h2>
            </div>
            <p>
              Mi trayectoria profesional me ha permitido trabajar en diversos
              proyectos, donde he adquirido conocimientos sólidos en el
              desarrollo de software, gestión de bases de datos y creación de
              aplicaciones web. Me encanta estar al día con las últimas
              tecnologías y tendencias en el campo de la ingeniería de sistemas,
              lo que me ha llevado a desarrollar habilidades en lenguajes de
              programación como JavaScript así como en frameworks populares como
              React y Node.js.
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
            >
              <div className="item">
                <img src={html} alt="imag" />
              </div>

              <div className="item">
                <img src={css} alt="imag" />
              </div>

              <div className="item">
                <img src={js} alt="imag" />
              </div>
              <div className="item">
                <img src={bootstrap} alt="" />
              </div>

              <div className="item">
                <img src={react} alt="" />
              </div>

              <div className="item">
                <img src={node} alt="" />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};
