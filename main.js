class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header centering-items">
        <!-- Logo start-->
        <div class="logo">
            <a href="index.html"><img src="images/logo.png" alt="Logo"/></a>
        </div>
        <!-- Logo end-->
        <!-- Navigation start -->
        <nav class="navigation-bar">
            <li class="menu-items active"><a href="index.html">Home</a></li>
            <li class="menu-items"><a href="about.html">About</a></li>
            <li class="menu-items"><a href="projects.html">Projects</a></li>
            <li class="menu-items"><a href="contact.html">Contact</a></li>
        </nav>
        <!-- Navigation end -->
    </header>
    `
  }
}

customElements.define('custom-header', CustomHeader);

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer-container centering-items">
        <div class="footer-wrapper centering-items">
            <p class="footer-text">connect with us on social media</p>
            <nav class="footer-navigation">
                <a href="#"><img src="images/facebook-icon.png" alt="Facebook"/></a>
                <a href="#"><img src="images/github-icon.png" alt="Github"/></a>
                <a href="#"><img src="images/linkedin-icon.png" alt="LinkedIn"/></a>
                <a href="#"><img src="images/instagram-icon.png" alt="Instagram"/></a>
                <a href="#"><img src="images/twitter-icon.png" alt="Twitter"/></a>
            </nav>
        </div>
    </footer>
    `
  }
}

customElements.define('custom-footer', CustomFooter);
