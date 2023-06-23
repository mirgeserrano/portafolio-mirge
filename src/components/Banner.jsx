import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const toRotate = ["web developer", "web designer", "ui/ux designer"];
  const period = 1000;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300);

  useEffect(() => {
    let ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta]);

  useEffect(() => {
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => (prevLoopNum + 1) % toRotate.length);
      setDelta(500);
    } else if (!isDeleting && text === toRotate[loopNum % toRotate.length]) {
      setIsDeleting(true);
      setDelta(period);
    }
  }, [text, loopNum, isDeleting]);

  const tick = () => {
    if (isDeleting) {
      setText((prevText) => prevText.slice(0, -1));
    } else {
      setText((prevText) =>
        toRotate[loopNum % toRotate.length].slice(0, prevText.length + 1)
      );
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido a Mi Portafolio</span>
            <h1>
              {`Hola soy Mirge`}
              <span> {text}</span>
            </h1>
            <p>
              ¡Hola! Soy Mirgelys Serrano, una apasionada Ingeniera en sistemas
              con experiencia desde el 2018. Desde mis inicios en esta
              fascinante industria, he estado dedicado a resolver desafíos
              técnicos y crear soluciones innovadoras.
            </p>
          </Col>
          <Col xs={12} md={6} xl={7} xxl={4}>
            <img src={headerImg} alt="Headder img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
