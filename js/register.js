
function loadRegisterModal() {
    // Clear any existing content (if necessary)
    const content = document.getElementById("dynamicContent");
    content.innerHTML = "";

    // Modal HTML content
    const modalHtml = `
        <div class="modal d-flex justify-content-center align-items-center show" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5);">
            <div class="modal-dialog">
                <div class="modal-content auth-modal">
                    
                    <div class="login-section">
                        <h5 class="title-welcome">Create an account</h5>
                        <form>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control w-20" placeholder="Name" required>
                                <input type="text" class="form-control w-20" placeholder="Last Name" required>
                            </div>
                            <div class="mb-1 input-group">
                                <span class="input-group-text"><i class="bi bi-at"></i></span>
                                <input type="email" class="form-control" placeholder="E-mail" required>
                            </div>
                            <div class="mb-1 input-group">
                                <span class="input-group-text"><i class="bi bi-lock"></i></span>
                                <input type="password" class="form-control" placeholder="Password" required>
                            </div>
                            <div class="mb-1 input-group">
                                <span class="input-group-text"><i class="bi bi-x"></i></span>
                                <input type="password" class="form-control" placeholder="Re-type Password" required>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="remember">
                                    <label class="form-check-label" for="remember">I agree to terms and conditions</label>
                                </div>
                                <div class="social-icons">
                                    <span><i class="bi bi-facebook"></i></span>
                                    <span><i class="bi bi-instagram"></i></span>
                                    <span><i class="bi bi-google"></i></span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary align-items-center">Submit</button>
                        </form>
                    </div>

                    <div class="register-section w-50 text-center">
                        <span><i class="bi bi-book"></i></span>
                        <h1 class="mb-2">Hold My Book</h1>
                        <h5 class="mb-5">Already Registered?</h5>
                        <button class="register-btn">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append modal content to the dynamicContent or body
    content.innerHTML += modalHtml;
}

// Add an event listener to the "Log In" button
let loginButton = document.getElementById("registerbtn");
loginButton.addEventListener("click", function () {
    loadRegisterModal();
});

// Close modal functionality (optional)
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        document.querySelector('.modal').style.display = 'none';
    }
});