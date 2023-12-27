document.addEventListener("DOMContentLoaded", function () {
  var projectButtons = document.querySelectorAll(".project-button");
  var isModalOpen = false;
  const modal = document.getElementById("projectModal");
  const backbut = document.getElementById("back-button");
  const projectImg = document.getElementById("projectImg");
  var clickedButton;

  window.toggleModal = function () {
    isModalOpen = !isModalOpen;
    modal.style.display = isModalOpen ? "flex" : "none";
    backbut.onclick = function () {
      isModalOpen ? toggleModal() : (window.location.href = "index.html");
    };
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
    } else {
      var buttonImage = document.createElement("img");
      buttonImage.className = "hasdesc";
      buttonImage.src = "images/magentastar.png";
      button.parentNode.appendChild(buttonImage);
    }
  });
});
