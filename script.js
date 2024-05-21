function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    if (!inputText || !key) {
        alert("Please enter both text and key.");
        return;
    }
    const encrypted = CryptoJS.AES.encrypt(inputText, key).toString();
    document.getElementById('outputText').value = encrypted;
}

function decryptText() {
    const encryptedText = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    if (!encryptedText || !key) {
        alert("Please enter both encrypted text and key.");
        return;
    }
    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        document.getElementById('outputText').value = decrypted;
    } catch (e) {
        alert("Invalid encrypted text or key.");
    }
}
