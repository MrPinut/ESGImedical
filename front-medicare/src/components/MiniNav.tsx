import Nav from "react-bootstrap/Nav";

function MiniNav() {
  return (
    <Nav fill variant="underline" defaultActiveKey="" className="rounded p-4">
      {/* <Nav.Item>
        <Nav.Link href="/histories">Résumés</Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link href="/histories">Consultations</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/histories/ordonnances">Ordonnances</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/histories/vaccines">Vaccins</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/histories/radios">Radios</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MiniNav;
