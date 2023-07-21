import { Button } from "react-bootstrap";
import NavAdmin from "../../components/NavAdmin";
import Form from "react-bootstrap/Form";

function AddDoctor() {
  return (
    <>
      <NavAdmin />
      <h1 className="text-center p-4">Ajouter un docteur</h1>
      <Form className="m-5">
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Email : </Form.Label>
          <Form.Control type="email" placeholder="ex: jean@medecin.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nom : </Form.Label>
          <Form.Control type="name" placeholder="Dupuis" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Prénom : </Form.Label>
          <Form.Control type="name" placeholder="Jean" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Spécialité : </Form.Label>
          <Form.Control type="text" placeholder="ex: Généraliste" />
        </Form.Group>
        <Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Rôles</option>
            <option value="1">Docteur</option>
            <option value="2">Infirmière</option>
            <option value="2">Pompier</option>
            <option value="2">Hôpital</option>
            <option value="2">...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Control type="submit" value="Ajouter +"></Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}
export default AddDoctor;
