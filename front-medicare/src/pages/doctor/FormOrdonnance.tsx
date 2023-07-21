import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import NavDoctor from "../../components/NavDoctor";

function FormOrdonnance() {
  // const navigate = useNavigate();

  function handleSubmit() {
    // navigate("/doctor");
  }
  return (
    <>
      <NavDoctor />
      <h1 className="p-4 text-center">Ordonnance</h1>
      <Form className="m-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Médicaments prescrits</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Dose</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Valider
          </Button>
        </div>
      </Form>
    </>
  );
}
export default FormOrdonnance;
