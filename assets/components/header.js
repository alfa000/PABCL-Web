class NavigationBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header>
                <div class="container">
                    <nav>
                        <div class="nav__brand">
                            <a href="/"><h1>My Movie</h1></a>
                        </div>
                        <div class="nav__menu">
                            <a href="/" class="nav__menu__link">Home</a>
                            <a href="/popular.html" class="nav__menu__link">Popular</a>
                            <a href="/top_rated.html" class="nav__menu__link">Top Rated</a>
                            <a href="/upcoming.html" class="nav__menu__link">Upcoming</a>
                        </div>
                    </nav>
                </div>
            </header>
        `;
    }
}
customElements.define('navigation-bar', NavigationBar);