function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach((bar) => {
    const targetPercentage = parseInt(bar.style.width);
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < targetPercentage) {
        currentPercentage++;
        bar.style.width = `${currentPercentage}%`;
        bar.textContent = `${currentPercentage}%`;
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the animation speed
  });
}

// Call the animation function when the page is loaded
window.addEventListener('load', animateProgressBars);

function toggleDropdown(id) {
  const dropdownContent = document.getElementById(id + '-content');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
