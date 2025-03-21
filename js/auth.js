// Handle user authentication using localStorage
const auth = {
    user: null,

    init() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.updateUI();
    },

    register(userData) {
        // In a real app, this would make an API call
        localStorage.setItem('user', JSON.stringify(userData));
        this.user = userData;
        this.updateUI();
        window.location.href = '/index.html';
    },

    login(credentials) {
        // In a real app, this would validate against an API
        const userData = {
            username: credentials.username,
            email: 'user@example.com',
            firstName: 'John',
            lastName: 'Doe'
        };
        localStorage.setItem('user', JSON.stringify(userData));
        this.user = userData;
        this.updateUI();
        window.location.href = '/index.html';
    },

    logout() {
        localStorage.removeItem('user');
        this.user = null;
        this.updateUI();
        window.location.href = '/index.html';
    },

    updateUI() {
        const authLinks = document.getElementById('authLinks');
        if (!authLinks) return;

        if (this.user) {
            authLinks.innerHTML = `
                <span class="text-white/90 mr-4">Welcome, ${this.user.username}</span>
                <a href="/pages/cart.html" class="text-white/90 hover:text-white text-sm">Cart</a>
                <button onclick="auth.logout()" class="text-white/90 hover:text-white text-sm ml-4">Logout</button>
            `;
        } else {
            authLinks.innerHTML = `
                <a href="/pages/login.html" class="text-white/90 hover:text-white text-sm">Login</a>
                <a href="/pages/register.html" class="text-white/90 hover:text-white text-sm ml-4">Register</a>
            `;
        }
    }
};

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', () => auth.init()); 