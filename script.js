document.getElementById('hamburger').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // 非表示
    } else {
        sidebar.style.left = '0px'; // 表示
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide-image');
const totalSlides = slides.length;
const slideContainer = document.getElementById('slide-container');
const dots = document.querySelectorAll('.dot');

// スライド幅を計算
const slideWidth = 50 + 10; // 画像幅 + マージン

function showSlide(index) {
    currentSlide = index % totalSlides; // ループ用のインデックス計算
    slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

document.getElementById('next').addEventListener('click', () => showSlide(currentSlide + 1));
document.getElementById('prev').addEventListener('click', () => showSlide(currentSlide - 1));

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
    });
});

// 2秒ごとに自動でスライド
setInterval(() => showSlide(currentSlide + 1), 2000); 

// 初回表示
showSlide(currentSlide);
