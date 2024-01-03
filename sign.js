const users = [];

function signup() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const gender = document.querySelector('input[name="gender"]:checked');


  if (name && email && password && confirmPassword && password === confirmPassword && gender) {
    users.push({ name, email, password, gender: gender.value });
    alert('Signup successful!');
    
  } else {
    alert('Invalid input or passwords do not match.');
  }
}

function signIn() {
  const signInEmail = document.getElementById('signInEmail').value;
  const signInPassword = document.getElementById('signInPassword').value;
  const signInGender = document.querySelector('input[name="signInGender"]:checked');


  if (signInEmail && signInPassword && signInGender) {
    const user = users.find(u => u.email === signInEmail && u.password === signInPassword && u.gender === signInGender.value);

    if (user) {
      alert('Sign In successful!');
      window.location.href="quiz.html"
    } else {
      alert('Invalid email, password, or gender.');
    }
  } else {
    alert('Please enter email, password, and select gender.');
  }
}

function showResetPasswordForm() {
  document.querySelector('.reset-password-form').style.display = 'block';
}

function update() {
  const resetEmail = document.getElementById('resetEmail').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;

  if (resetEmail && newPassword && confirmNewPassword && newPassword === confirmNewPassword) {
    const userIndex = users.findIndex(u => u.email === resetEmail);

    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      alert('Password reset successful!');
    } else {
      alert('User not found with the provided email.');
    }

  } else {
    alert('Invalid input or passwords do not match.');
  }
}