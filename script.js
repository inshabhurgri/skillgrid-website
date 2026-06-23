// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Category Filter UI - Day 2 Task
const filterBtns = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button highlight karna
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Cards ko filter karna
        serviceCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// Search Bar UI - Day 2 Task
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function searchServices() {
    const searchTerm = searchInput.value.toLowerCase();
    
    serviceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    });
    
    // Search karne pe filter buttons se active hata do
    filterBtns.forEach(b => b.classList.remove('active'));
}

searchBtn.addEventListener('click', searchServices);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchServices();
});

// Popular Tags pe click karne se filter chale
document.querySelectorAll('.popular-tags a').forEach(tag => {
    tag.addEventListener('click', (e) => {
        e.preventDefault();
        const category = tag.getAttribute('data-category');
        document.querySelector(`.filter-btn[data-filter="${category}"]`).click();
    });
});
