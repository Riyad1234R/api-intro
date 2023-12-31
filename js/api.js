function loanData() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => diplayUsers(data))
}

function loadUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => diplayUsers(data));
}

function diplayUsers(data) {
      const ul = document.getElementById('users');
      for (const user of data) {
            console.log(user.name)
            const li = document.createElement('li');
            li.innerText = `name:${user.name}email:${user.email}`;
            ul.appendChild(li);
      }
}