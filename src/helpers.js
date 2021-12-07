export const checkPassword = (password, error) => {
  const passwordLength = 10;

  if (password.length < passwordLength) {
    alert(`Your password needs a minimum of ${passwordLength} characters`);
    error = true;
  } else if (password.search(/[a-z]/) < 0) {
    alert('Your password needs a lower case letter');
    error = true;
  } else if (password.search(/[A-Z]/) < 0) {
    alert('Your password needs an uppser case letter');
    error = true;
  } else if (password.search(/[0-9]/) < 0) {
    alert('Your password needs a number');
    error = true;
  } else if (
    password.search(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) < 0
  ) {
    alert('You need to use special symbols');
    error = true;
  }

  return error
};

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  const result = re.test(email);

  if (!result) {
    alert('You need to specify correct email');
  }
};