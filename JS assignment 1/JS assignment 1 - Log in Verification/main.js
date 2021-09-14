let obj = [
  { username: "user1", password: "password" },

  { username: "user2", password: "password1" },

  { username: "user3", password: "password2" },

  { username: "user4", password: "thispassword" },
];

let entry_username = prompt("Enter Username");
let entry_password = prompt("Enter Password");
let entry_obj = { username: entry_username, password: entry_password };
var flag = 0;
var x;

const checker = (item) => {
  if (
    entry_obj.username == item.username &&
    entry_obj.password == item.password
  ) {
    flag++;
  }
};

obj.forEach(checker);

if (flag > 0) {
  alert("Credentials are Valid");
} else alert("Credentials are Invalid");
