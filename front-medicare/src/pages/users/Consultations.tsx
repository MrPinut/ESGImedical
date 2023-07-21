import Header from "../../components/Header";
import MiniNav from "../../components/MiniNav";
import Card from "react-bootstrap/Card";

function Consultation() {
  return (
    <>
      <Header />
      <MiniNav />
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Consultation</Card.Title>
            {/* UPDATE DATA FROM BDD OR BLOCKCHAIN WITH CORRESPONDING ID OR ADDRESS */}
            <Card.Subtitle className="mb-2 text-muted">
              02/09/2023 à 10:30
            </Card.Subtitle>
            <Card.Text>
              Monsieur Dupuis, n'a pas de baisse de vue par rapport aux années
              précédentes. <br />
              Attention à bien protéger ses yeux qui sont sec. Je lui prescrit
              des gouttes d'eau pour humidifié ses yeux <br />à prendre tous les
              matins.
            </Card.Text>
            {/* put prescriptions link */}
            <Card.Link href="/ordonnances">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default Consultation;
