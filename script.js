// 커서 트레일 효과
const trails = [];
const trailLength = 10;

for (let i = 0; i < trailLength; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.opacity = (trailLength - i) / trailLength * 0.5;
    trail.style.transform = `scale(${(trailLength - i) / trailLength})`;
    document.body.appendChild(trail);
    trails.push({
        el: trail,
        x: 0,
        y: 0
    });
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrails() {
    let x = mouseX;
    let y = mouseY;

    trails.forEach((trail, index) => {
        trail.x += (x - trail.x) * 0.3;
        trail.y += (y - trail.y) * 0.3;
        trail.el.style.left = trail.x - 10 + 'px';
        trail.el.style.top = trail.y - 10 + 'px';
        x = trail.x;
        y = trail.y;
    });

    requestAnimationFrame(animateTrails);
}

animateTrails();

// 카드 클릭 애니메이션
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// 버튼 클릭 이벤트
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    alert('🎉 환영합니다! 멋진 여정이 시작됩니다!');
});

// 스크롤 애니메이션
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease';
        }
    });
});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});