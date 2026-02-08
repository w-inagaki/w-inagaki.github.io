// スクロールバー
// ==================================================
const scrollEl = document.querySelector('.scrollbar-pc');
const worksEl = document.querySelector('.works');
      
if (scrollEl && worksEl) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    scrollEl.classList.add('is-hide');
                } else {
                    scrollEl.classList.remove('is-hide');
                }
            });
        },
        {
            threshold: 0.2
        }
    );
      
    observer.observe(worksEl);
}