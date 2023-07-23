import Nav from "react-bootstrap/Nav";

function NavAccount() {
  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/account/">Mes Informations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/account/payment">Mes paiements</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
export default NavAccount;
