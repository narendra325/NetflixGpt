export const Validate = (emailvalue, passwordvalue,namevalue) => {
  const validateemail =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(emailvalue);
  const validatepassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordvalue);


  if (!validateemail) return "Email is not valid";
  if (!validatepassword) return "Password is not valid";
 

  return null;
};
