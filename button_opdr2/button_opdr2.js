const numberOfButtons = 30;
const buttonPanel = document.getElementById('buttonPanel');

for (let i = 0; i < numberOfButtons; i++) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = `Button ${i + 1}`;
  
  button.addEventListener('click', () => {
    if (button.classList.contains('red')) {
      button.classList.remove('red');
      button.style.backgroundColor = 'green';
    } else {
      button.classList.add('red');
      button.style.backgroundColor = 'red';
    }
  });
  
  buttonPanel.appendChild(button);
}
