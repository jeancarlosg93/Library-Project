function loadContactPage() {
    const content = document.getElementById("dynamicContent");
    content.innerHTML = "";

    const contactHtml = `
                    <div id="contactContent" class="content-section">
                        <div class="container mt-5">
                            <h2>Contact Us</h2>
                            
                        </div>
                    </div>
                `;
        content.innerHTML += contactHtml;
    }

let contactPage = document.getElementById("contactPage");
contactPage.addEventListener("click", function () {
    loadContactPage();
});