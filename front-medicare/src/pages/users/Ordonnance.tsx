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
              <th>Médicament</th>
              <th>Dose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>20/07/2023</td>
              <td>Doliprane</td>
              <td>1 matin et 1 le soir</td>
            </tr>
            <tr>
              <td>2</td>
              <td>10/06/2023</td>
              <td>Humex</td>
              <td>1 matin, midi et soir</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default Ordonnances;
