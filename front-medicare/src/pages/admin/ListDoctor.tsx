import NavAdmin from "../../components/NavAdmin";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { ChangeEvent } from "react";

function ListDoctors() {
  return (
    <>
      <NavAdmin />
      <h1 className="text-center p-4">
        Liste des docteurs{" "}
        <Button href="/admin/doctor/add" variant="outline-primary">
          + Ajouter un docteur
        </Button>
      </h1>
      <div className="">
        <Table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Date de naissance</th>
              <th>Spécialité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* UPDATE DATA HERE FROM BDD OR BLOCKCHAIN --> MAKE A MAPPING*/}
            <tr>
              <td>1</td>
              <td>Mark Boulanger</td>
              <td>02/09/2021</td>
              <td>Généraliste</td>
              <td>
                <Container>
                  <Row>
                    <Col>
                      <Button
                        href="/admin/doctor/info"
                        variant="outline-success"
                      >
                        Consulter
                      </Button>
                    </Col>

                    <Col>
                      <Button
                        href="/admin/doctor/delete"
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
              <td>Généraliste</td>

              <td>
                <Container>
                  <Row>
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
                        href="/doctor/patient/delete"
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
