import NavDoctor from "../../components/NavDoctor";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Datetime from "react-datetime";

function FormConsultation() {
  const navigate = useNavigate();
  const handleDateTimeChange = (date: any) => {
    // Handle the selected date-time here
    console.log(date);
  };

  function handleSubmit() {
    // HANDLE DATA NEED TO BE SUBMITTED
    navigate("/doctor/consultation/ordonnance");
  }

  return (
    <>
      <NavDoctor />
      <div className="mt-4">
        <Button href="/doctor/patients" variant="outline-primary">
          Retour
        </Button>
      </div>
      <Container>
        <Card border="dark" className="mt-3" style={{ width: "100%" }}>
          {/* A REMPLIR AVEC LES DONNEES BDD OU BLOCKCHAIN */}
          <Card.Header>Informations essentielles</Card.Header>
          <Card.Body>
            <Container>
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
      </Container>
      <Container>
        <h1 className="text-center p-4">Détails de la consultation</h1>
        <Form className="m-5">
          <Form.Group className="mb-5" controlId="dateTimePicker">
            <Form.Label>Date et heure de la consultation:</Form.Label>
            <Datetime
              inputProps={{
                placeholder: "Choisir la date et l'heure de la consultation",
                readOnly: true,
              }}
              onChange={handleDateTimeChange}
            />
          </Form.Group>
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
          <div className="text-center">
            <Button
              variant="outline-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Suivant
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
export default FormConsultation;
