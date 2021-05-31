function namify(users) {
  let a = [];
  users.forEach(function (item) {
    a.push(item.name);
  });
  return a;
}
