const users = [{username:"sife",password:"123"}];

function signup() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var passwordd = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var gender = document.querySelector('input[name="gender"]:checked');
 var r =/^(?=.*[-\!\@\#\%\&\\*])(?=.*[a-zA-z])(?=.*\d).{8,15}$/

  //اليوزر المميز 

  //لازم تبقا في الاول قبل اي حاجه

  for(var i =0; i<users.length;i++)
  {
    if(users[i].username==name)
    {
      alert("that name is oredy exsess")
      
    }
  }
  if(!passwordd.match(r))
  {
    alert("the pass is rong")
    return false

  }
  else if(age<18||age>60)
  {
    alert("you are to smoll or to tall")
    return false

  }
  users.push({
    username:name,
    password:passwordd
  })
 
}

function signIn() {
  const signInname = document.getElementById('namein').value;
  const signInPassword = document.getElementById('signInPassword').value;
  const signInGender = document.querySelector('input[name="signInGender"]:checked');

  for(var i =0; i<users.length;i++)
  {
    if(users[i].username==signInname&&users[i].password==signInPassword)
    {
      alert("sucsess")
       location.replace("quiz.html");
    }
  }
  
}

function showResetPasswordForm() {
  document.querySelector('.reset-password-form').style.display = 'block';
}

function update() {
  const resetEmail = document.getElementById('resetEmail').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;

  for(var i =0; i<users.length;i++)
  {
    if(users[i].username==resetEmail)
    {users[i].password=newPassword

      alert("sucsess")
       
    }
  }
}