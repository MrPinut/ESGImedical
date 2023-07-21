import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MiniNav from "../../../components/MiniNav";
import Header from "../../../components/Header";

function Vaccine() {
  return (
    <>
      <Header />
      <MiniNav />
      <h1 className="text-center">Mes Vaccins</h1>
      <Container className="p-4">
        <Row>
          {/* UPDATE DATA FROM BDD OR BLOCKCHAIN --> MAPPING */}
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Dipheries-tétanos-Poliomytélite</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  02/04/2003
                </Card.Subtitle>
                <Card.Text>
                  <div>
                    <span>Docteur:</span> Luc Dupuis
                  </div>
                  <div>
                    <span>Adresse:</span> 10 Avenue Victor Hugo, 75003
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* UNTIL HERE  */}
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Pneumocoque</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  02/04/2003
                </Card.Subtitle>
                <Card.Text>
                  <div>
                    <span>Docteur:</span> Luc Dupuis
                  </div>
                  <div>
                    <span>Adresse:</span> 10 Avenue Victor Hugo, 75003
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Hépatite B</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  02/04/2003
                </Card.Subtitle>
                <Card.Text>
                  <div>
                    <span>Docteur:</span> Luc Dupuis
                  </div>
                  <div>
                    <span>Adresse:</span> 10 Avenue Victor Hugo, 75003
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Vaccine;
