document.addEventListener('DOMContentLoaded', function() {
    const summaryTableBody = document.querySelector('#summaryTable tbody');
    const summaryTotalPrice = document.getElementById('summaryTotalPrice');
    const payButton = document.getElementById('payButton');
  
    const order = JSON.parse(localStorage.getItem('order')) || [];
    let totalPrice = 0;
  
    order.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.item}</td>
        <td>${item.category}</td>
        <td>${item.amount}</td>
        <td>Rs${item.price.toFixed(2)}</td>
      `;
      summaryTableBody.appendChild(row);
      totalPrice += item.price;
    });
  
    summaryTotalPrice.textContent = `Rs${totalPrice.toFixed(2)}`;
  
    payButton.addEventListener('click', function() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const city = document.getElementById('city').value;
      const zip = document.getElementById('zip').value;
      const card = document.getElementById('card').value;
      const expiry = document.getElementById('expiry').value;
      const cvv = document.getElementById('cvv').value;
  
      if (name && email && address && city && zip && card && expiry && cvv) {
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 5);
        alert(`Thank you for your purchase! Your order will be delivered by ${deliveryDate.toDateString()}.`);
      } else {
        alert('Please fill in all the required fields.');
      }
    });
  });