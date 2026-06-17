// ハンバーガーメニュー
// ==================================================
const btnGNav = document.querySelector(".btn-gNav");
const gNav = document.querySelector(".gNav");

btnGNav.addEventListener("click", () => {
  btnGNav.classList.toggle("open");
  gNav.classList.toggle("open");
});

// メニュークリックで閉じる
const gNavLinks = document.querySelectorAll(".gNav a");

gNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    btnGNav.classList.remove("open");
    gNav.classList.remove("open");
  });
});







// スクロールバー
// ==================================================
const scrollEl = document.querySelector('.scrollbar-pc');
const worksEl = document.querySelector('.works');

let isHidden = false;

if (scrollEl && worksEl) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isHidden) {
                    scrollEl.classList.add('is-hide');
                    isHidden = true;
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    observer.observe(worksEl);

    // 一番上に戻ったら復活
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            scrollEl.classList.remove('is-hide');
            isHidden = false;
        }
    });
}
