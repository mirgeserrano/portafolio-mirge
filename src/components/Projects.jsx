import {
  Container,
  Row,
  Col,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "proyecto1",
      description: "development",
      imgURL: projImg1,
    },
    {
      title: "proyecto2",
      description: "development",
      imgURL: projImg2,
    },
    {
      title: "proyecto3",
      description: "development",
      imgURL: projImg3,
    },
    {
      title: "proyecto4",
      description: "development",
      imgURL: projImg1,
    },
    {
      title: "proyecto5",
      description: "development",
      imgURL: projImg2,
    },
    {
      title: "proyecto6",
      description: "development",
      imgURL: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p>
              Estos proyectos son solo ejemplos de mi experiencia y habilidades
              como programadora en React, Node.js, CSS y MongoDB. Mi enfoque en
              la creación de interfaces de usuario intuitivas, el desarrollo de
              aplicaciones eficientes y la implementación de soluciones
              escalables me ha permitido ofrecer resultados profesionales y de
              calidad en todos mis proyectos. Estoy emocionada por seguir
              aprendiendo y creciendo en este campo apasionante y desafiante.
            </p>
            <TabContainer id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">loren indu</TabPane>
                <TabPane eventKey="third">loren indu</TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" />
    </section>
  );
};
