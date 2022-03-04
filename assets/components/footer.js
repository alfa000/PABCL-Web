class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer>
                <div class="container">
                    <p>&copy; Adnan Al-farizi Rahmat - 2022</p>
                    <p>Thanks for <a href="https://codelabs.unikom.ac.id/" target="_blank">Unikom CodeLabs</a></p>
                </div>
            </footer>
        `;
    }
}
customElements.define('x-footer', Footer);