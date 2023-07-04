import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "../hook/useForm";

//import contactImg from "../assets/img/contact-img.svg";
import contactImg from "../assets/img/prueba.png";
import TrackVisibility from "react-on-screen";

import Swal from "sweetalert2";
import portafolioApi from "../api/portafolioApi";

const formIni = {
  firstName: "",
  email: "",
  asunto: "",
  message: "",
  onInputChange: "",
};

export const Contact = () => {
  const { firstName, email, asunto, message, onInputChange } = useForm(formIni);

  const onSumitd = async (event) => {
    event.preventDefault();
    const nombre = firstName;
    const correoDestino = email;
    const asuntop = asunto;
    const contenido = message;

    // console.log(nombre, correoDestino, asuntop, contenido);
    try {
      const { data } = await portafolioApi.post("form", {
        nombre,
        correoDestino,
        asuntop,
        contenido,
      });
      console.log(data);

      Swal.fire("Enviado", "Muy pronto me contactaré contigo", "success");
    } catch (error) {
      const prueba = error.response.data.errors;
      console.log(prueba);
      //console.log(error.response.data.errors);
      if (prueba) {
        for (let index = 0; index < prueba.length; index++) {
          const element = prueba[index];
          console.log(element);
        }
      }
      //if (errores) {
      // errores.forEach((error) => {
      //     Swal.fire("Error al Enviar", error.smg, "error");
      //   });
      // }
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Contactamé</h2>
                  <form className="align-items-center" onSubmit={onSumitd}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          placeholder="Nombre Completo"
                          name="firstName"
                          value={firstName}
                          onChange={onInputChange}
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Correo"
                          name="email"
                          value={email}
                          onChange={onInputChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="asunto"
                          name="asunto"
                          value={asunto}
                          onChange={onInputChange}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          value={message}
                          onChange={onInputChange}
                        ></textarea>
                        <button type="submit">
                          <span>Enviar</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
