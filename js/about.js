
function loadAboutPage() {
    const content = document.getElementById("dynamicContent");
    content.innerHTML = "";

    const aboutHtml = `
                    <div id="aboutContent" class="content-section">
                        <div class="container mt-5">
                            <h2>About Us</h2>
                            <p>Welcome to Hold My Book! We are a small, community-focused library offering a vast collection of books, eBooks, and magazines. Our mission is to provide a welcoming space for readers of all ages to explore new ideas, discover great literature, and connect with fellow book lovers.</p>
                            <h4>Our Team</h4>
                            <p>Our dedicated team of librarians and volunteers is passionate about books and committed to making your library experience the best it can be.</p>
                            <h4>Our History</h4>
                            <p>Founded in 2024, Hold My Book is growing significantly thanks for our great community.</p>
                        </div>
                    </div>
                `;
        content.innerHTML += aboutHtml;
    }

let aboutPage = document.getElementById("aboutPage");
aboutPage.addEventListener("click", function () {
    loadAboutPage();
});