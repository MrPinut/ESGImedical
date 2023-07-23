import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import NavAdmin from '../../components/NavAdmin';
import medicare from '../../contract/medicare.json';
const ethers = require('ethers');

function ListPatients() {
  type Patient = {
    firstName: string;
    lastName: string;
    gender: string;
    nationality: string;
    city: string;
    groupeSanguin: string;
    signe: string;
    address: string;
    postalCode: string;
    birthday: string;
    ETHaddress: string;
  };

  const [patientsAddresses, setPatientsAddresses] = useState<string[]>([]);
  const [patientsInfo, setPatientsInfo] = useState<Patient[]>([]);

  const contractAddress = "0x69a0Ec83e4D713169D2CE709cfDfB8705112e539";

  useEffect(() => {
    init();
  }, []);

  async function init() {
    // Connect to Ethereum provider
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Initialize contract instance
      const contract = new ethers.Contract(contractAddress, medicare, signer);
      const patientsCount = await contract.getpatientsCount();
      await patientsCount.wait;
      console.log(patientsCount)
      const patientsAddressesArray = [];
      const patientsInfoArray = [];
      for (let i = 0; i < patientsCount; i++) {
        console.log(i);
        const patientAddress = await contract.patientAddresses(i);
        await patientAddress.wait;
        console.log(patientAddress);
        patientsAddressesArray.push(patientAddress);
        const patientInfo = await contract.getPatientInfo(patientAddress);
        await patientInfo.wait;
        patientsInfoArray.push(patientInfo);
        console.log(patientInfo);
      }
      setPatientsAddresses(patientsAddressesArray);
      setPatientsInfo(patientsInfoArray);
    }
  }

  async function deletePatient(ETHaddress: string) {
    console.log(ETHaddress);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, medicare, signer);
    const transaction = await contract.removePatient(ETHaddress);
    await transaction.wait();
    init();
  }

  return (
    <>
      <NavAdmin />
      <h1 className="text-center p-4">
        Liste des patients{' '}
        <Button href="/admin/patient/add" variant="outline-primary">
          + Ajouter un patient
        </Button>
      </h1>
      <div>
        <h1>Patients List</h1>
        <Table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Location</th>
              <th>Groupe Sanguin</th>
              <th>Actions</th>
            </tr>
          </thead>
          {patientsInfo.map((patient, index) => (
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {patient.firstName} {patient.lastName}
                </td>
                <td>{patient.city}</td>
                <td>{patient.groupeSanguin} {patient.signe}</td>
                <td>
                  <Container>
                    <Row>
                      <Col>
                        <Button href="/admin/patient/info" variant="outline-success">
                          Consulter
                        </Button>
                      </Col>

                      <Col>
                        <Button onClick={() => deletePatient(patient.ETHaddress)} variant="outline-danger">
                          SUPPRIMER
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
}

export default ListPatients;
