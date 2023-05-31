export const modalOneClick = () => {
  const modalClick = document.getElementById("modal-one-click");
  const modalClickClose = document.getElementById("modal-one-click-close");
  const oneClickBtn = document.getElementById("buy-in-one-click-btn");

  if(modalClick) {
    oneClickBtn.addEventListener("click", function() {
      modalClick.classList.add("modal--open")
    })

    modalClickClose.addEventListener("click", function() {
      modalClick.classList.remove("modal--open")
    })
  }
}

