 const services = [
    {id: 1, title: "Professional Website Design", seller: "Ahmed Khan", sellerId: 1, price: "$200", rating: 4.9, reviews: 127, desc: "I will create a modern responsive website for your business. Get a unique, professional, and memorable website design for your brand. Includes 3 concepts, unlimited revisions, and source files.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600", features: ["3 Initial Concepts", "Source File", "High Resolution", "Commercial Use"], sellerImg: "https://i.pravatar.cc/150?img=1"},
    {id: 2, title: "Professional Logo Design", seller: "Sarah Ali", sellerId: 2, price: "$80", rating: 5.0, reviews: 89, desc: "I will create a modern minimalist logo. Get a unique, professional, and memorable logo design for your brand. Includes 3 concepts, unlimited revisions, and source files.", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600", features: ["3 Initial Concepts", "Source File", "High Resolution", "Commercial Use"], sellerImg: "https://i.pravatar.cc/150?img=2"},
    {id: 3, title: "SEO Blog Writing", seller: "Fatima Noor", sellerId: 3, price: "$30", rating: 4.8, reviews: 156, desc: "Engaging SEO optimized blog posts and articles. 1000+ words with keyword research included.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600", features: ["1000+ Words", "SEO Optimized", "Keyword Research", "Fast Delivery"], sellerImg: "https://i.pravatar.cc/150?img=3"},
    {id: 4, title: "Social Media Marketing", seller: "Bilal Sheikh", sellerId: 4, price: "$100", rating: 4.7, reviews: 92, desc: "Complete social media management & growth strategy for Instagram, Facebook, and LinkedIn.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600", features: ["Content Creation", "Growth Strategy", "Analytics Report", "30 Days Management"], sellerImg: "https://i.pravatar.cc/150?img=4"},
    {id: 5, title: "Video Editing Service", seller: "Usman Raza", sellerId: 5, price: "$80", rating: 4.9, reviews: 203, desc: "Professional video editing for YouTube & commercials. Color grading and motion graphics included.", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600", features: ["Color Grading", "Motion Graphics", "Sound Design", "Fast Turnaround"], sellerImg: "https://i.pravatar.cc/150?img=5"},
    {id: 6, title: "Mobile App Development", seller: "Hassan Javed", sellerId: 6, price: "$500", rating: 5.0, reviews: 67, desc: "Native iOS & Android apps with Flutter/React Native. Complete app with backend integration.", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600", features: ["iOS & Android", "Backend Integration", "Source Code", "App Store Deploy"], sellerImg: "https://i.pravatar.cc/150?img=6"},
    {id: 7, title: "E-commerce Website", seller: "Zain Malik", sellerId: 7, price: "$400", rating: 4.8, reviews: 134, desc: "Complete Shopify/WooCommerce online stores with payment gateway integration.", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600", features: ["Payment Gateway", "Product Upload", "Responsive Design", "SEO Ready"], sellerImg: "https://i.pravatar.cc/150?img=7"},
    {id: 8, title: "UI/UX Design", seller: "Ayesha Khan", sellerId: 8, price: "$150", rating: 4.9, reviews: 178, desc: "User interface & experience design for web & mobile apps. Figma files included.", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600", features: ["Figma Files", "Responsive Design", "Prototyping", "User Research"], sellerImg: "https://i.pravatar.cc/150?img=8"},
    {id: 9, title: "Copywriting Services", seller: "Mariam Shah", sellerId: 9, price: "$40", rating: 4.7, reviews: 98, desc: "Sales copy, email sequences & landing page content that converts.", img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600", features: ["Sales Copy", "Email Sequences", "Landing Pages", "Conversion Focused"], sellerImg: "https://i.pravatar.cc/150?img=9"},
    {id: 10, title: "SEO Optimization", seller: "Ali Raza", sellerId: 10, price: "$120", rating: 4.8, reviews: 145, desc: "Complete on-page & off-page SEO for Google ranking. Technical SEO audit included.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", features: ["Technical Audit", "On-Page SEO", "Off-Page SEO", "Monthly Report"], sellerImg: "https://i.pravatar.cc/150?img=10"},
    {id: 11, title: "Motion Graphics", seller: "Saad Ahmed", sellerId: 11, price: "$150", rating: 4.9, reviews: 112, desc: "Animated explainer videos & motion graphics for brands and social media.", img: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=600", features: ["Explainer Videos", "Social Media", "2D Animation", "Voice Over"], sellerImg: "https://i.pravatar.cc/150?img=11"},
    {id: 12, title: "Python Automation", seller: "Kamran Iqbal", sellerId: 12, price: "$90", rating: 5.0, reviews: 76, desc: "Custom Python scripts for automation, data scraping, and task scheduling.", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600", features: ["Custom Scripts", "Data Scraping", "API Integration", "Documentation"], sellerImg: "https://i.pravatar.cc/150?img=12"}
];

const sellers = [
    {id: 1, name: "Ahmed Khan", bio: "Full-stack developer with 5+ years experience. Expert in React, Node.js, and WordPress. I have worked with 100+ international clients.", skills: "HTML, CSS, JavaScript, React, Node.js, WordPress, PHP", completedOrders: 234, responseTime: "1 hour", memberSince: "2020", img: "https://i.pravatar.cc/150?img=1"},
    {id: 2, name: "Sarah Ali", bio: "Creative graphic designer specializing in brand identity and logo design. 8+ years of experience working with startups and Fortune 500 companies.", skills: "Logo Design, Brand Identity, Adobe Illustrator, Photoshop, Figma", completedOrders: 456, responseTime: "2 hours", memberSince: "2018", img: "https://i.pravatar.cc/150?img=2"},
    {id: 3, name: "Fatima Noor", bio: "Professional content writer and SEO expert. I help businesses grow their online presence through engaging content and strategic SEO.", skills: "Content Writing, SEO, Blog Writing, Copywriting, Keyword Research", completedOrders: 312, responseTime: "1 hour", memberSince: "2019", img: "https://i.pravatar.cc/150?img=3"},
    {id: 4, name: "Bilal Sheikh", bio: "Digital marketing specialist with expertise in social media growth. Helped 50+ brands increase their online engagement by 300%.", skills: "Social Media Marketing, Facebook Ads, Instagram Growth, Content Strategy", completedOrders: 189, responseTime: "3 hours", memberSince: "2021", img: "https://i.pravatar.cc/150?img=4"},
    {id: 5, name: "Usman Raza", bio: "Video editor and motion graphics artist. Creating compelling visual stories for YouTubers, brands, and agencies for 6+ years.", skills: "Video Editing, After Effects, Premiere Pro, Motion Graphics, Color Grading", completedOrders: 567, responseTime: "2 hours", memberSince: "2019", img: "https://i.pravatar.cc/150?img=5"},
    {id: 6, name: "Hassan Javed", bio: "Mobile app developer specializing in Flutter and React Native. Built 30+ apps with 1M+ downloads combined.", skills: "Flutter, React Native, iOS, Android, Firebase, API Integration", completedOrders: 98, responseTime: "4 hours", memberSince: "2020", img: "https://i.pravatar.cc/150?img=6"},
    {id: 7, name: "Zain Malik", bio: "E-commerce expert and Shopify developer. Helped businesses generate $5M+ in online sales through optimized stores.", skills: "Shopify, WooCommerce, E-commerce, Payment Gateway, Store Design", completedOrders: 267, responseTime: "2 hours", memberSince: "2018", img: "https://i.pravatar.cc/150?img=7"},
    {id: 8, name: "Ayesha Khan", bio: "UI/UX designer creating intuitive digital experiences. Worked with 200+ clients across fintech, healthcare, and e-commerce.", skills: "UI Design, UX Research, Figma, Adobe XD, Prototyping, Wireframing", completedOrders: 389, responseTime: "1 hour", memberSince: "2019", img: "https://i.pravatar.cc/150?img=8"},
    {id: 9, name: "Mariam Shah", bio: "Conversion copywriter helping brands increase sales through persuasive writing. Specialized in email marketing and landing pages.", skills: "Copywriting, Email Marketing, Sales Pages, Content Strategy", completedOrders: 201, responseTime: "2 hours", memberSince: "2020", img: "https://i.pravatar.cc/150?img=9"},
    {id: 10, name: "Ali Raza", bio: "SEO specialist with proven track record. Ranked 500+ websites on Google's first page. Technical SEO and content strategy expert.", skills: "Technical SEO, On-Page SEO, Link Building, Google Analytics", completedOrders: 445, responseTime: "3 hours", memberSince: "2018", img: "https://i.pravatar.cc/150?img=10"},
    {id: 11, name: "Saad Ahmed", bio: "Motion graphics designer and animator. Creating viral animated content for social media and marketing campaigns.", skills: "Motion Graphics, 2D Animation, After Effects, Explainer Videos", completedOrders: 278, responseTime: "2 hours", memberSince: "2019", img: "https://i.pravatar.cc/150?img=11"},
    {id: 12, name: "Kamran Iqbal", bio: "Python developer automating business processes. Built 150+ automation scripts saving clients 1000+ hours monthly.", skills: "Python, Web Scraping, Automation, APIs, Data Analysis", completedOrders: 167, responseTime: "1 hour", memberSince: "2020", img: "https://i.pravatar.cc/150?img=12"}
];

const reviews = [
    {id: 1, serviceId: 1, name: "John Smith", rating: 5, text: "Amazing work! Delivered exactly what I needed. Very professional."},
    {id: 2, serviceId: 1, name: "Emma Wilson", rating: 5, text: "Great communication and fast delivery. Highly recommend!"},
    {id: 3, serviceId: 2, name: "Michael Brown", rating: 5, text: "Best logo designer I've worked with. Creative and responsive."},
    {id: 4, serviceId: 3, name: "Sarah Davis", rating: 5, text: "Excellent writing quality. SEO optimized content that ranks well."}
];

const urlParams = new URLSearchParams(window.location.search);
const serviceId = urlParams.get('id');
const sellerId = urlParams.get('sellerId');

if (serviceId && document.getElementById('serviceDetail')) {
    const service = services.find(s => s.id == serviceId);
    if (service) {
        const serviceReviews = reviews.filter(r => r.serviceId == serviceId);
        const featuresList = service.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');
        const reviewsList = serviceReviews.map(r => `
            <div class="review-card">
                <div class="review-header">
                    <span class="name">${r.name}</span>
                    <span class="stars">${'★'.repeat(r.rating)}</span>
                </div>
                <p>${r.text}</p>
            </div>
        `).join('');
        
        document.getElementById('serviceDetail').innerHTML = `
            <div class="service-header">
                <img src="${service.img}" alt="${service.title}">
                <h1>${service.title}</h1>
                <div class="seller-info">
                    <img src="${service.sellerImg}" alt="${service.seller}">
                    <div>
                        <a href="seller-profile.html?sellerId=${service.sellerId}" class="name">${service.seller}</a>
                        <div class="rating"><i class="fas fa-star"></i> ${service.rating} (${service.reviews} reviews)</div>
                    </div>
                </div>
            </div>
            <div class="detail-content">
                <div class="section">
                    <h2>About This Service</h2>
                    <p>${service.desc}</p>
                </div>
                <div class="section">
                    <h2>What You'll Get</h2>
                    <ul class="features">${featuresList}</ul>
                </div>
                <div class="section">
                    <h2>Reviews</h2>
                    ${reviewsList || '<p>No reviews yet.</p>'}
                </div>
            </div>
            <div class="pricing-box">
                <div class="price">${service.price}</div>
                <div class="info"><i class="fas fa-clock"></i> Delivery Time: 3 days</div>
                <div class="info"><i class="fas fa-sync"></i> Revisions: Unlimited</div>
                <button class="btn-primary">Continue (${service.price})</button>
                <button class="btn-secondary">Contact Seller</button>
            </div>
        `;
    }
}

if (sellerId && document.getElementById('sellerDetail')) {
    const seller = sellers.find(s => s.id == sellerId);
    if (seller) {
        const sellerServices = services.filter(s => s.sellerId == sellerId);
        const servicesList = sellerServices.map(s => `
            <a href="service-details.html?id=${s.id}" class="service-link">
                <div class="service-card">
                    <img src="${s.img}" alt="${s.title}">
                    <h3>${s.title}</h3>
                    <p class="price">${s.price}</p>
                    <p class="rating"><i class="fas fa-star"></i> ${s.rating}</p>
                </div>
            </a>
        `).join('');
        
        document.getElementById('sellerDetail').innerHTML = `
            <div class="profile-header">
                <img src="${seller.img}" alt="${seller.name}">
                <h1>${seller.name}</h1>
                <div class="rating"><i class="fas fa-star"></i> 4.9 (${seller.completedOrders} orders)</div>
            </div>
            <div class="profile-stats">
                <div class="stat">
                    <h3>${seller.completedOrders}</h3>
                    <p>Orders Completed</p>
                </div>
                <div class="stat">
                    <h3>${seller.responseTime}</h3>
                    <p>Response Time</p>
                </div>
                <div class="stat">
                    <h3>${seller.memberSince}</h3>
                    <p>Member Since</p>
                </div>
            </div>
            <div class="section">
                <h2>About Me</h2>
                <p>${seller.bio}</p>
            </div>
            <div class="section">
                <h2>Skills</h2>
                <p>${seller.skills}</p>
            </div>
            <div class="section">
                <h2>My Services</h2>
                <div class="services-grid">${servicesList}</div>
            </div>
        `;
    }
}
