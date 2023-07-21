// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Doctolib {

    // Structure pour stocker les informations des médecins
    struct Doctor {
        string firstName;
        string lastName;
        string specialty;
    }

    // Mapping pour associer l'adresse du médecin à ses informations
    mapping(address => Doctor) private doctors;

    // Structure pour stocker les informations des patients
    struct Patient {
        string firstName;
        string lastName;
        string dateOfBirth;
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
        string memory _speciality
    ) external onlyAdmin {
        require(!isDoctor[msg.sender], "Already registered as a doctor");
        Doctor memory newDoctor = Doctor({
            firstName: _firstName,
            lastName: _lastName,
            specialty: _speciality
        });
        doctors[msg.sender] = newDoctor;
        isDoctor[msg.sender] = true;
    }

    // Fonction pour mettre à jour les informations d'un médecin
    function updateDoctorInfo(
        string memory _firstName,
        string memory _lastName,
        string memory _speciality
    ) external onlyDoctorOrAdmin {
        require(isDoctor[msg.sender], "You are not registered as a doctor");
        doctors[msg.sender].firstName = _firstName;
        doctors[msg.sender].lastName = _lastName;
        doctors[msg.sender].specialty = _speciality;
    }

    // Fonction pour supprimer un médecin
    function removeDoctor(address _doctorAddress) external onlyAdmin {
        require(isDoctor[_doctorAddress], "Invalid doctor address");
        delete doctors[_doctorAddress];
        isDoctor[_doctorAddress] = false;
    }

    // Fonction pour ajouter un patient
    function addPatient (
        string memory _firstName,
        string memory _lastName,
        string memory _dateOfBirth
    ) external onlyDoctorOrAdmin {
        require(!isDoctor[msg.sender], "Already registered as a doctor");
        Patient memory newPatient = Patient({
            firstName: _firstName,
            lastName: _lastName,
            dateOfBirth: _dateOfBirth
        });
        patients[msg.sender] = newPatient;
    }

    // Fonction pour mettre à jour les informations d'un patient
    function updatePatientInfo(
        string memory _firstName,
        string memory _lastName,
        string memory _dateOfBirth
    ) external onlyDoctorOrAdmin {
        require(bytes(patients[msg.sender].firstName).length != 0, "You must be a registered patient");
        patients[msg.sender].firstName = _firstName;
        patients[msg.sender].lastName = _lastName;
        patients[msg.sender].dateOfBirth = _dateOfBirth;
    }

    // Fonction pour supprimer un patient (accessible aux administrateurs uniquement)
    function removePatient(address _patientAddress) external onlyDoctorOrAdmin {
        require(bytes(patients[_patientAddress].firstName).length != 0, "Invalid patient address");
        delete patients[_patientAddress];
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
}