const register_form = document.querySelector("#registerForm");

let allUsers = [];
const submitBtn = document.getElementById("reg");
submitBtn?.addEventListener("click", () => {
  const reg_info = {
    name: `${document.getElementById("fname").value} ${
      document.getElementById("lname").value
    }`,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    initialDeposit: document.getElementById("deposit").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value,
    DOB: document.getElementById("dob").value,
  };
  console.log(reg_info.name);
  allUsers.push(reg_info);
  localStorage.setItem("reg_info", JSON.stringify(allUsers));
  console.log(JSON.stringify(allUsers));
  const rData = JSON.parse(localStorage.getItem("reg_info"));
  console.log(rData);
});

const sData = JSON.parse(localStorage.getItem("reg_info"));
allUsers = [...sData];

const login = (emailData, passwordData) => {
  allUsers.filter(({ email, password }) => {
    if (email === emailData && password === passwordData) {
      localStorage.setItem("current_session", email);
      location.assign("dashboard.html");
      console.log()
      return;
      
    }
    else{
        alert('user does not exist')
    }
  });
};

const loginBtn = document.getElementById('loginBtn');
loginBtn?.addEventListener('click', ()=>{
    const emailData = document.getElementById('email').value;
    const passwordData = document.getElementById('password').value;
    login(emailData, passwordData)
    console.log(emailData)
})

