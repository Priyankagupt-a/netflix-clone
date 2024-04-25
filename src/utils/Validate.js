export const checkValidData = (email, password) => {
  const isEmailvalid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  console.log(isEmailvalid);
  if (!isEmailvalid) {
    // alert("Email is not valid");
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    // alert("Password is not valid");
    return "Password is not valid";
  }
  return null; //no error
};
