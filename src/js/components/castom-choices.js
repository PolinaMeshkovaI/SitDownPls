import Choices from 'choices.js';

export const castomChoicesCity = () => {
  const element = document.querySelector("#city-select")

  const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
  })
}

export const castomChoicesProduct = () => {
  const element = document.querySelector("#product-select")

  const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
  })
}

