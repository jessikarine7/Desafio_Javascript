function configurarModal(openButtonId, modalId) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(openButtonId);
    var close = modal.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    };
    close.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

configurarModal("openModalView", "modalView");
configurarModal("openModalEdit", "modalEdit");
configurarModal("openModalDelete", "modalDelete");