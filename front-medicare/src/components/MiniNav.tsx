import Nav from "react-bootstrap/Nav";

function MiniNav() {
  return (
    <Nav fill variant="underline" defaultActiveKey="" className="rounded p-2">
      {/* <Nav.Item>
        <Nav.Link href="/histories">Résumés</Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link href="/consultations">Consultations</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ordonnances">Ordonnances</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/vaccins">Vaccins</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/radio">Radios</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MiniNav;
