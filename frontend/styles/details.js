document.addEventListener('DOMContentLoaded', function() {
    // Retrieve item details from local storage
    const itemName = localStorage.getItem('itemName');
    const itemPrice = localStorage.getItem('itemPrice');
    const itemImage = localStorage.getItem('itemImage');

    // Populate the details page with the item details
    document.getElementById('item-name').textContent = itemName;
    document.getElementById('item-price').textContent = itemPrice;
    document.getElementById('item-image').src = itemImage;
});