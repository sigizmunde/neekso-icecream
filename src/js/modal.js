(() => {
    const refs = {
      openOrderBtn: document.querySelector('[data-order-modal-open]'),
      openOrderMenuBtn: document.querySelector('[data-order-modal-open-menu]'),
      closeOrderBtn: document.querySelector('[data-order-modal-close]'),
        modalOrder: document.querySelector('[data-order-modal]'),
      
        openLocationBtn: document.querySelector('[data-location-modal-open]'),
      closeLocationBtn: document.querySelector('[data-location-modal-close]'),
        modalLocation: document.querySelector('[data-location-modal]'),
      
        openFranchiseBtn: document.querySelector('[data-franchise-modal-open]'),
      closeFranchiseBtn: document.querySelector('[data-franchise-modal-close]'),
      modalFranchise: document.querySelector('[data-franchise-modal]'),
    };
  
    refs.openOrderBtn.addEventListener('click', toggleModalOrder);
    refs.openOrderMenuBtn.addEventListener('click', toggleModalOrder);
    refs.closeOrderBtn.addEventListener('click', toggleModalOrder);
    refs.openLocationBtn.addEventListener('click', toggleModalLocation);
    refs.closeLocationBtn.addEventListener('click', toggleModalLocation);
    refs.openFranchiseBtn.addEventListener('click', toggleModalFranchise);
    refs.closeFranchiseBtn.addEventListener('click', toggleModalFranchise);
  
    function toggleModalOrder() {
      refs.modalOrder.classList.toggle('is-hidden');
    }

    function toggleModalLocation() {
      refs.modalLocation.classList.toggle('is-hidden');
    }

    function toggleModalFranchise() {
      refs.modalFranchise.classList.toggle('is-hidden');
    }
  })();