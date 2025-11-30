document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PORTFOLIO FILTERING ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            });
        });
    });

    // --- 2. LIGHTBOX (VIDEO PLAYER) ---
    const lightbox = document.getElementById('lightbox');
    const videoFrame = document.getElementById('video-frame');
    const closeBtn = document.querySelector('.close-btn');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoId = item.getAttribute('data-video-id');
            if (videoId) {
                videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                lightbox.classList.add('active');
            }
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        videoFrame.src = '';
    };

    if(closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if(lightbox) lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

     
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxHeGgunkQSn3fuquTfB5qmBSpMwKk6WjiiJBa3RxqvDcq9DCT_pkcfB9hJ2kvO-SSL/exec'; 

    const emailForm = document.forms['submit-to-google-sheet-email'];
    const contactForm = document.forms['submit-to-google-sheet-contact'];
    const emailMsg = document.getElementById('email-msg');
    const contactMsg = document.getElementById('contact-msg');

    const submitForm = (form, msgElement) => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            if(msgElement) msgElement.innerHTML = "Sending...";
            
      
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    if(msgElement) msgElement.innerHTML = "Thank you! We will contact you soon.";
                    form.reset();
                    setTimeout(() => { if(msgElement) msgElement.innerHTML = ""; }, 5000);
                    console.log("Success! Data sent to Google Sheet.");
                })
                .catch(error => {
                    if(msgElement) msgElement.innerHTML = "Error! Please try again.";
                    console.error('Error!', error.message);
                });
        });
    };

    if(emailForm) submitForm(emailForm, emailMsg);
    if(contactForm) submitForm(contactForm, contactMsg);
});
