// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the content div
  const contentDiv = document.getElementById("content");

  // Create and add a welcome section
  const welcomeSection = document.createElement("section");
  welcomeSection.innerHTML = `
        <h1 class="mt-5">Welcome to Hold My Book</h1>
        <p class="lead">Your one-stop destination for all your reading needs.</p>
    `;
  contentDiv.appendChild(welcomeSection);

  // Create and add a featured books section
  const featuredBooksSection = document.createElement("section");
  featuredBooksSection.innerHTML = `
        <h2 class="mt-4">Featured Books</h2>
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Book Title 1</h5>
                        <p class="card-text">A brief description of the book goes here.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Book Title 2</h5>
                        <p class="card-text">Another interesting book description.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Book Title 3</h5>
                        <p class="card-text">Yet another captivating book summary.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    `;
  contentDiv.appendChild(featuredBooksSection);

  // Create and add a call-to-action section
  const ctaSection = document.createElement("section");
  ctaSection.innerHTML = `
        <div class="mt-5 p-4 bg-light rounded">
            <h3>Join Our Community</h3>
            <p>Sign up now to get exclusive offers and updates on new releases!</p>
            <button class="btn btn-success">Sign Up</button>
        </div>
    `;
  contentDiv.appendChild(ctaSection);
});
