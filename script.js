document.getElementById("submit_button").addEventListener("click", function(e){
  e.preventDefault();
  
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const verification = document.getElementById("verification").value;

  // check first name for valid value
  if (first_name.match(/[a-zA-Z]/g)) {
    console.log("passed"); 
  } else {
    console.log('not passed');
  }

  // put values in object
  const user_info = {
    first_name,
    last_name,
    email,
    verification
  }

  console.table(user_info);
  
});
