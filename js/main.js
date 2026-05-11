window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(function (el) {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});

const fadeElements = document.querySelectorAll('.fade-left, .fade-right');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      el.classList.add('show');
    }
  });
});

window.addEventListener("load", () => {

  const order = [
    document.querySelector('.gallery .text:nth-child(1)'), // この地球は
    document.querySelector('.gallery .img4'),
    document.querySelector('.gallery .img3'),
    document.querySelector('.gallery .text:nth-child(4)'), // 想像以上に
    document.querySelector('.gallery .img2'),
    document.querySelector('.gallery .img1'),
    document.querySelector('.gallery .text:nth-child(7)')  // 美しい
  ];

  order.forEach((el, index) => {
    setTimeout(() => {
      if (el) el.classList.add("show");
    }, index * 300); // ← 0.45秒ずつ
  });

});