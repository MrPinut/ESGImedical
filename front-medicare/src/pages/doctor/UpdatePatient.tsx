import NavDoctor from "../../components/NavDoctor";
import {
  Button,
  Card,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

function UpdatePatient() {
  // const navigate = useNavigate();

  function handleSubmit() {
    // navigate("/doctor/consultation/ordonnance");
  }

  return (
    <>
      <NavDoctor />
      <div className="mt-4">
        <Button href="/doctor/patients" variant="outline-primary">
          Retour
        </Button>
      </div>

      <h1 className="text-center p-4">Modifier les informations du patient</h1>
      <Form className="m-5">
        <Container>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Nom</Form.Label>
                <InputGroup.Text id="basic-addon2">Dupont</InputGroup.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Prénom</Form.Label>
                <InputGroup.Text id="basic-addon2">Pierre</InputGroup.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Date de naissance</Form.Label>
                <InputGroup.Text id="basic-addon2">10/10/2003</InputGroup.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Lieu de naissance</Form.Label>
                <InputGroup.Text id="basic-addon2">Paris</InputGroup.Text>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Allergie</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Antécédents</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Informations importantes à noter</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Container>

        <div className="text-center">
          <Button
            variant="outline-success"
            type="submit"
            onClick={handleSubmit}
          >
            Valider
          </Button>
        </div>
      </Form>
    </>
  );
}
export default UpdatePatient;
