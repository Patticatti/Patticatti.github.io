document.addEventListener('DOMContentLoaded', function () {
    const rootStyles = getComputedStyle(document.documentElement);
    const flexContainer = document.getElementById('flex-container');
    const flexWidth = rootStyles.getPropertyValue('--flex-width');
    const flexWidthInPx = (parseFloat(flexWidth) / 100) * window.innerWidth;
    function addBox(inputId) {
      const inputBox = document.getElementById(inputId);
      const message = inputBox.value.trim();
  
      if (message !== '') {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.textContent = message;
        const boxWidth = newBox.getBoundingClientRect().width;
        if (boxWidth <=flexWidthInPx){
            newBox.style.width='min-content';
        }
        flexContainer.appendChild(newBox);
  
        // Scroll to the bottom of the flex container
        flexContainer.scrollTop = flexContainer.scrollHeight;
  
        // Clear the input box
        inputBox.value = '';
      }
    }
  
    document.getElementById('messageBar').addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        addBox('messageBar');
      }
    });
  });

  
  