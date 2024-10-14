document.addEventListener('DOMContentLoaded', () => {
   
   
    const cartIcon = document.getElementById('cart-icon');
    const cartSection = document.getElementById('cart');

    // Scroll to cart section when cart icon is clicked
    if (cartIcon && cartSection) {
        cartIcon.addEventListener('click', () => {
            cartSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Variables
    let cartCount = 0;
    let totalFootprint = 0;
    let totalAmount = 0;

    // Cart elements
    const cartCountElement = document.querySelector('.cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const footprintElement = document.getElementById('footprint-details');
    const totalAmountElement = document.createElement('p');
    totalAmountElement.id = 'total-amount';
    cartItemsContainer.appendChild(totalAmountElement);

    // Check if the cart count element and container are present
    if (!cartCountElement || !cartItemsContainer) {
        console.error('Cart count element or cart items container is missing.');
        return;
    }

    // Product list
    const products = [
        { name: "Reusable Shopping Bag", price: 200, footprint: 2, img: "reusablebag.jpeg" },
        { name: "Bamboo Toothbrush", price: 150, footprint: 0.5, img: "bambootoothbrush.jpeg" },
        { name: "Stainless Steel Water Bottle", price: 400.00, footprint: 1.5, img: "steelwaterbottle.jpeg" },
        { name: "Beeswax Wraps (3-Pack)", price: 350.00, footprint: 1, img: "beeswax.jpg" },
        { name: "Compostable Phone Case", price: 200.00, footprint: 1.2, img: "phonecase.jpg" },
        { name: "Organic Cotton T-Shirt", price: 700.00, footprint: 2.5, img: "tshirt.jpeg" },
        { name: "Eco-Friendly Cup", price: 50.00, footprint: 2.5, img: "ecocups.jpg" },
        { name: "Recycled Notebook", price: 505.00, footprint: 2.5, img: "notebook.jpg" },
    ];

    // Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Ensure index is within bounds
            if (index < 0 || index >= products.length) {
                console.error('Index out of bounds:', index);
                return;
            }

            // Update cart count
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Update total carbon footprint
            totalFootprint += products[index].footprint;
            updateFootprint();

            // Update total amount
            totalAmount += products[index].price;
            updateTotalAmount();

            // Add product to cart
            addToCart(products[index]);
        });
    });

    // Update carbon footprint display
    function updateFootprint() {
        if (footprintElement) {
            footprintElement.textContent = `Total Carbon Footprint Saved: ${totalFootprint.toFixed(2)} kg CO2`;
        }
    }

    // Update total amount display
    function updateTotalAmount() {
        if (totalAmountElement) {
            totalAmountElement.textContent = `Total Amount: \u20B9${totalAmount.toFixed(2)}`;
        }
    }

    // Add product to cart
    function addToCart(product) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="item-details">
                <h4>${product.name}</h4>
                <p>\u20B9${product.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    }

    // Smooth Scroll for "Shop Now" Button
    const shopNowButton = document.querySelector('.shop-now-btn');
    if (shopNowButton) {
        shopNowButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Basic Sign-In Simulation
   
        const signInButton = document.querySelector('.sign-in-btn');
        const signInPopup = document.getElementById('sign-in-popup');
        const closeBtn = document.querySelector('.close-btn');
    
        // Predefined valid users
        const validUsers = [
            { username: 'Ayush', password: '123456' },
            { username: 'Shubham', password: '1234567' },
            { username: 'Amit', password: '12345678' }
        ];
    
        // Show the popup when the sign-in button is clicked
        signInButton.addEventListener('click', () => {
            signInPopup.style.display = 'block';
        });
    
        // Hide the popup when the close button is clicked
        closeBtn.addEventListener('click', () => {
            signInPopup.style.display = 'none';
        });
    
        // Hide the popup when clicking outside of the popup content
        window.addEventListener('click', (event) => {
            if (event.target === signInPopup) {
                signInPopup.style.display = 'none';
            }
        });
    
        // Handle form submission
        const signInForm = document.getElementById('sign-in-form');
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            // Check if the entered username and password match any valid user
            const user = validUsers.find(user => user.username === username && user.password === password);
    
            if (user) {
                alert('Sign-In successful!');
                signInPopup.style.display = 'none';
            } else {
                alert('Invalid username or password.');
            }
        });
        const checkoutButton = document.getElementById('checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Checkout functionality will be implemented later.');
        });
    }
});
    

