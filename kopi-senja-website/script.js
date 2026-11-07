const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Ganti nomor di bawah dengan nomor WhatsApp bisnis milikmu.
// Gunakan kode negara tanpa tanda +, spasi, atau angka 0 di depan.
const whatsappNumber = "6281234567890";
const whatsappMessage = encodeURIComponent("Halo Kopi Senja, saya ingin bertanya tentang menu dan pemesanan.");
document.getElementById("whatsapp-link").href =
  `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
