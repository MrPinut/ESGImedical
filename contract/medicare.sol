// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Doctolib {

    // Structure pour stocker les informations des médecins
    struct Doctor {
        string firstName;
        string lastName;
        string gender;
        string nationality;
        string email;
        string birthday;
        string adress;
        string postalCode;
        string city;
        string specialty;
        address ETHaddress;
    }

    // Mapping pour associer l'adresse du médecin à ses informations
    mapping(address => Doctor) private doctors;

    // Structure pour stocker les informations des patients
    struct Patient {
        string firstName;
        string lastName;
        string gender;
        string nationality;
        string birthday;
        string adress;
        string postalCode;
        string city;
        string signe;
        string groupeSanguin;
        address ETHaddress;
    }

    // Mapping pour associer l'adresse du médecin à ses informations
    mapping(address => Patient) private patients;

    struct Reservation {
        string doctorFirstname;
        string doctorLastname;
        uint256 timestamp;
    }

    mapping(address => Reservation) private reservations;

    // Mapping pour gérer les rôles d'accès
    mapping(address => bool) private isAdmin;
    mapping(address => bool) private isDoctor;

    // Array to store doctor addresses
    address[] public doctorAddresses;
    address[] public patientAddresses;

    constructor() {
        isAdmin[msg.sender]=true;
    }

    // modifier pour restreindre l'accès aux administrateurs
    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Not authorized !");
        _;
    }

    // modifier pour restreindre l'accès aux médecins et administrateurs
    modifier onlyDoctorOrAdmin() {
        require(isDoctor[msg.sender] || isAdmin[msg.sender], "Not authorized !");
        _;
    }

    // Fonction pour ajouter un administrateur (à appeler une seule fois lors du déploiement)
    function addAdmin(address _adminAddress) external onlyAdmin {
        require(!isAdmin[_adminAddress], "Already admin");
        isAdmin[_adminAddress] = true;
    }

    // Fonction pour ajouter un médecin
    function addDoctor (
        string memory _firstName,
        string memory _lastName,
        string memory _gender,
        string memory _nationality,
        string memory _city,
        string memory _email,
        string memory _birthday,
        string memory _address,
        string memory _postalCode,
        string memory _specialty,
        address _ETHaddress
    ) external onlyAdmin {
        require(!isDoctor[_ETHaddress], "Already registered as a doctor");
        Doctor memory newDoctor = Doctor({
            firstName: _firstName,
            lastName: _lastName,
            gender: _gender,
            nationality: _nationality,
            email: _email,
            adress: _address,
            postalCode: _postalCode,
            ETHaddress: _ETHaddress,
            birthday: _birthday,
            city: _city,
            specialty: _specialty
        });
        doctors[_ETHaddress] = newDoctor;
        isDoctor[_ETHaddress] = true;
        doctorAddresses.push(_ETHaddress);
    }

    // Fonction pour mettre à jour les informations d'un médecin
    function updateDoctorInfo(
        string memory _firstName,
        string memory _lastName,
        string memory _gender,
        string memory _nationality,
        string memory _city,
        string memory _email,
        string memory _birthday,
        string memory _address,
        string memory _postalCode,
        string memory _specialty,
        address _ETHaddress
    ) external onlyDoctorOrAdmin {
        require(isDoctor[_ETHaddress], "You are not registered as a doctor");
        doctors[_ETHaddress].firstName = _firstName;
        doctors[_ETHaddress].lastName = _lastName;
        doctors[_ETHaddress].gender = _gender;
        doctors[_ETHaddress].nationality = _nationality;
        doctors[_ETHaddress].email = _email;
        doctors[_ETHaddress].adress = _address;
        doctors[_ETHaddress].postalCode = _postalCode;
        doctors[_ETHaddress].city = _city;
        doctors[_ETHaddress].birthday = _birthday;
        doctors[_ETHaddress].specialty = _specialty;
        doctors[_ETHaddress].ETHaddress = _ETHaddress;
    }

    // Fonction pour supprimer un médecin
    function removeDoctor(address _doctorAddress) external onlyAdmin {
        require(isDoctor[_doctorAddress], "Invalid doctor address");
        delete doctors[_doctorAddress];
        isDoctor[_doctorAddress] = false;
         for (uint256 i = 0; i < doctorAddresses.length; i++) {
            if (doctorAddresses[i] == _doctorAddress) {
                doctorAddresses[i] = doctorAddresses[doctorAddresses.length - 1];
                doctorAddresses.pop();
                break;
            }
        }
    }

    // Fonction pour ajouter un patient
    function addPatient (
        string memory _firstName,
        string memory _lastName,
        string memory _gender,
        string memory _nationality,
        string memory _city,
        string memory _groupeSanguin,
        string memory _signe,
        string memory _address,
        string memory _postalCode,
        string memory _birthday,
        address _ETHaddress
    ) external onlyDoctorOrAdmin {
        require(bytes(patients[msg.sender].firstName).length == 0, "Already registered !");
        Patient memory newPatient = Patient({
            firstName: _firstName,
            lastName: _lastName,
            gender: _gender,
            nationality: _nationality,
            groupeSanguin: _groupeSanguin,
            signe: _signe,
            adress: _address,
            postalCode: _postalCode,
            city: _city,
            birthday: _birthday,
            ETHaddress: _ETHaddress
        });
        patients[_ETHaddress] = newPatient;
        patientAddresses.push(_ETHaddress);
    }

    // Fonction pour mettre à jour les informations d'un patient
    function updatePatientInfo(
        string memory _firstName,
        string memory _lastName,
        string memory _gender,
        string memory _nationality,
        string memory _groupeSanguin,
        string memory _signe,
        string memory _city,
        string memory _address,
        string memory _postalCode,
        string memory _dateOfBirth,
        address _ETHaddress
    ) external onlyDoctorOrAdmin {
        require(bytes(patients[msg.sender].firstName).length != 0, "You must be a registered patient");
        patients[_ETHaddress].firstName = _firstName;
        patients[_ETHaddress].lastName = _lastName;
        patients[_ETHaddress].gender = _gender;
        patients[_ETHaddress].nationality = _nationality;
        patients[_ETHaddress].groupeSanguin = _groupeSanguin;
        patients[_ETHaddress].signe = _signe;
        patients[_ETHaddress].adress = _address;
        patients[_ETHaddress].postalCode = _postalCode;
        patients[_ETHaddress].city = _city;
        patients[_ETHaddress].birthday = _dateOfBirth;
        patients[_ETHaddress].ETHaddress = _ETHaddress;
    }

    // Fonction pour supprimer un patient (accessible aux administrateurs uniquement)
    function removePatient(address _patientAddress) external onlyDoctorOrAdmin {
        require(bytes(patients[_patientAddress].firstName).length != 0, "Invalid patient address");
        delete patients[_patientAddress];
        for (uint256 i = 0; i < patientAddresses.length; i++) {
            if (patientAddresses[i] == _patientAddress) {
                patientAddresses[i] = patientAddresses[patientAddresses.length - 1];
                patientAddresses.pop();
                break;
            }
        }
    }

    // Fonction pour obtenir les informations du médecin actuel
    function getDoctorInfo(address _doctorAddress) external view onlyDoctorOrAdmin returns (Doctor memory) {
        return doctors[_doctorAddress];
    }

        // Fonction pour obtenir les informations du médecin actuel
    function getPatientInfo(address _patientAddress) external view onlyDoctorOrAdmin returns (Patient memory) {
        return patients[_patientAddress];
    }

    function bookReservation(address _doctorAddress) external {
        require(isDoctor[_doctorAddress], "Invalid doctor address");

        // Get patient details
        Patient memory patient = patients[msg.sender];
        require(bytes(patient.firstName).length != 0, "You must be a registered patient");

        // Get doctor details
        Doctor memory doctor = doctors[_doctorAddress];

        string memory _doctorFirstName = doctor.firstName;
        string memory _doctorLastName = doctor.lastName;

        // Create a new reservation
        Reservation memory newReservation = Reservation({
            doctorFirstname: _doctorFirstName,
            doctorLastname: _doctorLastName,
            timestamp: block.timestamp
        });
        reservations[msg.sender] = newReservation;
    }

    // Fonction pour supprimer une réservation
    function removeReservation(address _patientAddress) external onlyDoctorOrAdmin {
        require(bytes(patients[_patientAddress].firstName).length != 0, "Invalid patient address");
        delete reservations[_patientAddress];
    }

    function getPatientReservation() external view returns (Reservation memory) {
        return reservations[msg.sender];
    }

    // Function to get the total count of doctors
    function getDoctorsCount() external view returns (uint256) {
        return doctorAddresses.length;
    }

    // Function to get the total count of patients
    function getpatientsCount() external view returns (uint256) {
        return patientAddresses.length;
    }
}