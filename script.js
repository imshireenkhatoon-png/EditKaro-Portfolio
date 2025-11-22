document.addEventListener('DOMContentLoaded', () => {
    
    // --- FILTERING LOGIC ---
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

    // --- LIGHTBOX (VIDEO PLAYER) LOGIC ---
    const lightbox = document.getElementById('lightbox');
    const videoFrame = document.getElementById('video-frame');
    const closeBtn = document.querySelector('.close-btn');

    // Function to open lightbox
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoId = item.getAttribute('data-video-id');
            
            if (videoId) {
                // Set the YouTube embed URL
                // 'autoplay=1' starts video automatically
                const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                videoFrame.src = embedUrl;
                
                // Show the lightbox
                lightbox.classList.add('active');
            }
        });
    });

    // Function to close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        // Stop the video by clearing the source
        videoFrame.src = '';
    };

    // Close on button click
    closeBtn.addEventListener('click', closeLightbox);

    // Close on clicking outside the video
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});