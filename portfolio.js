var buttonImage = document.createElement("img");
buttonImage.innerHTML = `
        <img src="images/magentastar.png" width='30px' height='auto'>
        `;
existingContent.insertBefore(buttonImage, existingContent.firstChild);

document.addEventListener("DOMContentLoaded", function () {
  var projectButtons = document.querySelectorAll(".project-button");
  var isModalOpen = false;
  const modal = document.getElementById("projectModal");
  const projectImg = document.getElementById("projectImg");
  var clickedButton;

  window.toggleModal = function () {
    isModalOpen = !isModalOpen;
    modal.style.display = isModalOpen ? "flex" : "none";
  };

  window.showProject = function (button) {
    clickedButton = button;
    var imgSrc = button.querySelector(".project-img").src;
    projectImg.src = imgSrc;
    toggleModal();
  };

  document.body.addEventListener("click", function (e) {
    if (isModalOpen && !e.target.closest(".project-button")) {
      toggleModal();
    }
  });

  projectButtons.forEach(function (button) {
    if (button.onclick === null) {
      button.onclick = function () {
        showProject(button);
      };
    }
  });
});
