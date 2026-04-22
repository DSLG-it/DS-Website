// ===== Scroll to contact =====
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// ===== Side Nav =====
const sections = document.querySelectorAll("section");
const navDots = document.querySelectorAll(".side-nav .dot");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navDots.forEach(dot => {
    dot.classList.remove("active");
    if (dot.getAttribute("href") === "#" + current) {
      dot.classList.add("active");
    }
  });
});

// ===== Slider =====
let currentIndex = 0;

const slides = document.querySelector(".slides");
const sliderDots = document.querySelectorAll(".dots .dot");
const totalSlides = sliderDots.length;

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  sliderDots.forEach(dot => dot.classList.remove("active"));
  sliderDots[currentIndex].classList.add("active");
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// auto slide (ลื่นขึ้น)
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 4000);

function toggleMenu(event) {
  event.stopPropagation(); // 👈 กันไม่ให้ปิดทันที

  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

function closeMenu() {
  document.querySelector(".nav-links").classList.remove("active");
  document.querySelector(".overlay").classList.remove("active");
}

// 👇 คลิกที่ว่าง (ทั้งหน้า) ให้ปิด
document.addEventListener("click", function (e) {
  const menu = document.querySelector(".nav-links");
  const toggle = document.querySelector(".menu-toggle");

  // ❌ ถ้าคลิก link ให้ข้ามไป (ปล่อยให้มัน scroll)
  if (e.target.tagName === "A") return;

  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    closeMenu();
  }
});

const menu = document.querySelector(".nav-links");
menu.addEventListener("click", e => e.stopPropagation());