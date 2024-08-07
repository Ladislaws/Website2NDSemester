document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderTableBody = document.querySelector('#orderTable tbody');
    const totalPriceElement = document.getElementById('totalPrice');

    let order = [];
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];

    function updateOrder() {
        order = [];
        orderTableBody.innerHTML = '';
        let totalPrice = 0;

        const inputs = orderForm.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            const amount = parseFloat(input.value) || 0;
            if (amount > 0) {
                const category = input.getAttribute('data-category');
                const price = parseFloat(input.getAttribute('data-price'));
                const item = input.previousSibling.nodeValue.trim();
                const itemPrice = amount * price;
                order.push({ item, category, amount, price: itemPrice });

                const row = document.createElement('tr');
                row.innerHTML = `<td>${item}</td><td>${category}</td><td>${amount}</td><td>Rs${itemPrice.toFixed(2)}</td>`;
                orderTableBody.appendChild(row);

                totalPrice += itemPrice;
            }
        });

        totalPriceElement.textContent = `Rs${totalPrice.toFixed(2)}`;
    }

    function saveFavourites() {
        localStorage.setItem('favourites', JSON.stringify(order));
        alert('Order saved as favourites!');
    }

    function applyFavourites() {
        const inputs = orderForm.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            const item = input.previousSibling.nodeValue.trim();
            const fav = favourites.find(f => f.item === item);
            if (fav) {
                input.value = fav.amount; // Set the amount from favourites
            }
        });
        updateOrder(); // Update the order display
    }

    orderForm.addEventListener('input', updateOrder);
    document.getElementById('addToFavourites').addEventListener('click', saveFavourites);
    document.getElementById('applyFavourites').addEventListener('click', applyFavourites);
    document.getElementById('buyNow').addEventListener('click', function() {
        if (order.length > 0) {
            localStorage.setItem('order', JSON.stringify(order));
            window.location.href = 'check.html';
        } else {
            alert('Please add items to your order.');
        }
    });

    // Call updateOrder initially to clear current order display
    updateOrder();

    // Check for existing favourites
    if (favourites.length > 0) {
        applyFavourites();
    }
    
    // Clear the current order from inputs after loading the page
    const inputs = orderForm.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = 0; // Reset all input values to 0
    });

   
});
