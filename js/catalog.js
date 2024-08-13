class Book {
  constructor(isbn, title, author, year, imageUrl, description, price) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class BookList {
  constructor() {
    this.books = [
      new Book(
        "ISBN: 978-3-16-148410-0",
        "Killers of the Flower Moon",
        "David Grann",
        2018,
        "images/2.jpg",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores alias eligendi laboriosam voluptates nam",
      ),
      new Book(
        "ISBN: 978-0-00-000000-0",
        "Quake",
        "Richard Laymon",
        1995,
        "images/1.jpg",
        '"No one writes like Laymon and you\'re going to have a good time with anything he writes" - Dean Koontz',
      ),
      new Book(
        "ISBN: 978-1-11-111111-1",
        "Again, Dangerous Visions",
        "Harlan Ellison",
        1972,
        "images/4.jpg",
        "46 original short stories from the science fiction genre",
      ),
      new Book(
        "ISBN: 978-2-22-222222-2",
        "The Housemaid",
        "Freida McFadden",
        2022,
        "images/3.jpg",
        "From behind closed doors, she sees everything.",
      ),
      new Book(
        "ISBN: 978-3-16-123456-7",
        "The Silent Patient",
        "Alex Michaelides",
        2019,
        "images/9.jpg",
        "She hasn't spoken in years. But her silence is about to be broken.",
      ),

      new Book(
        "ISBN: 978-4-52-345678-9",
        "Gone Girl",
        "Gillian Flynn",
        2012,
        "images/6.jpg",
        "Amazing Amy disappears on the morning of their fifth wedding anniversary.",
      ),
    ];
  }

  getBooks() {
    return this.books;
  }
}

function generateBookCards() {
  const lista = new BookList();
  const cardlist = document.getElementById("bookCards");

  lista.getBooks().forEach((book) => {
    const cardHtml = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${book.imageUrl}" class="card-img-top" alt="${book.title}">
                            <div class="card-body flex-column d-flex">
                                <small class="text-muted">${book.isbn}</small>
                                <h5 class="card-title">${book.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${book.author} | ${book.year}</h6>
                                <p class="card-text">${book.description}</p>
                                <a href="#" class="btn btn-primary mt-auto">Reserve</a>
                            </div>
                        </div>
                    </div>
                `;
    cardlist.innerHTML += cardHtml;
  });
}

let catalog = document.getElementById("catalog");
catalog.addEventListener("click", function () {
  generateBookCards();
});
