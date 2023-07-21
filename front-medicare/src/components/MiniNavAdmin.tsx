import Nav from "react-bootstrap/Nav";

function MiniNavAdmin() {
  return (
    <Nav fill variant="underline" defaultActiveKey="" className="rounded p-4">
      {/* <Nav.Item>
        <Nav.Link href="/histories">Résumés</Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link href="/admin/listPatient">Liste Patients</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/listDoctor">Liste Docteurs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin/listParamed">Liste des paramédicaux</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MiniNavAdmin;
