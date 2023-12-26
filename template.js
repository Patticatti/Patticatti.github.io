var existingContent = document.getElementById("content");
var header = document.createElement("header");
header.innerHTML = `
        <div id="logo-container">
            <a href="index.html" id="logo">
                <img class="logo" height="50px" width="auto" src="../images/logo.png">
            </a>
            <p id="name">PATRICIA TANI</p>
        </div>
        <nav>
            <a href="../index.html">HOME</a>
            <a href="../about.html">ABOUT</a>
            <a href="../portfolio.html">PORTFOLIO</a>
            <a href="../experience.html">EXPERIENCE</a>
            <a href="../contact.html">CONTACT</a>
        </nav>
        <img class="menu-icon" src="../images/burgermenu.svg" onclick="toggleNav()"></img>
        `;
existingContent.insertBefore(header, existingContent.firstChild);

document.addEventListener("DOMContentLoaded", function () {
  var isNavOpen = false;
  var nav = document.querySelector("nav");

  window.toggleNav = function () {
    isNavOpen = !isNavOpen;
    nav.style.right = isNavOpen ? "0" : "-250px";
  };

  document.body.addEventListener("click", function (e) {
    if (
      isNavOpen &&
      !nav.contains(e.target) &&
      e.target !== document.querySelector(".menu-icon")
    ) {
      toggleNav();
    }
  });

  if (!document.getElementById("contact-page")) {
    var footer = document.createElement("div");
    footer.innerHTML = `
    <div id="contact-section">
    <div class="contact-me">
        <div class="contact-me-startitle">
            <img class="about-skill-title-icon" src="../images/magentastar.png">
            <h2>CONTACT ME</h2>
        </div>
        <h5>For any additional questions or information, please contact me through the links below:</h5>
        <div class="contact-social-icons">
            <button class="social-button" onclick="window.location.href='https://www.linkedin.com/in/patricia-tani/'">
                <img class="social-icon" src="../images/linkedin.png">
            </button>
            <button class="social-button" onclick="window.location.href='https://www.instagram.com/patti_tani/'">
                <img class="social-icon" src="../images/instagram.png">
            </button>
            <button class="social-button" onclick="window.location.href='https://www.youtube.com/@itsPatticatti'">
                <img class="social-icon" src="../images/youtube.png">
            </button>
            <button class="social-button" onclick="window.location.href='https://github.com/Patticatti'">
                <img class="social-icon" src="../images/github.png">
            </button>
        </div>
    </div>
    <div class="contact-email-phone">
        <div class="mail-number">
            <img class="social-icon" src="../images/gmail.png">
            <h4>xpatticattix@gmail.com</h4>
        </div>
        <img class="skill-line" src="../images/vertline.svg">
        <div class="mail-number">
            <img class="social-icon" src="../images/discord.png">
            <h4>patticatti</h4>
        </div>
    </div>
    </div>
    <footer> 
    <h5>© Patricia Tani 2023 - 2023 | Vancouver, British Columbia, Canada</h5>
    </footer>
    `;

    existingContent.appendChild(footer);
  }
});
