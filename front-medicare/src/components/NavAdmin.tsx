import Logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Button, Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import HomePage from "../pages/Home";

const chains = [arbitrum, mainnet, polygon];
const projectId = "607c342fe55eeaa0275572f582aa6cd8";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function NavAdmin() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleHome() {
    navigate("/");
  }
  function handleHistories() {
    navigate("/histories");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={handleHome}>Accueil</Nav.Link>
            <Nav.Link href="/admin">Liste</Nav.Link>
            <Nav.Link href="/admin/doctor">Ajout Doctor +</Nav.Link>
            <Nav.Link href="/admin/patient">Ajout Patient +</Nav.Link>

            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <div className="d-flex">
            <div className="me-2">
              <WagmiConfig config={wagmiConfig}>
                <Web3Button />
                <HomePage />
              </WagmiConfig>
              <Web3Modal
                projectId={projectId}
                ethereumClient={ethereumClient}
              />
            </div>
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavAdmin;
