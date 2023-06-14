class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.setHeaderCartIconAccessibility();
  }

  setHeaderCartIconAccessibility() {
    const cartLink = document.querySelector('#cart-notif');
    cartLink.setAttribute('role', 'button');
    cartLink.setAttribute('aria-haspopup', 'dialog');
    cartLink.addEventListener('click', (event) => {
      event.preventDefault();
      this.open(cartLink);
    });
    cartLink.addEventListener('keydown', (event) => {
      if (event.code.toUpperCase() === 'SPACE') {
        event.preventDefault();
        this.open(cartLink);
      }
    });
  }

  open(triggeredBy) {
    if (triggeredBy) this.setActiveElement(triggeredBy);
    const cartDrawerNote = this.querySelector('[id^="Details-"] summary');
    if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);
    // here the animation doesn't seem to always get triggered. A timeout seem to help
    setTimeout(() => {
      this.classList.add('animate', 'active');
    });

    this.addEventListener(
      'transitionend',
      () => {
        const containerToTrapFocusOn = this.classList.contains('is-empty')
          ? this.querySelector('.drawer__inner-empty')
          : document.getElementById('CartDrawer');
        const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');
        trapFocus(containerToTrapFocusOn, focusElement);
      },
      { once: true }
    );
  }

  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
    document.body.classList.remove('overflow-hidden');
  }

  renderContents(parsedState) {

    // Sélectionner tous les éléments avec la classe ".drawer__inner"
    var elements = document.querySelectorAll('.drawer__inner');

    // Parcourir la liste des éléments et effectuer les modifications nécessaires
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      // Vérifier si l'élément contient la classe "is-empty"
      if (element.classList.contains('is-empty')) {
        // Supprimer la classe "is-empty"
        element.classList.remove('is-empty');
      }
    }

    this.productId = parsedState.id;

    this.getSectionsToRender().forEach((section) => {
      let elementsToReplace =
        document.querySelectorAll('.' + section.id);

      if (elementsToReplace.length > 0) {
        elementsToReplace.forEach(element => {
          // Ajoutez cette vérification
          const selectedElement = element.querySelector(section.selector) || element;
          selectedElement.innerHTML = this.getSectionInnerHTML(
            parsedState.sections[section.section],
            section.selector
          );
        });
      }
    });


    setTimeout(() => {
      this.open();
    });
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-item_count',
        section: 'cart-item_count',
        selector: '.shopify-section'
      },
      {
        id: 'cart-drawer',
        selector: '#CartDrawer'
      }
    ];
  }

  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);

class CartDrawerItems extends CartItems {
  getSectionsToRender() {
    return [
      {
        id: 'cart-item_count',
        section: 'cart-item_count',
        selector: '.shopify-section'
      },
      {
        id: 'CartDrawer',
        section: 'cart-drawer',
        selector: '.drawer__inner'
      }
    ];
  }
}

customElements.define('cart-drawer-items', CartDrawerItems);
