/*
let user = {
  name: "John",
  age: 30,


sayHi() {
    // "this" is the "current object"
  alert(this.name);
}
};

user.sayHi();  */

let userName = { name: "LoginUser_Name" };
let adminName = { name: "Admin_Name" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
userName.f = sayHi;
adminName.f = sayHi;
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)