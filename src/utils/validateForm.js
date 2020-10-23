export default function validateForm(values) {
  const err = {};
  console.log(values);
  console.log(values.toString());

  if (typeof values.username === "undefined") {
    console.log("Por favor, llene los campos");
  }
  if (
    typeof values.username !== "undefined" &&
    values.username.toString().length < 7
  ) {
    err.username = "Length is too short";
  }
  if (
    typeof values.email !== "undefined" &&
    values.email.toString().length === 0
  ) {
    err.email = "Length is too short";
  }
  if (
    typeof values.email !== "undefined" &&
    !values.email.toString().includes("@")
  ) {
    err.email = "The text introduced is not an email";
  }
  if (
    typeof values.password !== "undefined" &&
    values.password.toString().length < 8
  ) {
    err.password = "Length is too short";
  }
  if (
    typeof values.confirmPassword !== "undefined" &&
    typeof values.password !== "undefined" &&
    values.confirmPassword.toString() !== values.password.toString()
  ) {
    err.confirmPassword = "Passwords may coincide";
  }

  //console.log("Llene los campos primero.");
  return err;
}
