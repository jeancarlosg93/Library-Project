function loadLoginModal() {

    const content = document.getElementById("dynamicContent");
    content.innerHTML = "";

    content.innerHTML = `
        <div class="modal d-flex justify-content-center align-items-center">
            <div class="modal-content auth-modal">
                
                <div class="login-section">
                    <br></br>
                    <h5 class="title-welcome">Welcome back!</h5>
                    <form>
                        <div class="mb-2 input-group">
                            <span class="input-group-text"><i class="bi bi-person"></i></span>
                            <input type="text" class="form-control w-50" placeholder="User Name" required>
                        </div>
                        <div class="mb-3 input-group">
                            <span class="input-group-text"><i class="bi bi-lock"></i></span>
                            <input type="password" class="form-control" placeholder="Password" required>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="remember">
                                <label class="form-check-label" for="remember">Remember me</label>
                            </div>
                            <div class="social-icons">
                                <span><i class="bi bi-facebook"></i></span>
                                <span><i class="bi bi-instagram"></i></span>
                                <span><i class="bi bi-google"></i></span>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary align-items-center">Log In</button>
                    </form>
                </div>

                <div class="register-section w-50 text-center">
                    <span><i class="bi bi-book"></i></span>
                    <h1 class="mb-2">Hold My Book</h1>
                    <h5 class="mb-5">Don't have an account yet?</h5>
                    <button class="register-btn" onclick="hideModal()">Register</button>
                </div>
            </div>
        </div>
    `;

    // Show the modal
    modalContainer.querySelector('.modal').style.display = 'flex';
}

// Function to hide the modal
function hideModal() {
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.innerHTML = ''; // Clear the modal content
}

// Attach event listener to the Register button
document.getElementById("loginbtn").addEventListener("click", loadLoginModal);