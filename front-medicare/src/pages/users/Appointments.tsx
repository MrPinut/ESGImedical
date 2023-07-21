import Table from "react-bootstrap/Table";
import Header from "../../components/Header";
function Appointments() {
  return (
    <>
      <Header />
      <h1 className="text-center p-4">Mes futurs rendez-vous</h1>
      <div className="ml-2 mr-2 m-5">
        <Table striped className="ml-2 mr-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Docteur</th>
              <th>Spécialité</th>
              <th>Date-Heure</th>
              <th>Lieu</th>
              <th>Type</th>
              <th>Autre</th>
            </tr>
          </thead>
          <tbody>
            {/* UPDATE DATA HERE FROM BDD OR BLOCKCHAIN --> MAKE A MAPPING*/}
            <tr>
              <td>1</td>
              <td>Mark Boulanger</td>
              <td>Ophtalmologue</td>
              <td>02/09/2023-10:30</td>
              <td>Hôpital Père Lachaise, Paris</td>
              <td>Vérification de la vue</td>
              <td>#</td>
            </tr>
            {/* UNTIL HERE, CSS DOWN BELOW IS USELESS */}
            <tr>
              <td>1</td>
              <td>Pascal Chabert</td>
              <td>Généraliste</td>
              <td>03/09/2023-10:30</td>
              <td>Hôpital Père Lachaise, Paris</td>
              <td>Analyse prise de sang</td>
              <td>#</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default Appointments;
