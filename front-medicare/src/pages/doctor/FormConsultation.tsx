import NavDoctor from "../../components/NavDoctor";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function FormConsultation() {
  const navigate = useNavigate();

  function handleSubmit() {
    // HANDLE DATA NEED TO BE SUBMITTED
    navigate("/doctor/consultation/ordonnance");
  }

  return (
    <>
      <NavDoctor />
      <Card border="dark" className="mt-5" style={{ width: "100%" }}>
        {/* A REMPLIR AVEC LES DONNEES BDD OU BLOCKCHAIN */}

        <Card.Header>Informations essentielles</Card.Header>
        <Card.Body>
          <Container>
            <Card.Subtitle className="mb-2 text-muted">
              RDV: 10h30 Hôpital Père Lachaise Paris
            </Card.Subtitle>
            <Row>
              <Col>
                <Card.Title>Informations du patient</Card.Title>
                <Card.Text>
                  <div>Nom: Dupont</div>
                  <div>Prénom: Pierre</div>
                  <div>Date de naissance: 10/10/2010</div>
                  <div>Lieu de naissance: Paris 12ème</div>
                  <div>Nationalité: Français</div>
                  <div>Genre: M</div>
                </Card.Text>
              </Col>
              <Col>
                <Card.Title>Informations Médicales</Card.Title>
                <div>Groupe Sanguin: AB</div>
                <div>Allergies: Noix</div>
                <div>Antécédents: Cancer du poumon</div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <h1 className="text-center p-4">Détails de la consultation</h1>
      <Form className="m-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description détaillé</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>A résumé de la séance</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            Information importante à retenir pour les urgentiste, si il y en a
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        {/* REDIRECT TO WRITE ORDONNANCE ROUTE: /doctor/writeConsultation/ordonnance */}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Suivant
        </Button>
      </Form>
    </>
  );
}
export default FormConsultation;
