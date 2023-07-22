import { Button, Container, Row, Col, Form } from "react-bootstrap";
import NavAdmin from "../../components/NavAdmin";
import Datetime from "react-datetime";
import { useEffect, useState } from "react";
import medicare from '../../contract/medicare.json';
const ethers = require("ethers");

function AddPatient() {

  useEffect(() => {
    buildContract();
  }, []);

  const [accounts, setAccounts] = useState(['']);
  const [contract, setContract] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [ethAddress, setEthAddress] = useState('');

  const contractAddress = "0x48453b191516ED0bDb21916348691a7E85242085";

  async function buildContract() {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(accounts);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, medicare, signer);
      setContract(contract);
    }
  }

  async function addDoctor() {
    if (contract && typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, medicare, signer);
      const transaction = await contract.addDoctor( 
        firstName,
        lastName,
        gender,
        nationality,
        city,
        email,
        address,
        postalCode,
        speciality,
        ethAddress);
      await transaction.wait();
    }
  }

  const handleDateTimeChange = (date: any) => {
    setDateOfBirth(date.toString());
  };  

  return (
    <>
      <NavAdmin />
      <h1 className="text-center p-4">Ajouter un docteur</h1>
      <Form className="m-5">
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                type="name"
                placeholder=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                type="name"
                placeholder=""
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Genre</Form.Label>
              <Form.Select
              aria-label="Default select example"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              >
                <option>Choisir</option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="X">X</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
              type="name"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlSelect1"
              >
                <Form.Label>Spécialité</Form.Label>
                <Form.Control
                type="name"
                placeholder=""
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
              />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="dateTimePicker">
                <Form.Label>Date de naissance</Form.Label>
                <Datetime
                  inputProps={{
                    placeholder: "Choisir",
                    readOnly: true,
                  }}
                  onChange={handleDateTimeChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Nationalité</Form.Label>
                <Form.Control
                type="name"
                placeholder=""
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Adresse</Form.Label>
                <Form.Control
                type="name"
                placeholder=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Ville</Form.Label>
                <Form.Control
                type="name"
                placeholder=""
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Code Postal</Form.Label>
                <Form.Control
                type="name"
                placeholder=""
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Ethereum Address</Form.Label>
              <Form.Control
                type="name"
                placeholder=""
                value={ethAddress}
                onChange={(e) => setEthAddress(e.target.value)} />
            </Form.Group>
          </Row>
        </Container>
      </Form>
      <div className="text-center">
        <Button onClick={addDoctor}>+ Ajouter</Button>
      </div>
    </>
  );
}

export default AddPatient;
