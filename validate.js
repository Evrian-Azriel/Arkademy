function validate(username,password)
{
  var username = "admin.abc";
  var usernameRGEX = /^[a-z]*([.._]?)(?:[a-z]|\1){0,12}$/;
  var usernameResult = usernameRGEX.test(username);
  var password = "admin12";
  var passwordRGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
  var passwordResult = passwordRGEX.test(password);
  alert("username:"+usernameResult + "password:"+passwordResult);
}