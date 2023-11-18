import "whatwg-fetch";
import intlTelInput from "intl-tel-input";
// import IMask from 'imask';

const phoneInputs = document.querySelectorAll(".js-input-phone") || [];
phoneInputs.forEach((el) => {
  // const mask = IMask(
  //   el,
  //   {
  //     mask: `+0 (000) 000-00-00`,
  //     lazy: false,
  //     overwrite: true
  //   }
  // );
  // mask.value = '+7';
  el.value = '7'

  const iti = intlTelInput(el, {
    // formatOnDisplay: true,
    // autoFormat: true,
    // nationalMode: false,
    // utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    // autoPlaceholder: 'aggressive',

    initialCountry: "ru",
    preferredCountries: [
      "ru",
      "kz",
      "ua",
      "by",
    ],
    localizedCountries: {
      ru: "Россия",
      kz: "Казахстан",
      ua: "Украина",
      by: "Беларусь",
    },
  });
  el.addEventListener("countrychange", function (e) {
    const country = iti.getSelectedCountryData();
    if (country.dialCode) {
      $(el).inputmasks("remove");
      $(el).inputmask("+#{*}", maskOpts.inputmask);
      $(el).inputmasks($.extend(true, {}, maskOpts, {
        list: listCountries
      }));


  //     mask.updateValue();
  //     mask.updateOptions({
  //       mask: intlTelInputUtils.getExampleNumber(country.iso2, false, intlTelInputUtils.numberFormat.INTERNATIONAL).replace(/[0-9]/g, "0"),
  //     })
  //     mask.cursorPos = country.dialCode.length + 1;
    }
  });

  const listCountries = $.masksSort($.masksLoad(inputmaskParams.phoneCodes), ['#'], /[0-9]|#/, "mask");
  // const listRU = $.masksSort($.masksLoad("/vendor/inputmask-multi/data/phones-ru.json"), ['#'], /[0-9]|#/, "mask");
  const maskOpts = {
      inputmask: {
          definitions: {
              '#': {
                  validator: "[0-9]",
                  cardinality: 1
              }
          },
          showMaskOnHover: false,
          autoUnmask: true,
          clearMaskOnLostFocus: false,
          onUnMask: function(maskedValue, unmaskedValue) {
            return '+'+unmaskedValue;
          }
      },
      match: /[0-9]/,
      replace: '#',
      listKey: "mask"
  };

  $(el).inputmasks($.extend(true, {}, maskOpts, {
    list: listCountries,
  }));
});

jQuery.validator.addMethod(
  "laxEmail",
  function (value, element) {
    return (
      this.optional(element) ||
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    );
  },
  "Некорректный e-mail."
);

jQuery.validator.addMethod(
  "maskedPhone",
  function (value, element) {
    return element.imask.masked.isComplete
  },
  "Некорректный телефон."
);

function submitForm(form, validator) {
  const emailInputs = form.querySelectorAll(".js-input-email") || [];
  emailInputs.forEach((el) => {
    el.value = el.value.trim().replace(/[\u0000-\u0008,\u000A-\u001F,\u007F-\u00A0]+/g, '');
  });
  
  fetch(form.getAttribute("action"), {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        form.reset();
        validator.showErrors({
          action: response.message,
        });
        $("#action-error", form).addClass("error_success");
        setTimeout(() => {
          validator.resetForm();
        }, 4000);
        if (response.redirect) {
          window.location = response.redirect;
        }
      } else {
        validator.showErrors({
          action: response.message,
        });
      }
    });
}

var orderFormValidator = $("#order-form").validate({
  rules: {
    email: {
      email: true,
      laxEmail: true,
    },
    name: {
      required: true,
    },
    phone: {
      required: true,
      // maskedPhone: true,
    },
    approve: {
      required: true,
    },
  },
  messages: {
    email: {
      email: "Некорректный e-mail",
    },
    name: {
      required: "Введите имя",
    },
    phone: {
      required: "Введите телефон (WhatsApp, Viber)",
    },
    approve: {
      required: "Вы должны согласиться с условиями",
    },
  },
  errorPlacement: function (error, element) {
    error.insertAfter(element.parent());
  },
  submitHandler: function (form) {
    submitForm(form, orderFormValidator);
  },
});

var faqFormValidator = $("#faq-form").validate({
  rules: {
    email: {
      required: true,
      email: true,
      laxEmail: true,
    },
  },
  messages: {
    email: {
      required: "Введите e-mail",
      email: "Некорректный e-mail",
    },
  },
  submitHandler: function (form) {
    submitForm(form, faqFormValidator);
  },
});
