(() => {
    const refs = {
      openOrderBtn: document.querySelector('[order-modal-open]'),
      closeOrderBtn: document.querySelector('[order-modal-close]'),
        modalOrder: document.querySelector('[order-modal]'),
      
        openLocationBtn: document.querySelector('[location-modal-open]'),
      closeLocationBtn: document.querySelector('[location-modal-close]'),
        modalLocation: document.querySelector('[location-modal]'),
      
        openFranchiseBtn: document.querySelector('[franchise-modal-open]'),
      closeFranchiseBtn: document.querySelector('[franchise-modal-close]'),
      modalFranchise: document.querySelector('[franchise-modal]'),
    };
  
    refs.openOrderBtn.addEventListener('click', toggleModalOrder);
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