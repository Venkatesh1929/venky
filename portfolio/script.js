function openCertificate(imagePath) {
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("certificateImage");

    modal.style.display = "block";
    modalImg.src = imagePath;
}

function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
}
