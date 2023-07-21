import { Card } from "react-bootstrap";
import Header from "../../components/Header";
import NavAccount from "../../components/NavAccount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Account() {
  return (
    <>
      <Header />
      <NavAccount />
      <h1 className="text-center p-4 m-2">Mon compte </h1>
      <Card border="dark" className="mt-5" style={{ width: "100%" }}>
        {/* A REMPLIR AVEC LES DONNEES BDD OU BLOCKCHAIN */}

        <Card.Header>Informations essentielles</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Title>Informations Personnelles</Card.Title>
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
    </>
  );
}
export default Account;
