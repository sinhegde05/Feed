const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link"),
  logbtn = document.querySelector(".logbtn");

// Add click event listener to each eye icon for toggling password visibility
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") { 
        password.type = "text"; 
        eyeIcon.classList.replace("bx-hide", "bx-show"); 
        return;
      }
      password.type = "password"; 
      eyeIcon.classList.replace("bx-show", "bx-hide"); 
    });

  });
});

logbtn.addEventListener("click",()=>{
    event.preventDefault();
    window.location.href = "/producer.html"; 
    return true;
});