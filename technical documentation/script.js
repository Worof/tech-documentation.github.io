const copyButtons = document.querySelectorAll('.btn');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code)
      .then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = '';
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  });
});
