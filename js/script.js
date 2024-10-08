document.addEventListener("DOMContentLoaded", loadhome);
let homebtn = document.getElementById("homebtn");


homebtn.onclick = function (){
    loadhome();
};

function loadhome() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = `
   <div id="hero" class="px-4 py-5 d-flex align-items-center justify-content-center">
    <div class="text-center">
        <h1 class="display-2 fw-bold text-light text-decoration-underline" style="font-family: literata,serif">Welcome to Our Library</h1>
        <div class="col-lg-12 mx-auto">
            <p class="display-6 lead mb-4 text-light">Discover a world of knowledge and imagination.</p>
        </div>
    </div>
</div>
    <div class="container">
        <h2 class="mt-4">Categories</h2>
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="/images/Books.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Books</h5>
                        <p class="card-text">A brief description of the book goes here.</p>
                        <a href="#" class="catalog btn btn-primary book-btn">View Catalog</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="/images/Journals.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Scientific Journals</h5>
                        <p class="card-text">Another interesting book description.</p>
                        <a href="#" class="catalog btn btn-primary book-btn">View Catalog</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="/images/Magazines.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Magazines</h5>
                        <p class="card-text">Yet another captivating book summary.</p>
                        <a href="#" class="catalog btn btn-primary book-btn">View Catalog</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    const catalogbtns = document.querySelectorAll('.catalog');
    catalogbtns.forEach(function(button) {
        button.onclick = function() {
            generateBookCards(); // Or any other function you need to run
        };
    });
}