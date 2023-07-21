import { Card, Col, Row, Container, Button } from "react-bootstrap";
import Header from "../../components/Header";

function DoctorDetailConsultation() {
  return (
    <>
      <Header />
      <div>
        <Button href="/histories">Retour</Button>
      </div>

      <h1 className="text-center p-4">Détail de la consultation</h1>
      <Card border="dark" className="mt-2" style={{ width: "100%" }}>
        {/* A REMPLIR AVEC LES DONNEES BDD OU BLOCKCHAIN */}

        <Card.Header>
          <div>Docteur : Pierre Dupont</div>
          <div>Spécialité: Généraliste</div>
          <div>Date : 02/09/2023 à 10:30</div>
          <div>Lieu: Paris 12ème</div>
        </Card.Header>
        <Card.Body>
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
    </>
  );
}
export default DoctorDetailConsultation;
