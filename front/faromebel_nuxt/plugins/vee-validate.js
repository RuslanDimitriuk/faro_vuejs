import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "Обязательное поле!"
});

extend("userNumber",{
  validate(value, args) {
    return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
  },
  params: ['val'],
  message: "Кароткий номер!"
});

extend("userName",{
  validate(value, args) {
    return /^[А-Яа-я- ]+$/.test(value);
  },
  params: ['val'],
  message: "Недопусимые символы!"
});
extend("email",{
  validate(value, args) {
    return /.+@.+\..+/i.test(value);
  },
  params: ['val'],
  message: "Не корректный адрес!"
});
