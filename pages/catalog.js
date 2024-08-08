<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hold My Book - Catalog</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="fas fa-book"></i> Hold My Book</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <button class="btn btn-primary" style="background-color: #8B4513; border-color: #8B4513;">Profile</button>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="search-bar input-group">
            <input type="text" class="form-control" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
            <button class="btn btn-outline-secondary" type="button"><i class="fas fa-sliders-h"></i></button>
        </div>

        <div class="book-section">
            <h2>Popular</h2>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2 mb-4">
                    <img src="https://picsum.photos/200/300" alt="Killers of the Flower Moon" class="book-cover w-100">
                </div>
                <div class="col-6 col-md-4 col-lg-2 mb-4">
                    <img src="https://picsum.photos/200/300" alt="The Hunter" class="book-cover w-100">
                </div>
                <div class="col-6 col-md-4 col-lg-2 mb-4">
                    <img src="https://picsum.photos/200/300" alt="Icebreaker" class="book-cover w-100">
                </div>
                <div class="col-6 col-md-4 col-lg-2 mb-4">
                    <img src="https://picsum.photos/200/300" alt="I See You Everywhere" class="book-cover w-100">
                </div>
                <div class="col-6 col-md-4 col-lg-2 mb-4">
                    <img src="https://picsum.photos/200/300" alt="The Teacher" class="book-cover w-100">
                </div>
                <div class="col-6 col-md-4 col-lg-2 mb-4">
                    <img src="https://picsum.photos/200/300" alt="The Boys in the Boat" class="book-cover w-100">
                </div>
            </div>
        </div>

        <div class="book-section">
            <h2>Recommended</h2>
            <div class="row">
                <div class="col-6 col-md-3 mb-4">
                    <img src="https://picsum.photos/200/300" alt="Killers of the Flower Moon" class="book-cover w-100">
                </div>
                <div class="col-6 col-md-3 mb-4">
                    <img src="https://picsum.photos/200/300" alt="Quake" class="book-cover w-100">
                </div>
                <div class="col-6 col-md-3 mb-4">
                    <img src="https://picsum.photos/200/300" alt="Again, Dangerous Visions" class="book-cover w-100">
                </div>
                <div class="col-6 col-md-3 mb-4">
                    <img src="https://picsum.photos/200/300" alt="The Housemaid" class="book-cover w-100">
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>