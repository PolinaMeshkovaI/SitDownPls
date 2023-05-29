import Choices from 'choices.js';

export const castomChoicesCity = () => {
  const element = document.querySelector("#city-select")

  if(element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
  })
  }
};

export const castomChoicesProduct = () => {
  const element = document.querySelector("#product-select")

  const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
  })
};

export const castomChoicesCategory = () => {
  const element = document.querySelector("#category-select")

  if(element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
  })
  }

};

export const castomChoicesPrice = () => {
  const element = document.querySelector("#price-select")

  if(element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
  })
  }
};

export const castomChoicesDiscount = () => {
  const element = document.querySelector("#discount-select")

  if(element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
  })
  }
};

export const castomChoicesColor = () => {
  const element = document.querySelector("#color-select")

  if(element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: "",
  })
  }
};

