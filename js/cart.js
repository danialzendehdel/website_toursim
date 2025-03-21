const cart = {
    items: [],

    init() {
        this.items = JSON.parse(localStorage.getItem('cart') || '[]');
        this.updateUI();
    },

    addItem(tour, date, guests) {
        this.items.push({
            id: Date.now(),
            tour: tour,
            date: date,
            guests: guests,
            price: tour.price * guests
        });
        this.saveCart();
        this.updateUI();
    },

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateUI();
    },

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    },

    updateUI() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.items.length;
        }

        const cartItems = document.getElementById('cartItems');
        if (cartItems) {
            if (this.items.length === 0) {
                cartItems.innerHTML = '<p class="text-center py-8">Your cart is empty</p>';
                return;
            }

            cartItems.innerHTML = this.items.map(item => `
                <div class="flex items-center p-4 border-b">
                    <img src="${item.tour.image}" class="w-20 h-20 object-cover rounded">
                    <div class="ml-4 flex-1">
                        <h3 class="font-bold">${item.tour.name}</h3>
                        <p class="text-sm text-gray-600">${item.guests} guests</p>
                        <p class="text-sm text-gray-600">${item.date}</p>
                    </div>
                    <div class="text-right">
                        <p class="font-bold">$${item.price}</p>
                        <button onclick="cart.removeItem(${item.id})" class="text-red-500 text-sm">Remove</button>
                    </div>
                </div>
            `).join('');
        }
    }
};

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => cart.init()); 