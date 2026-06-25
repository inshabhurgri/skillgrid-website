// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchInput2 = document.getElementById('searchInput2');
const searchBtn2 = document.getElementById('searchBtn2');
const serviceCards = document.querySelectorAll('.service-card');

function performSearch() {
    const query = (searchInput?.value || searchInput2?.value || '').toLowerCase();
    
    serviceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('.desc').textContent.toLowerCase();
        
        if (title.includes(query) || desc.includes(query)) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
    
    if (query) {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
}

if (searchBtn) searchBtn.addEventListener('click', performSearch);
if (searchBtn2) searchBtn2.addEventListener('click', performSearch);
if (searchInput) searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});
if (searchInput2) searchInput2.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filter
