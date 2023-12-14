const resizeHandle = document.getElementById('resizeHandle');
    const chatBox = document.querySelector('.chat-box');

    let isResizing = false;

    resizeHandle.addEventListener('mousedown', (event) => {
      isResizing = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', () => {
        isResizing = false;
        document.removeEventListener('mousemove', handleMouseMove);
      });
    });

    function handleMouseMove(event) {
      if (isResizing) {
        const newWidth = event.clientX - chatBox.getBoundingClientRect().left;
        chatBox.style.width = `${newWidth}px`;
      }
    }