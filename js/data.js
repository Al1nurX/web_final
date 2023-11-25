function displayUsers() {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var table = document.getElementById('dataTable');
    table.innerHTML = '';

    var headerRow = table.insertRow(0);
    headerRow.insertCell(0).innerHTML = 'Username';
    headerRow.insertCell(1).innerHTML = 'Password';
    headerRow.insertCell(2).innerHTML = 'Phone Number';
    headerRow.insertCell(3).innerHTML = 'Actions';
    headerRow.className = "header-row";

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var row = table.insertRow(i + 1);
        row.insertCell(0).innerHTML = user.username;
        row.insertCell(1).innerHTML = user.password;
        row.insertCell(2).innerHTML = user.phone;

        var editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.className = 'btn btn-outline-primary me-4';
        editButton.addEventListener('click', (function (index) {
            return function () {
                editUser(index);
            };
        })(i));

        var addButton = document.createElement('button');
        addButton.innerText = 'Add';
        addButton.className = 'btn btn-outline-primary me-4';
        addButton.addEventListener('click', (function (index) {
            return function () {
                addUser(index);
            };
        })(i));

        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'btn btn-outline-danger';
        deleteButton.addEventListener('click', (function (index) {
            return function () {
                deleteUser(index);
            };
        })(i));

        var actionsCell = row.insertCell(3);
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
    }
}

displayUsers();

function editUser(index) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    if (index >= 0 && index < users.length) {
        var user = users[index];

        document.getElementById('editUsername').value = user.username;
        document.getElementById('editPassword').value = user.password;
        document.getElementById('editPhone').value = user.phone;

        var editUserModal = new bootstrap.Modal(document.getElementById('editUserModal'));
        editUserModal.show();

        document.getElementById('editUserForm').setAttribute('data-index', index);
    }
}

function saveEditedUser() {
    var index = document.getElementById('editUserForm').getAttribute('data-index');
    var users = JSON.parse(localStorage.getItem('users')) || [];

    if (index >= 0 && index < users.length) {
        users[index].username = document.getElementById('editUsername').value;
        users[index].password = document.getElementById('editPassword').value;
        users[index].phone = document.getElementById('editPhone').value;

        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();

        var editUserModal = new bootstrap.Modal(document.getElementById('editUserModal'));
        editUserModal.hide();
    }
}

function addUser() {
    var username = document.getElementById('adminUsername').value;
    var password = document.getElementById('adminPassword').value;
    var phone = document.getElementById('adminPhone').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var newUser = { username, password, phone };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
}

function deleteUser(index) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers();
    }
}
