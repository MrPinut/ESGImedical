import Button from "react-bootstrap/Button";
import NavAdmin from "../../components/NavAdmin";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Admin() {
  return (
    <>
      <NavAdmin />
      <Container className="justify-content-center">
        <Row>
          <Col>
            <Button variant="outline-primary">Listes des patients</Button>{" "}
          </Col>
          <Col>
            <Button variant="outline-primary">Listes des doctors</Button>{" "}
          </Col>
          <Col>
            <Button variant="outline-primary">
              Listes des parapharmaciens
            </Button>
          </Col>
          <Col>
            <Button variant="outline-primary">Listes des mutuelles</Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Admin;
