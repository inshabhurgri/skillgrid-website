const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

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
                card.parentElement.style.display = 'block';
            } else {
                card.classList.add('hide');
                card.parentElement.style.display = 'none';
            }
        });
    });
});

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchInput2 = document.getElementById('searchInput2');
const searchBtn2 = document.getElementById('searchBtn2');

function searchServices(input) {
    const searchTerm = input.value.toLowerCase();
    
    serviceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('.desc').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.classList.remove('hide');
            card.parentElement.style.display = 'block';
        } else {
            card.classList.add('hide');
            card.parentElement.style.display = 'none';
        }
    });
    
    filterBtns.forEach(b => b.classList.remove('active'));
}

if (searchBtn) searchBtn.addEventListener('click', () => searchServices(searchInput));
if (searchInput) searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchServices(searchInput);
});

if (searchBtn2) searchBtn2.addEventListener('click', () => searchServices(searchInput2));
if (searchInput2) searchInput2.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchServices(searchInput2);
});

document.querySelectorAll('.seller-name').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
   
