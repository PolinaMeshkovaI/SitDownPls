import JustValidate from 'just-validate';

export const validation = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.form');
    if (form) {
      const validation = new JustValidate('.form', {
        errorLabelStyle: {
            color: '#FF6972'
        },
        errorFieldCssClass: ['invalid'],
        errorLabelCssClass: ['feedback-error-label'],
    });
    validation
      .addField('#name', [{
            rule: 'minLength',
            value: 2,
            errorMessage: "Недостаточное количество символов",
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: "Вы ввели больше символов чем положено",
        },
        {
            rule: 'required',
            errorMessage: "Введите имя",
        },
        {
            rule: 'customRegexp',
            value: /[а-я]/gi,
            errorMessage: "Недопустимый формат",
        },
      ])
      .addField('#tel', [{
            rule: 'required',
            errorMessage: 'Введите номер телефона',
        },
        {
          rule: 'minLength',
          value: 10,
          errorMessage: 'В номере телфона должно быть 10 цифр',
        },
        {
          rule: 'maxLength',
          value: 10,
          errorMessage: 'В номере телфона должно быть 10 цифр',
        },
        {
          rule: 'number',
          errorMessage: 'Недопустимый формат',
        },
      ])
      .addField('#email', [{
          rule: 'required',
          errorMessage: 'Введите email',
        },
        {
          rule: 'email',
          errorMessage: 'Недопустимый формат',
        },
        {
          rule: 'customRegexp',
          value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,
          errorMessage: "Недопустимый формат",
        },
      ]);
    }
    });
}


