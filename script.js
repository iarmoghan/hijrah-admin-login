document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard-container').style.display = 'block';

        populateUserTable();
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});

function populateUserTable() {
    const users = [
        { serialNumber: 1, name: 'John Doe', gender: 'Male' },
        { serialNumber: 2, name: 'Jane Smith', gender: 'Female' },
        { serialNumber: 3, name: 'Alice Johnson', gender: 'Female' },
        { serialNumber: 4, name: 'Bob Brown', gender: 'Male' }
    ];

    const tableBody = document.getElementById('user-table-body');

    // Clear any existing rows in the table
    tableBody.innerHTML = '';

    // Populate the table with user data using a  function
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        addUserRow(user, tableBody);
    }
}

function addUserRow(user, tableBody) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${user.serialNumber}</td><td>${user.name}</td><td>${user.gender}</td>`;
    tableBody.appendChild(row);
}

document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('dashboard-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('error-message').textContent = '';
    document.getElementById('login-form').reset();
});
