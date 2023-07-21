import * as CryptoJS from "crypto-js";

// Generate the master key
function generateMasterKey(): string {
    return CryptoJS.lib.WordArray.random(16).toString();
}

// Derive a lower-level key from the master key
function deriveLowerLevelKey(masterKey: string): string {
    return masterKey + "_lower";
}

// Encrypt the data using AES and the given key
function encryptData(data: string[], key: string): string {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    return encryptedData;
}

// Decrypt the data using AES and the given key
function decryptData(encryptedData: string, key: string): string[] {
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
}

// Example usage:
function exampleUsage() {
    // Generate the master key
    const masterKey = generateMasterKey();

    // Derive the lower-level key from the master key
    const lowerLevelKey = deriveLowerLevelKey(masterKey);

    // Data to be encrypted (as an array)
    const originalData: string[] = ["This is the first element.", "This is the second element.", "This is the third element."];

    // Encrypt the data using the master key
    const encryptedDataWithMasterKey = encryptData(originalData, masterKey);

    // Encrypt the data using the lower-level key (only the first element)
    const encryptedDataWithLowerKey = encryptData(originalData.slice(0, 1), lowerLevelKey);

    // Decrypt the data using the master key and lower-level key
    const decryptedDataWithMasterKey = decryptData(encryptedDataWithMasterKey, masterKey);
    const decryptedDataWithLowerKey = decryptData(encryptedDataWithLowerKey, lowerLevelKey);

    console.log("Original Data:", originalData);
    console.log("Decrypted Data with Master Key:", decryptedDataWithMasterKey);
    console.log("Partially Decrypted Data with Lower Key:", decryptedDataWithLowerKey);
}

// Run the example
exampleUsage();
