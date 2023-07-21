import Header from "../../components/Header";
import MiniNav from "../../components/MiniNav";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Ordonnances() {
  return (
    <>
      <Header />
      <MiniNav />
      <h1 className="text-center p-4">Listes des ordonnances</h1>
      <div>
        <Table striped="columns" className="m-5">
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
                <Button variant="outline-secondary">Détails</Button>{" "}
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
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default Ordonnances;
