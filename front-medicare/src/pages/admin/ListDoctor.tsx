import NavAdmin from "../../components/NavAdmin";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import medicare from '../../contract/medicare.json';
const ethers = require("ethers");

function ListDoctors() {

  type Doctor = {
    firstName: string;
    lastName: string;
    gender: string;
    nationality: string;
    city: string;
    email: string;
    birthday: string;
    adress: string;
    postalCode: string;
    specialty: string;
    ETHaddress: string;
  };

  const [doctorsInfo, setDoctorsInfo] = useState<Doctor[]>([]);

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
      const doctorsCount = await contract.getDoctorsCount();
      await doctorsCount.wait;
      const doctorsAddressesArray = [];
      const doctorsInfoArray = [];
      for (let i = 0; i < doctorsCount; i++) {
        const doctorAddress = await contract.doctorAddresses(i);
        await doctorAddress.wait;
        doctorsAddressesArray.push(doctorAddress);
        const doctorInfo = await contract.getDoctorInfo(doctorAddress);
        await doctorInfo.wait;
        doctorsInfoArray.push(doctorInfo);
      }
      setDoctorsInfo(doctorsInfoArray);
    }
  }

  async function deleteDoctor(ethAddress: string) {
    console.log(ethAddress);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, medicare, signer);
    const transaction = await contract.removeDoctor(ethAddress);
    await transaction.wait();
    init();
  }

  return (
    <>
      <NavAdmin />
      <h1 className="text-center p-4">
        Liste des docteurs{" "}
        <Button href="/admin/doctor/add" variant="outline-primary">
          + Ajouter un docteur
        </Button>
      </h1>
      <div>
      <h1>Doctors List</h1>
      <Table className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Location</th>
              <th>Speciality</th>
              <th>Actions</th>
            </tr>
          </thead>
          {doctorsInfo.map((doctor, index) => (
          <tbody>
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{doctor.firstName} {doctor.lastName}</td>
              <td>{doctor.city}</td>
              <td>{doctor.specialty}</td>
              <td>
              <Container>
                <Row>
                  <Col>
                    <Button
                      href="/admin/doctor/info"
                      variant="outline-success"
                    >
                      Consulter
                    </Button>
                  </Col>

                  <Col>
                    <Button
                      onClick={() => deleteDoctor(doctor.ETHaddress)}
                      variant="outline-danger"
                    >
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
export default ListDoctors;