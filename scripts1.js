// Interactive JavaScript example: change team member image on hover

// Select team member images
const teamMemberImages = document.querySelectorAll('.team-member img');

// Add event listeners for hover effect
teamMemberImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        // Change the image source on hover
        if (image.alt === 'Team Member 1') {
            image.src = 'team-member1-hover.jpg'; // Replace with actual hover image
        } else if (image.alt === 'Team Member 2') {
            image.src = 'team-member2-hover.jpg'; // Replace with actual hover image
        }
    });

    image.addEventListener('mouseout', function() {
        // Restore the original image source on mouseout
        if (image.alt === 'Team Member 1') {
            image.src = 'team-member1.jpg'; // Replace with actual original image
        } else if (image.alt === 'Team Member 2') {
            image.src = 'team-member2.jpg'; // Replace with actual original image
        }
    });
});
