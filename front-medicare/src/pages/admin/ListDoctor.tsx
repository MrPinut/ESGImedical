import Table from "react-bootstrap/Table";
import NavAdmin from "../../components/NavAdmin";
import MiniNavAdmin from "../../components/MiniNavAdmin";
import { Button, Col, Container, Row } from "react-bootstrap";

function ListDoctors() {
  return (
    <>
      <NavAdmin />
      <MiniNavAdmin />
      <h1 className="text-center p-4">Mes patients</h1>
      <div className="">
        <Table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Date de naissance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* UPDATE DATA HERE FROM BDD OR BLOCKCHAIN --> MAKE A MAPPING*/}
            <tr>
              <td>1</td>
              <td>Mark Boulanger</td>
              <td>02/09/2021</td>
              <td>
                <Container>
                  <Row>
                    <Col>
                      <Button
                        href="/doctor/writeConsultation"
                        variant="outline-primary"
                      >
                        Rédiger une consultation
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        href="/doctor/patient/info"
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
            {/* UNTIL HERE, CSS DOWN BELOW IS USELESS */}
            <tr>
              <td>2</td>
              <td>Pascal Chabert</td>
              <td>03/09/2001</td>
              <td>
                <Container>
                  <Row>
                    <Col>
                      <Button
                        href="/doctor/writeConsultation"
                        variant="outline-primary"
                      >
                        Rédiger une consultation
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        href="/doctor/patient/info"
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
export default ListDoctors;
