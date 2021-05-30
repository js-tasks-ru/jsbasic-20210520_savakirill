function showSalary(users, age) {
  let res = '';
  for (var i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      if (res.length === 0) {
        res = users[i].name + ', ' + users[i].balance;
      } else {
        res = res + '\n' + users[i].name + ', ' + users[i].balance;
      }
    }
  }
  return res;
}
