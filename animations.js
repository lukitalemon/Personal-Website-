// Add smooth scrolling behavior to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Function to handle mute/unmute toggle
function toggleMute() {
    var video = document.getElementById("projectVideo");
    var muteButton = document.getElementById("muteButton");
    
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
}

// Add event listener for mute button click
document.getElementById("muteButton").addEventListener("click", toggleMute);


