export const modalSuccessForm = () => {
  const modalClick = document.getElementById("modal-one-click");
  const modalSuccess = document.getElementById("modal-success");
  const modalSuccessClose =  document.getElementById("modal-success-close");
  const modalSuccessForm = document.getElementById("modal-success-form");

  if(modalClick) {
    function successValidation (form) {
      let result = true;
      const allModalInputs = document.querySelectorAll(".modal-success-input");

      for (let input of allModalInputs) {
        if (input.value == "") {
          result = false;
        }
      };
      return result;
    }

    modalSuccessForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (successValidation(this) == true) {
        modalClick.classList.remove("modal--open");
        modalSuccess.classList.add("modal--open")
      }
    })

    modalSuccessClose.addEventListener("click", function() {
      modalSuccess.classList.remove("modal--open")
    })
  }
}

