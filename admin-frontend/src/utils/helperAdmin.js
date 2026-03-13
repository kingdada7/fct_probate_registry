// Validate email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate password strength
export const validatePassword = (password) => {
  // Minimum 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;

  return regex.test(password);
};

// Main register validator
export const validateRegisterForm = ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  const errors = {};

  if (!name?.trim()) {
    errors.name = "Name is required";
  }

  if (!email?.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Invalid email format";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!validatePassword(password)) {
    errors.password =
      "Password must be 8+ characters, include uppercase, lowercase, number & special character";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
