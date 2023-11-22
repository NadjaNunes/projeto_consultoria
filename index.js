document.addEventListener('DOMContentLoaded', function() {

    var openModalButton = document.getElementById('openModalButton');
    var closeModalButton = document.getElementById('closeModalButton');
    var modal = document.getElementById('myModal');
    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
