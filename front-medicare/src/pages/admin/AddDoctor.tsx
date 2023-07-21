import { Button, Container, Row, Col, Form } from "react-bootstrap";
import NavAdmin from "../../components/NavAdmin";
import Datetime from "react-datetime";

function AddPatient() {
  const handleDateTimeChange = (date: any) => {
    // Handle the selected date-time here
    console.log(date);
  };
  return (
    <>
      <NavAdmin />
      <h1 className="text-center p-4">Ajouter un docteur</h1>
      <Form className="m-5">
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Genre</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Choisir</option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="X">X</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control type="name" placeholder="" />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlSelect1"
              >
                <Form.Label>Spécialité</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="dateTimePicker">
                <Form.Label>Date de naissance</Form.Label>
                <Datetime
                  inputProps={{
                    placeholder: "Choisir",
                    readOnly: true,
                  }}
                  onChange={handleDateTimeChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Nationalité</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Code Postal</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mt-4">
            <Form.Control type="submit" value="Ajouter +"></Form.Control>
          </Form.Group>
        </Container>
      </Form>
      <div className="text-center">
        <Button variant="outline-light">+ Ajouter</Button>{" "}
      </div>
    </>
  );
}
export default AddPatient;
