import Logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import medicare from '../contract/medicare.json';
import { ethers } from "ethers";
import { Button } from "react-bootstrap";
import { Contract } from 'ethers';
import '../App.css';

const clientId =
"BGMApyXXMPWIS75QSAJ5ENmxM4Qd7YNtDXBefXFt01hLoLqmb3rGjUtfMN-UL5N0U03Rp5LBAkQ1RLEoMFTHgKc";

const contractAddress = "0x629c3ddE74A05781b99cE1d9f6f4B6771F1B7cf4";

function Header() {

  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [accounts, setAccounts] = useState(['']);
  const [contract, setContract] = useState<Contract | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const web3auth = new Web3Auth({
      clientId:clientId,
      chainConfig: {
        chainNamespace: "eip155",
        chainId: "0x5",
        rpcTarget: "https://rpc.ankr.com/eth_goerli",
      },
    });
    setWeb3auth(web3auth);
  }, []);

  const connectWallet = async () => {
    try {
      if (!web3auth) {
        console.error("Web3Auth instance not available.");
        return;
      }
      await web3auth.initModal();
      await web3auth.connect();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, medicare, signer);
      setContract(contract);
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccounts(accounts);
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
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/histories">Historiques</Nav.Link>
            <NavDropdown title="Informations" id="navbarScrollingDropdown">
              <NavDropdown.Item>Documents</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/account">Mon Compte</NavDropdown.Item>
            </NavDropdown>
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

export default Header;
