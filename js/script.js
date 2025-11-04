document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.querySelector('body');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // 햄버거 메뉴와 네비게이션 메뉴를 활성화/비활성화
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            // 스크롤 방지
            body.classList.toggle('no-scroll');
        });
    }

    // 네비게이션 링크 클릭 시 메뉴 닫기 (모바일에서)
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
});
