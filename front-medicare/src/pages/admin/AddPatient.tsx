import { Button } from "react-bootstrap";
import NavAdmin from "../../components/NavAdmin";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddPatient() {
  return (
    <>
      <NavAdmin />
      <h1 className="text-center p-4">Ajouter un patient</h1>
      <Form className="m-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="name" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="name" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Select aria-label="Default select example">
                  <option>Groupe Sanguin</option>
                  <option value="1">O</option>
                  <option value="2">AB</option>
                  <option value="2">A</option>
                  <option value="2">B</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Select aria-label="Default select example">
                  <option>Signe</option>
                  <option value="1">-</option>
                  <option value="2">+</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Form.Group className="mt-4">
          <Form.Control type="submit" value="Ajouter +"></Form.Control>
        </Form.Group>
        <Button variant="outline-light">Light</Button>{" "}
      </Form>
    </>
  );
}
export default AddPatient;
