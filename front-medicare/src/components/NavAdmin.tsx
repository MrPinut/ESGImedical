import Logo from "../assets/logo.png";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import medicare from '../contract/medicare.json';
import { ethers } from "ethers";
import '../App.css';
import { Contract } from 'ethers';

const contractAddress = "0x629c3ddE74A05781b99cE1d9f6f4B6771F1B7cf4";

function NavAdmin() {

  const [accounts, setAccounts] = useState(['']);
  const [copied, setCopied] = useState(false);
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccounts(accounts);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, medicare, signer);
      setContract(contract);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(accounts[0])
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Erreur lors de la copie du texte dans le presse-papiers :", error);
      });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/admin">
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
            <Nav.Link href="/admin">Accueil</Nav.Link>
            <Nav.Link href="/admin/doctors">Liste Docteurs</Nav.Link>
            <Nav.Link href="/admin/patients">Liste Patient</Nav.Link>

            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <div className="d-flex">
            <div className="me-2">
              {(accounts[0].length > 0) ? (
                <Button className={copied ? "copied-animation" : ""} onClick={handleCopyToClipboard} variant="outline-success"><span>{accounts[0].substring(0, 5) + '...' + accounts[0].substring(accounts[0].length - 3)}</span></Button>

              ):(
                <Button onClick={connectWallet}>Connect Wallet</Button>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavAdmin;
