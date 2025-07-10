// 1. Search Button Functionality
const searchBtn = document.querySelector('.btn');
const searchInput = document.querySelector('.search input');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if(query){
        alert(`You searched for: ${query}`);
        
    } else {
        alert("Please enter something to search.");
    }
});

// 2. Navigation Link Alert for Placeholder Pages
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`This link (${link.textContent}) is just a placeholder for now.`);
    });
});

// 3. Image Hover Zoom Effect
const images = document.querySelectorAll('.card-item img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// 4. "Grab Now!" Click Animation
const grabTexts = document.querySelectorAll('.lines p:last-child');

grabTexts.forEach(text => {
    text.style.cursor = 'pointer';
    text.addEventListener('click', () => {
        text.style.color = 'orange';
        text.innerText = 'Added to Cart!';
        setTimeout(() => {
            text.style.color = '';
            text.innerText = 'Grab Now!';
        }, 1500);
    });
});


