<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Register Modal</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="reg-style.css">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css">
</head>
<body>

    <div class="modal d-flex justify-content-center align-items-center">
        <div class="modal-content">
          
            <div class="login-section">
                <h5 class="title-welcome">Welcome back!</h5>
                <form>
                    <div class="mb-3 input-group">
                        <span class="input-group-text"><i class="bi bi-person"></i></span>
                        <input type="text" class="form-control" placeholder="User Name" required>
                    </div>
                    <div class="mb-3 input-group">
                        <span class="input-group-text"><i class="bi bi-lock"></i></span>
                        <input type="password" class="form-control" placeholder="Password" required>
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" id="remember">
                        <label class="form-check-label" for="remember">Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mb-4" style="background-color: #994C00; border: none;">Log In</button>
                </form>
                <div class="social-icons text-center">
                    <span><i class="bi bi-facebook"></i></span>
                    <span><i class="bi bi-instagram"></i></span>
                    <span><i class="bi bi-google"></i></span>
                </div>
            </div>

            <div class="register-section">
                <h1 class="mb-3">Hold My Book</h1>
                <h3 class="mb-4">Don't have an account yet?</h3>
                <button class="register-btn">Register</button>
            </div>
        </div>
    </div>

</body>
</html>