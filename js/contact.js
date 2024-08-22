function loadContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const contactHtml = `
 <div class="container py-5">
            <div id="contactContent" class="content-section">
                <div class="container mt-5">
                    <h2 class="contact-title">Contact Us</h2>
                        <div class="contact-info">
                            <p><i class="fas fa-phone-alt"></i> +1 514 456-7890</p>
                            <p><i class="fas fa-envelope"></i> General Inquiries: <a href="mailto:info@holdmybook.com">info@holdmybook.com</a></p>
                            <p><i class="fas fa-envelope"></i> Support: <a href="mailto:support@holdmybook.com">support@holdmybook.com</a></p>
                            <p>Follow us on our social media:</p>
                        <ul>
                            <li><a href="https://facebook.com/holdmybook" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://twitter.com/holdmybook" target="_blank"><i class="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://instagram.com/holdmybook" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div class="contact-form-container">
                    <div class="container mt-5">
                        <h4 class="contact-title">Send us a message</h4>
                        <p>If you have specific feedback or questions, please fill out the form below and we'll get back to you as soon as possible.</p>
                        <form class="form">
                            <div class="mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Your Name">
                            </div>
                            <div class="mb-3">
                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                            </div>
                            <div class="mb-3">
                            <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <div class="mb-3">
                            <div class="button-container">
                            </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>  
            `;
        content.innerHTML += contactHtml;
    }

let contactPage = document.getElementById("contactPage");
contactPage.addEventListener("click", function () {
    loadContactPage();
});