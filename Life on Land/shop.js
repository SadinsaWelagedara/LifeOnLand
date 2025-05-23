document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector('.close');
    const checkoutBtn = document.querySelector('.check-out');
    const itemsList = document.getElementById('items');
    const totalElement = document.querySelector('.total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItems = {};
    let total = 0;

    function closeCart() {
        itemsList.innerHTML = ''; // Clear the items list
        total = 0; // Reset the total
        totalElement.textContent = `Total: LKR ${total}`; // Update total display
        cartItems = {}; // Reset cart items
    }
    // Event listener for close button click
    closeBtn.addEventListener('click', function () {
        closeCart();
    });

    // Function to handle checkout
    function checkout() {
        if (Object.keys(cartItems).length === 0) {
            //alert if the cart is empty
            alert("Please select a product before checking out.");
        } else {
            // Proceed to the checkout page 
            window.location.href = 'checkout.html';
        }
    }
    // Event listener for checkout button click
    checkoutBtn.addEventListener('click', function () {
        checkout();
    });

    // Function to update total display
    function updateTotal() {
        totalElement.textContent = `Total: LKR ${total}`;
    }

    // Event listeners for add to cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const name = this.getAttribute('itemName');
            const price = parseInt(this.getAttribute('itemPrice'));
            addItemToCart(name, price);
        });
    });

    // Function to add an item to the cart
    function addItemToCart(name, price) {
        if (cartItems.hasOwnProperty(name)) {
            // Increment quantity if item already exists in cart
            cartItems[name]++;
        } else {
            // Add item with quantity 1 if it's not already in the cart
            cartItems[name] = 1;
        }
        // Create list item for the item
        let li = document.createElement('li');
        console.log(cartItems[name])
        li.textContent = `${name} - LKR ${price}`;
        itemsList.appendChild(li);
        // Update total price
        total += price;
        updateTotal();
    }
});