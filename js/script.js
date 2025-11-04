document.addEventListener('DOMContentLoaded', function () {
    // --- 1. 모바일 햄버거 메뉴 기능 ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.querySelector('body');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    }
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    });

    // --- 2. 스크롤 애니메이션 기능 (새로 추가됨) ---
    const animatedSections = document.querySelectorAll('.fade-in-section');
    if (animatedSections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // 섹션이 10% 보였을 때 애니메이션 시작
        });

        animatedSections.forEach(section => {
            observer.observe(section);
        });
    }
});
