// Toggle password visibility
document.getElementById('togglePwd').addEventListener('click', function(){
  const pwd = document.getElementById('password');
  const btn = this;
  if(pwd.type === 'password'){
    pwd.type = 'text';
    btn.textContent = 'Hide';
    btn.setAttribute('aria-pressed','true');
  } else {
    pwd.type = 'password';
    btn.textContent = 'Show';
    btn.setAttribute('aria-pressed','false');
  }
});

// Simple client-side form validation with accessibility focus
document.getElementById('loginForm').addEventListener('submit', function(e){
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const role = document.getElementById('role');
  let valid = true;
  if(!username.value.trim()){ valid=false; username.focus(); alert('Please enter your Employee ID or Username'); }
  else if(!password.value.trim()){ valid=false; password.focus(); alert('Please enter your password'); }
  else if(!role.value){ valid=false; role.focus(); alert('Please select your role'); }
  if(!valid) {
    e.preventDefault();
  } else {
    e.preventDefault();
    // Simulate successful login for demo — replace with server-side auth
    window.location.href = 'index.html';
  }
});

// Mobile menu toggle (copied from index.html)
var mobileBtn = document.getElementById('mobile-menu-btn');
if(mobileBtn){
  mobileBtn.addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu) mobileMenu.classList.toggle('hidden');
  });
}
