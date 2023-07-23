import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import NavAdmin from '../../components/NavAdmin';
import Datetime from 'react-datetime';
import medicare from '../../contract/medicare.json';
const ethers = require('ethers');

function AddPatient() {
  useEffect(() => {
    buildContract();
  }, []);

  const [contract, setContract] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [signe, setSigne] = useState('');
  const [groupeSanguin, setGroupeSanguin] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [ethAddress, setEthAddress] = useState('');

  const contractAddress = "0x69a0Ec83e4D713169D2CE709cfDfB8705112e539";

  async function buildContract() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, medicare, signer);
      setContract(contract);
    }
  }

  async function addPatient() {
    try {
      if (contract && typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, medicare, signer);
        const transaction = await contract.addPatient(
          firstName,
          lastName,
          gender,
          nationality,
          city,
          groupeSanguin,
          signe,
          address,
          postalCode,
          birthday, 
          ethAddress
        );
        await transaction.wait();
      }
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  }

  const handleDateTimeChange = (date: any) => {
    setBirthday(date.toString());
  };

  return (
    <>
      <NavAdmin />
      <h1 className="text-center p-4">Ajouter un patient</h1>
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
              <Form.Select aria-label="Default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option>Choisir</option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="X">X</option>
              </Form.Select>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="dateTimePicker">
                <Form.Label>Date de naissance</Form.Label>
                <Datetime
                  value={birthday}
                  onChange={handleDateTimeChange}
                  inputProps={{
                    placeholder: 'Choisir',
                    readOnly: true,
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Nationalité</Form.Label>
                <Form.Control type="name" placeholder="" value={nationality} onChange={(e) => setNationality(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="name" placeholder="" value={address} onChange={(e) => setAddress(e.target.value)} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="name" placeholder="" value={city} onChange={(e) => setCity(e.target.value)} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Code Postal</Form.Label>
                <Form.Control type="name" placeholder="" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="dateTimePicker">
                <Form.Label>Groupe Sanguin</Form.Label>
                <Form.Select aria-label="Default select example" value={groupeSanguin} onChange={(e) => setGroupeSanguin(e.target.value)}>
                  <option>Choisir</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="O">O</option>
                  <option value="AB">AB</option>
                </Form.Select>
                </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Signe</Form.Label>
                <Form.Select aria-label="Default select example" value={signe} onChange={(e) => setSigne(e.target.value)} >
                  <option>Choisir</option>
                  <option value="+">+</option>
                  <option value="-">-</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Eth Address</Form.Label>
              <Form.Control type="name" placeholder="" value={ethAddress} onChange={(e) => setEthAddress(e.target.value)} />
            </Form.Group>
          </Row>
        </Container>
      </Form>
      <div className="text-center">
        <Button onClick={addPatient}>+ Ajouter</Button>
      </div>
    </>
  );
}

export default AddPatient;
