document.addEventListener('DOMContentLoaded', function () {
    const rightChatContainer = document.getElementById('right-chat-container');
    const flexContainer = document.getElementById('chat-container');
    function addBox(inputId) {
      const inputBox = document.getElementById(inputId);
      const message = inputBox.value.trim();
  
      if (message !== '') {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.textContent = message;
        rightChatContainer.appendChild(newBox);
  
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

  
  