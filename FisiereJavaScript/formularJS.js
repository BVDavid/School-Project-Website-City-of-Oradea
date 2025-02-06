function validateForm() {
  const nume = document.getElementById('nume').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefon = document.getElementById('telefon').value.trim();
  const mesaj = document.getElementById('mesaj').value.trim();

  if (nume === "") {
      alert("Te rugăm să completezi numele complet.");
      return false;
  }

  if (email === "" || !email.includes("@") || !email.includes(".")) {
      alert("Te rugăm să introduci un email valid.");
      return false;
  }

  const telefonRegex = /^[0-9]{10}$/;
  if (telefon === "" || !telefonRegex.test(telefon)) {
      alert("Te rugăm să introduci un număr de telefon valid (10 cifre).");
      return false;
  }

  if (mesaj === "") {
      alert("Te rugăm să completezi câmpul pentru mesaj.");
      return false;
  }

  // Dacă totul este valid
  return true;
}
