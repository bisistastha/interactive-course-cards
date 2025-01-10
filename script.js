function expandCard(element) {
    const cards = document.querySelectorAll('.card');
    
    if (element.classList.contains('expanded')) {
        return;
    }

    // Add animation class to trigger rotation
    element.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    cards.forEach(card => {
        if (card.classList.contains('expanded')) {
            // Add animation before collapsing
            card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Collapse with animation
            requestAnimationFrame(() => {
                card.classList.remove('expanded');
                card.style.backgroundColor = 'var(--bg-pink)';
                card.style.color = 'var(--primary-red)';
                
                // Hide content with fade
                const iconGrid = card.querySelector('.icon-grid');
                const viewAll = card.querySelector('.view-all');
                if (iconGrid) iconGrid.style.opacity = '0';
                if (viewAll) viewAll.style.opacity = '0';
            });
        }
    });
    
    // Expand with animation
    requestAnimationFrame(() => {
        element.classList.add('expanded');
        element.style.backgroundColor = 'var(--primary-red)';
        element.style.color = 'white';
        
        // Show content with fade
        const iconGrid = element.querySelector('.icon-grid');
        const viewAll = element.querySelector('.view-all');
        if (iconGrid) {
            iconGrid.style.display = 'grid';
            setTimeout(() => {
                iconGrid.style.opacity = '1';
            }, 100);
        }
        if (viewAll) {
            viewAll.style.display = 'flex';
            setTimeout(() => {
                viewAll.style.opacity = '1';
            }, 100);
        }
    });
}

// Initialize first card
document.addEventListener('DOMContentLoaded', () => {
    const firstCard = document.querySelector('.card');
    if (firstCard) {
        firstCard.classList.add('expanded');
        firstCard.style.backgroundColor = 'var(--primary-red)';
        firstCard.style.color = 'white';
        
        const iconGrid = firstCard.querySelector('.icon-grid');
        const viewAll = firstCard.querySelector('.view-all');
        if (iconGrid) {
            iconGrid.style.display = 'grid';
            iconGrid.style.opacity = '1';
        }
        if (viewAll) {
            viewAll.style.display = 'flex';
            viewAll.style.opacity = '1';
        }
    }
});