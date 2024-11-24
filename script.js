// Mengubah warna latar belakang secara acak
function changeBackgroundColor() {
  const colors = ["#2a261b", "#4b3c1b", "#a68136", "#f0e68c"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  console.log("Background color changed to:", randomColor);
}

// Menampilkan alert ucapan selamat datang
function showWelcomeAlert() {
  alert("Selamat Datang di Halaman Login! Jangan lupa tersenyum 😊");
}

// Menampilkan password atau menyembunyikannya
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
}

// Validasi input form login
function validateLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Mohon isi email dan password!");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Email tidak valid! Masukkan format email yang benar.");
    return false;
  }

  alert("Login berhasil! Selamat datang 😄");
  return true;
}

// Menambahkan event listener untuk tombol login
document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah reload halaman
  validateLoginForm();
});

// Menyisipkan tombol toggle ke dalam input password
const passwordField = document.getElementById("password").parentElement;
passwordField.style.position = "relative";
passwordField.appendChild(passwordToggle);

// Menambahkan efek hover pada tombol 'Back to Home' dan 'Register'
const buttons = document.querySelectorAll(".back, .regis");
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});

// Menampilkan alert selamat datang saat halaman dimuat
window.onload = showWelcomeAlert;

// Perubahan warna background setiap 10 detik
setInterval(changeBackgroundColor, 5000);
