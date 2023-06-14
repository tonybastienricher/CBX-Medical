import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import intersect from '@alpinejs/intersect';

window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.plugin(intersect);
Alpine.start();

/*//LOCOMOTIVE
import LocomotiveScroll from 'locomotive-scroll';
document.addEventListener("DOMContentLoaded", function() {
  if (typeof Shopify === 'undefined' || !Shopify.designMode) {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('body'),
      smooth: true
    });
    document.body.classList.add('locomotive-active');
  }
});*/
