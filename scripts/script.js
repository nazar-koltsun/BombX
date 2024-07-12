const copyBtn = document.querySelector('.copy-btn');
const code = document.querySelector('.code');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(code.textContent);
})
