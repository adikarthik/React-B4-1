export const ValidateForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'email is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.subject) {
    errors.subject = 'Subject is required';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  }
  return errors;
}
