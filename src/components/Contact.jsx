import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "../hook/useForm";

//import portafolioApi from "../api/portafolioApi";
import Swal from "sweetalert2";
import portafolioApi from "../api/portafolioApi";

const formIni = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  onInputChange: "",
};

export const Contact = () => {
  const { firstName, lastName, email, phone, message, onInputChange } =
    useForm(formIni);

  const onSumitd = async (event) => {
    event.preventDefault();
    const correoDestino = email;
    const contenido = message;
    const asunto = firstName;
    //console.log({ firstName, lastName, email, phone, message, onInputChange });
    try {
      const { data } = await portafolioApi.post("form", {
        correoDestino,
        contenido,
        asunto,
      });
      console.log(data);

      Swal.fire("Enviado", "Muy pronto me contactaré contigo", "success");
    } catch (error) {
      console.log(error);

      Swal.fire("Error al Enviar", "Vuelva a intentar", "error");
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <form className="align-items-center" onSubmit={onSumitd}>
          <Row>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                placeholder="Nombre"
                name="firstName"
                value={firstName}
                onChange={onInputChange}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                placeholder="Apellido"
                name="lastName"
                value={lastName}
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
                type="tel"
                placeholder="Phone"
                name="phone"
                value={phone}
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
      </Container>
    </section>
  );
};
