import Table from "react-bootstrap/Table";
import NavDoctor from "../../components/NavDoctor";
import { Button } from "react-bootstrap";

function DoctorAppointments() {
  return (
    <>
      <NavDoctor />
      <h1 className="text-center p-4">Mes futurs rendez-vous</h1>
      <div className="ml-2 mr-2 m-5">
        <Table className="ml-2 mr-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Date-Heure</th>
              <th>Lieu</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* UPDATE DATA HERE FROM BDD OR BLOCKCHAIN --> MAKE A MAPPING*/}
            <tr>
              <td>1</td>
              <td>Mark Boulanger</td>
              <td>02/09/2023-10:30</td>
              <td>Hôpital Père Lachaise, Paris</td>
              <td>Vérification de la vue</td>
              {/* if time's up */}
              <Button
                href="/doctor/writeConsultation"
                variant="outline-primary"
              >
                Rédiger la consultation
              </Button>
            </tr>
            {/* UNTIL HERE, CSS DOWN BELOW IS USELESS */}
            <tr>
              <td>2</td>
              <td>Pascal Chabert</td>
              <td>03/09/2023-10:30</td>
              <td>Hôpital Père Lachaise, Paris</td>
              <td>Analyse prise de sang</td>
              <Button
                variant="outline-primary"
                href="/doctor/writeConsultation"
                // onClick={handleAppointment}
              >
                Rédiger la consultation
              </Button>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default DoctorAppointments;
