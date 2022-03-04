
class HeroBanner extends HTMLElement {
    constructor() {
        super();
        const img = this.getAttribute('img');
        this.innerHTML = `
        <section id="hero">
            <div class="container">
                <div class="hero__title">
                    <h1>My Movie</h1>
                    <p>Welcome to My Movie</p>
                </div>
                <div class="hero__thumb">
                    <img src="${img}" alt="banner-img" width="100%">
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('hero-banner', HeroBanner);