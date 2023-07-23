import { Card, Col, Row, Container, Button, Table } from "react-bootstrap";
import NavDoctor from "../../components/NavDoctor";

function DetailPatient() {
  return (
    <>
      <NavDoctor />
      <div className="mt-4">
        <Button href="/doctor/patients" variant="outline-primary">
          Retour
        </Button>
      </div>
      <h1 className="text-center p-4 m-2">
        Information du patient{" "}
        <Button href="/doctor/patient/update" variant="outline-warning">
          Modifier
        </Button>{" "}
      </h1>

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

      {/* LISTES DE CONSULTATIONS */}
      <h1 className="text-center p-4">
        Listes des consultations{" "}
        <Button href="/doctor/writeConsultation" variant="outline-primary">
          + Nouvelle consultation
        </Button>
      </h1>
      <div>
        <Table striped="columns" className="m-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Docteur</th>
              <th>Spécialité</th>
              <th>Description de la consultation</th>
              <th>Informations importantes à retenir</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>20/07/2023</td>
              <td>Jean Dupuis</td>
              <td>Généraliste</td>
              <td>Consultation pour maux de tête et de gorges</td>
              <td>Il est juste tombé enrhumé</td>
              <td>
                <Container>
                  <Row>
                    <Col>
                      <Button
                        href="/doctor/consultation/detailConsultation"
                        variant="outline-success"
                      >
                        Consulter
                      </Button>
                    </Col>

                    <Col>
                      <Button
                        href="/doctor/consultation/delete"
                        variant="outline-danger"
                      >
                        X
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>10/06/2023</td>
              <td>Marie Lefevre</td>
              <td>Dentiste</td>
              <td>Check annuel dentaire avec détartrage</td>
              <td>
                Attention au dent de sagesses qui doivent bientôt être enlevé
              </td>
              <td>
                <Container>
                  <Row>
                    <Col>
                      <Button
                        href="/doctor/writeConsultation"
                        variant="outline-success"
                      >
                        Consulter
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        href="/doctor/writeConsultation"
                        variant="outline-danger"
                      >
                        X
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default DetailPatient;
