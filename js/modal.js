let registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
let loginModal = new bootstrap.Modal(document.getElementById('loginModal'));

let regbtn = document.getElementById("registerbtn");
let logbtn = document.getElementById("loginbtn");

logbtn.onclick = function () {
    loginModal.show();
}

regbtn.onclick = function () {
    registerModal.show();
}

window.onclick = function (event) {
    if (event.target === registerModal._element) {
        registerModal.hide();
    }
}
window.onclick = function (event) {
    if (event.target === loginModal._element) {
        loginModal.hide();
    }
}