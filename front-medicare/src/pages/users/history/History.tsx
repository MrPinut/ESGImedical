import Header from "../../../components/Header";
import MiniNav from "../../../components/MiniNav";
import Table from "react-bootstrap/Table";

function History() {
  return (
    <>
      <Header />
      <MiniNav />
      <h1 className="text-center p-4">Résumé des consultations </h1>
      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Docteur</th>
            <th>Spécialité</th>
            <th>Description de la consultation</th>
            <th>Informations importantes à retenir</th>
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
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default History;
