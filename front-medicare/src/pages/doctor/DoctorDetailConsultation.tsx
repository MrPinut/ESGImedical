import { Card, Col, Row, Container, Button } from "react-bootstrap";
import NavDoctor from "../../components/NavDoctor";

function DoctorDetailConsultation() {
  function handleUpdate() {}
  return (
    <>
      <NavDoctor />
      <div>
        <Button href="/doctor/histories">Retour</Button>
      </div>

      <h1 className="text-center p-4">Détail de la consultation</h1>
      <Card border="dark" className="mt-2" style={{ width: "100%" }}>
        {/* A REMPLIR AVEC LES DONNEES BDD OU BLOCKCHAIN */}

        <Card.Header>02/09/2023 à 10:30</Card.Header>
        <Card.Body>
          <Container className="p-4">
            <Row>
              <Col>
                <Card.Title>Info du patient</Card.Title>
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
          <Card.Title className="p-4">Description</Card.Title>
          <Card.Text>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              ratione optio, quidem molestias quos eveniet nemo. Autem iusto,
              neque repudiandae magni, facere sint deserunt suscipit porro,
              repellat dolore nisi error!
            </div>
          </Card.Text>
          <Card.Title className="p-4">Résumé</Card.Title>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            assumenda sunt sequi cupiditate ipsa alias magnam labore inventore
            corporis. Molestias deleniti officiis quis beatae autem dolorem
            pariatur ex architecto quisquam.
          </div>
          <Card.Title className="p-4">Info urgent, à retenir</Card.Title>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            assumenda sunt sequi cupiditate ipsa alias magnam labore inventore
            corporis. Molestias deleniti officiis quis beatae autem dolorem
            pariatur ex architecto quisquam.
          </div>
          <Card.Title className="p-4">Ordonnance prescrit</Card.Title>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            assumenda sunt sequi cupiditate ipsa alias magnam labore inventore
            corporis. Molestias deleniti officiis quis beatae autem dolorem
            pariatur ex architecto quisquam.
          </div>
        </Card.Body>
      </Card>

      <div className="p-4 text-center">
        <Button onClick={handleUpdate}>Modifier</Button>
      </div>
    </>
  );
}
export default DoctorDetailConsultation;
