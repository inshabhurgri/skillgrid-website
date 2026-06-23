// Working Navigation - Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Category Filtering UI
const filterBtns = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        serviceCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// Search Functionality UI
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function searchServices() {
    const searchTerm = searchInput.value.toLowerCase();
    
    serviceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('.desc').textContent.toLowerCase();
        const freelancer = card.querySelector('.freelancer').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm) || freelancer.includes(searchTerm)) {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    });
    
    filterBtns.forEach(b => b.classList.remove('active'));
}

searchBtn.addEventListener('click', searchServices);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchServices();
});
