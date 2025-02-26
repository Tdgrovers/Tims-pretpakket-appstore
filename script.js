window.onload = function() {
    // Get the modal and the close button
    const modal = document.getElementById("welcomeModal");
    const closeModal = document.getElementById("closeModal");

    // Show the modal when the page loads
    modal.style.display = "flex";

    // Close the modal when the close button is clicked
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if the user clicks anywhere outside the modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    const appItems = document.querySelectorAll(".app-item");

    appItems.forEach(app => {
        app.addEventListener("click", function() {
            const appLink = app.getAttribute("data-link");
            openLinkInNewTab(appLink);
        });
    });
};

function openLinkInNewTab(url) {
    window.open(url, '_blank');
}
