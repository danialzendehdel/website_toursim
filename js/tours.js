const tours = {
    async loadTours() {
        try {
            const response = await fetch('/data/tours.json');
            const data = await response.json();
            return data.tours;
        } catch (error) {
            console.error('Error loading tours:', error);
            return [];
        }
    },

    async displayTours() {
        const tours = await this.loadTours();
        const toursContainer = document.getElementById('toursContainer');
        if (!toursContainer) return;

        toursContainer.innerHTML = tours.map(tour => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="${tour.image}" alt="${tour.name}" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">${tour.name}</h3>
                    <p class="text-gray-600 mb-4">${tour.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xl font-bold">$${tour.price}</span>
                        <a href="/pages/tour-detail.html?id=${tour.id}" 
                           class="bg-primary text-white px-4 py-2 rounded">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
};

// Initialize tours on page load
document.addEventListener('DOMContentLoaded', () => tours.displayTours()); 