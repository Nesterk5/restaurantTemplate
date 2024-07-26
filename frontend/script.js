//home-link
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('index-link');


    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'index.html';
    });
});

//menu-link
document.addEventListener('DOMContentLoaded', function() {
    // Get the Start Order button and Menu link elements
    const startOrderBtn = document.getElementById('start-order-btn');
    const menuLink = document.getElementById('menu-link');

    // Add click event listeners to navigate to menu.html
    startOrderBtn.addEventListener('click', function() {
        window.location.href = 'menu.html';
    });

    menuLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'menu.html';
    });
});

//Big on brakfast
document.addEventListener('DOMContentLoaded', function() {
    const brakfastLink = document.getElementById('breakfast');


    brakfastLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'breakfast.html';
    });
});

//generous meals
document.addEventListener('DOMContentLoaded', function() {
    const generousLink = document.getElementById('bigmeals');


    generousLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'generous.html';
    });
});

//drinks
document.addEventListener('DOMContentLoaded', function() {
    const drinksLink = document.getElementById('drinks');


    drinksLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'drinks.html';
    });
});

//dessert
document.addEventListener('DOMContentLoaded', function() {
    const dessertLink = document.getElementById('dessert');


    dessertLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'dessert.html';
    });
});


//featuredpdts-link
document.addEventListener('DOMContentLoaded', function() {
    const featurePdtLink = document.getElementById('featuredpdts-link');


    featurePdtLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'featuredpdts.html';
    });
});

//register user
document.getElementById('register-form').addEventListener('submit', async(e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const messageContainer = document.getElementById('register-message-container');

    // Ensure passwords match
    if (data.password !== data.confirmPassword) {
        console.error('Passwords do not match');
        alert('Passwords do not match');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const responseData = await response.json();
        console.log('Registration successful:', responseData);
        // Redirect or show success message
        messageContainer.textContent = 'Registration successful!';
        messageContainer.style.color = 'green';


    } catch (error) {
        console.error('Error registering user:', error);
        messageContainer.textContent = 'Error registering: ' + error.message;
        messageContainer.style.color = 'red';
        document.getElementById('register-form').reset();

    }
});

//login user
document.getElementById('login-form').addEventListener('submit', async(e) => {
    e.preventDefault();

    // Capture form data
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const messageContainer = document.getElementById('login-message-container');

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Login failed');

        }
        const data = await response.json();
        console.log('Login successful:', data);
        messageContainer.textContent = 'Login successful!';
        messageContainer.style.color = 'green';

    } catch (error) {
        console.error('User login failed:', error);
        messageContainer.textContent = 'Error logging in: ' + error.message;
        messageContainer.style.color = 'red';
        document.getElementById('login-form').reset();
    }

});

//fetching breakfast items
document.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch('http://localhost:3000/api/menu-items/category/1'); // Change URL if necessary
        const menuItems = await response.json();

        const breakfastMenuGrid = document.getElementById('breakfast-menu-grid');
        breakfastMenuGrid.innerHTML = ''; // Clear existing items

        menuItems.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-category');

            menuItemDiv.innerHTML = `
                <img src="${item.image_url}" alt="${item.name}">
                <p>${item.name}</p>
                <p class="price">${item.price}</p>
                <button class="order-btn">ORDER</button>
            `;

            breakfastMenuGrid.appendChild(menuItemDiv);
        });
    } catch (error) {
        console.error('Error fetching breakfast items:', error);
    }
});