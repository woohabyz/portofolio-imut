document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Terima kasih, ${name}! Pesanmu sudah terkirim.`);
    this.reset(); 
  } else {
    alert("Harap isi semua kolom sebelum mengirim.");
  }
});

