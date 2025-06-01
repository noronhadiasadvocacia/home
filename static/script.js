    function openImage(element) {
        const src = element.getAttribute('src');
        const alt = element.getAttribute('alt');
        const modalImage = document.getElementById('modalImage');
        modalImage.src = src;
        modalImage.alt = alt;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    }