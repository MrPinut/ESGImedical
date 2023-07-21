import { Card } from "react-bootstrap";
import Header from "../../components/Header";
import NavAccount from "../../components/NavAccount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function Payment() {
  return (
    <>
      <Header />
      <NavAccount />
      <h1 className="text-center p-4 mt-2">Mes Payments</h1>
      <Card border="dark" className="mt-5" style={{ width: "100%" }}>
        <Card.Header>Informations essentielles</Card.Header>
        <Card.Body>
          <Container>
            {/* A REMPLIR AVEC LES DONNEES BDD OU BLOCKCHAIN */}
            <Row className="p-4">
              <Col>
                <Card.Title>Ma Mutelle</Card.Title>
                <Card.Text>
                  <div>Oragnisme Assureur: Harmonie Mutuelle </div>
                  <div>Adresse:</div>
                  <div>N°</div>
                </Card.Text>
              </Col>
              <Col>
                <Card.Title>Informations Adhérent</Card.Title>
                <div>N°AMC: 9 9 0612 1</div>
                <div>Type de convention: AC C5R</div>
                <div>N°Adhérent: 000000000XXXX</div>
                <div>
                  Période de validité: 01/01/2019 <br /> 31/12/2019{" "}
                </div>
              </Col>
            </Row>
            <Row>
              <h4 className="text-center pt-5">Carte Mutuelle</h4>
              <Table responsive variant="dark">
                <thead>
                  <tr>
                    <th colSpan={4} className="text-center">
                      BENEFICIAIRES
                    </th>
                    <th colSpan={10} className="text-center">
                      DEPENSES DE SANTE CONCERNEES PAR LE TIERS PAYANT
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th>Prénom</th>
                    <th>Date de naissance</th>
                    <th>N°Sécurité Sociale</th>
                    <th>PHAR</th>
                    <th>PH2</th>
                    <th>CERL</th>
                    <th>TRAN</th>
                    <th>AUXM</th>
                    <th>HOSP</th>
                    <th>DESO</th>
                    <th>OPAU</th>
                    <th>DEPR</th>
                    <th>DEOR</th>
                    {/* 
                    {Array.from({ length: 12 }).map((_, index) => (
                      <th key={index}>Table heading</th>
                    ))} */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jean Dupont</td>
                    <td>10/10/1950</td>
                    <td>1 73 01 59 XXX XXX XX</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>(1)</td>
                    <td>100</td>
                    <td>(1)</td>
                    <td>(1)</td>
                    <td>(1)</td>

                    {/* {Array.from({ length: 12 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))} */}
                  </tr>
                  <tr>
                    <td>Marie Dupont</td>
                    <td>12/12/2012</td>
                    <td>2 73 01 59 XXX XXX XX</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>(1)</td>
                    <td>100</td>
                    <td>(1)</td>
                    <td>(1)</td>
                    <td>(1)</td>

                    {/* {Array.from({ length: 12 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))} */}
                  </tr>
                  <tr>
                    <td>Paul Dupont</td>
                    <td>12/01/2003</td>
                    <td>1 73 01 59 XXX XXX XX</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>(1)</td>
                    <td>100</td>
                    <td>(1)</td>
                    <td>(1)</td>
                    <td>(1)</td>

                    {/* {Array.from({ length: 12 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))} */}
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
export default Payment;
