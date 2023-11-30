const targetEl = document.querySelector('.spin');
targetEl.addEventListener('animationstart', (event) => {
  console.log("애니메이션 시작...");
});
targetEl.addEventListener('animationiteration', (event) => {
    console.log("애니메이션 반복...");
});
targetEl.addEventListener('animationend', (event) => {
    console.log("애니메이션 종료...");
    targetEl.style.display = 'none';
});