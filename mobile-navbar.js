class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleclick = this.handleclick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
             ? (link.style.animation = "")
             : (link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.3}s`);
    });
    
}

    handleclick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleclick);
    }


    init() {
        // Verifica se o menu está presente na página antes de adicionar o evento
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;  // Retorna a instância para encadeamento, se necessário
    }
}

// Instancia a classe MobileNavbar
const mobileNavbar = new MobileNavbar(
   ".mobile-menu",  // Elemento do menu móvel
   ".nav-list",     // Elemento da lista de navegação
   ".nav-list li"   // Elementos dos links da lista
);

// Corrigido: Agora chamamos o método init na instância correta
mobileNavbar.init();  // Chama o método init na instância mobileNavbar
