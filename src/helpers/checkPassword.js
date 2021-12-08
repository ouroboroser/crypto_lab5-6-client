import { topPassword } from './topHundredPassword';
import { messages } from './messages';

export const checkPassword = (password, error) => {
  const passwordLength = 10;

  if (topPassword.includes(password)) {
    alert(messages.USER_HAVE_SIMPLE_PASS)
    error = true;
  } else if (password.length < passwordLength) {
    alert(messages.PASS_LEN);
    error = true;
  } else if (password.search(/[a-z]/) < 0) {
    alert(messages.LOWER_CASE);
    error = true;
  } else if (password.search(/[A-Z]/) < 0) {
    alert(messages.UPPER_CASE);
    error = true;
  } else if (password.search(/[0-9]/) < 0) {
    alert(messages.NUMBERS);
    error = true;
  } else if (password.search(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) < 0) {
    alert(messages.SPECIAL_SYMBOLS);
    error = true;
  } else if (password.slice(-1) === '!' || password.slice(-1) === '1') {
    console.log(typeof (password.slice(-1)), password.slice(-1))
    alert(messages.PASS_BAD_IDEA);
    error = true;
  } else if (password[0] === 'Q') {
    alert(messages.PASS_WITH_Q);
    error = true;
  } else if ((password.substring(0,3)).toLowerCase() === 'qwe') {
    alert(messages.PASS_WITH_QWE);
    error = true;
  } else if (password.includes('123')) {
    alert(messages.PASS_SIMPLE_NUMBER);
    error = true;
  }

  return error
};

export const validateEmail = (email, error) => {
  const re = /\S+@\S+\.\S+/;
  const result = re.test(email);

  if (!result) {
    error = true;
  };

  return error;
};