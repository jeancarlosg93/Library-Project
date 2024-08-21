document.addEventListener("DOMContentLoaded", function () {
const contentDiv = document.getElementById("content");
const welcomeSection = document.createElement("section");

welcomeSection.innerHTML = `
    <div class="container top-margin">
      <div  class="p-5 mb-4 bg-body-tertiary rounded-3 bg-image"
  style="
    color: #ffffff;
    background-image: url('/images/books.jpeg');
    filter: brightness(80%);
    height: 300px;
  ">
        <div class="container-fluid py-3 px-3 " style="font-family: literata" >
            <h1 class="display-2 text-light  text-center text-decoration-underline">Welcome to Our Library</h1>
            <p class="display-6  text-light text-center ">Discover a world of knowledge and imagination.</p>
        </div>
      </div>    
      
      <h2 class="mt-4">Categories</h2>
    <div class="row">
        <div class="col-md-4 mb-3">
            <div class="card">
            <img src="/images/Books.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Books</h5>
                    <p class="card-text">A brief description of the book goes here.</p>
                    <a href="#" class="btn btn-primary book-btn">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
            <img src="/images/Journals.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Scientific Journals</h5>
                    <p class="card-text">Another interesting book description.</p>
                    <a href="#" class="btn btn-primary book-btn">Learn More</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-4">
            <div class="card">
              <img src="/images/Magazines.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Magazines</h5>
                    <p class="card-text">Yet another captivating book summary.</p>
                    <a href="#" class="btn btn-primary book-btn">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>`;

    contentDiv.appendChild(welcomeSection);
});
