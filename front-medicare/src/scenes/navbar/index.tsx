import { useEffect, useState } from "react";
import Logo from "@/assets/Logo.png";
import { ethers } from "ethers";
import useMediaQuery from "@/hooks/useMediaQuery";
import Web3Modal from "web3modal";
import { providerOptions } from "@/shared/ProviderOptions";
import { UserService } from "@/services";
import { UserDTO } from "../../dto";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

export const Navigation = ({
  accounts,
  setAccounts,
}: {
  accounts: any;
  setAccounts: any;
}) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 850px)");
  const [provider, setProvider] = useState<any>();
  const [library, setLibrary] = useState<any>();
  const [chainId, setChainId] = useState<Number>();
  const [addUser, setAddUser] = useState<UserDTO>();
  const [account, setAccount] = useState<string>();
  const [date, setDate] = useState<string>();
  const isConnected = Boolean(accounts[0]);

  async function connectWallet() {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);

      if (accounts) {
        setAccounts(accounts);
        setChainId(network.chainId);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const refreshState = () => {
    setAccount("");
    setChainId(0);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId: Number) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect");
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
    connectWallet();
    disconnect();
  }, [provider]);

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
            className="me-auto my-lg-0 my-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* {?account.subscription?( */}

            {/* ):(<div></div>)} */}
            {isConnected ? (
              <NavDropdown title="Dashboard" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My NFTs</NavDropdown.Item>
                <NavDropdown.Item href="/metrics">Metrics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/account">Account</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div></div>
            )}
            {!isConnected || accounts == "" ? (
              <Nav.Link href="" onClick={connectWallet}>
                Connect
              </Nav.Link>
            ) : (
              <Nav.Link href="" onClick={disconnect}>
                LogOut
              </Nav.Link>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
