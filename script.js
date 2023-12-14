const resizeHandle = document.getElementById('resizeHandle');
const chatsContainer = document.querySelector('.chats-container');

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
    const newWidth = event.clientX - chatsContainer.getBoundingClientRect().left;
    chatBox.style.width = `${newWidth}px`;
  }
}