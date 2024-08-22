class Book {
  constructor(isbn, title, author, year, imageUrl, description) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.imageUrl = imageUrl;
    this.description = description;
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
      new Book(
          "ISBN: 978-0-14-103614-4",
          "To Kill a Mockingbird",
          "Harper Lee",
          1960,
          "images/12.jpg",
          "A classic of modern American literature, dealing with racial injustice in the Deep South.",
      ),

      new Book(
          "ISBN: 978-0-7432-7356-5",
          "The Great Gatsby",
          "F. Scott Fitzgerald",
          1925,
          "images/11.jpg",
          "A tale of American decadence and idealism set during the Roaring Twenties.",
      ),

      new Book(
          "ISBN: 978-0-14-028009-1",
          "1984",
          "George Orwell",
          1949,
          "images/8.jpg",
          "A dystopian novel set in a totalitarian society, exploring themes of surveillance and control.",
      ),

      new Book(
          "ISBN: 978-0-316-76948-0",
          "The Catcher in the Rye",
          "J.D. Salinger",
          1951,
          "images/4.jpg",
          "A coming-of-age story following the experiences of its teenage protagonist in New York City.",
      ),

      new Book(
          "ISBN: 978-0-06-112008-4",
          "One Hundred Years of Solitude",
          "Gabriel García Márquez",
          1967,
          "images/5.jpg",
          "A landmark of magical realism, chronicling a family's history over seven generations.",
      ),

      new Book(
          "ISBN: 978-0-14-303809-2",
          "Pride and Prejudice",
          "Jane Austen",
          1813,
          "images/6.jpg",
          "A romantic novel of manners set in Georgian England, exploring themes of love and social status.",
      ),

      new Book(
          "ISBN: 978-0-7432-4722-1",
          "The Da Vinci Code",
          "Dan Brown",
          2003,
          "images/7.jpg",
          "A thrilling mystery novel combining symbology, art, and religious history.",
      ),

      new Book(
          "ISBN: 978-0-09-954844-6",
          "The Girl with the Dragon Tattoo",
          "Stieg Larsson",
          2005,
          "images/8.jpg",
          "A gripping crime novel featuring a complex hacker protagonist and dark family secrets.",
      ),

      new Book(
          "ISBN: 978-0-06-112241-5",
          "The Alchemist",
          "Paulo Coelho",
          1988,
          "images/9.jpg",
          "A philosophical novel about a young shepherd's journey to find his destiny.",
      ),

      new Book(
          "ISBN: 978-0-307-27747-6",
          "The Hunger Games",
          "Suzanne Collins",
          2008,
          "images/10.jpg",
          "A dystopian young adult novel set in a post-apocalyptic world with a deadly annual competition.",
      ),

      new Book(
          "ISBN: 978-0-385-47454-6",
          "The Pillars of the Earth",
          "Ken Follett",
          1989,
          "images/11.jpg",
          "An epic historical novel set in 12th century England, centered around the building of a cathedral.",
      ),

      new Book(
          "ISBN: 978-0-316-01202-8",
          "Eat, Pray, Love",
          "Elizabeth Gilbert",
          2006,
          "images/12.jpg",
          "A memoir chronicling the author's journey of self-discovery across Italy, India, and Indonesia.",
      ),
    ];
  }  getBooks() {
    return this.books;
  }

  searchBooks(query) {
    const lowerCaseQuery = query.toLowerCase();
    return this.books.filter(book =>
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery) ||
        book.isbn.toLowerCase().includes(lowerCaseQuery)
    );
  }
}

function generateBookCards() {
  const listOfBooks = new BookList();
  const content = document.getElementById("content");

  content.innerHTML = `
    <div class="container py-3">
        <form class="row justify-content-md-center">
          <div class=" col-6 ">
              <div class="input-group ">
                    <span class="input-group-text rounded-start-pill shadow-sm" id="basic-addon1"><i class="bi bi-search "></i></span>
                    <input class="form-control form-control-lg rounded-pill rounded-start-2 shadow-sm" type="text" id="searchInput" placeholder="Search by title, author, or ISBN">
              </div>
          </div>
        </form>
     <div id="bookCards" class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"></div>
    </div>
  `;

  const searchInput = document.getElementById("searchInput");

  // Add debounce function
  const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // Add event listener for input event with debounce
  searchInput.addEventListener("input", debounce(function() {
    searchBooks();
  }, 300)); // 300ms delay

  // Display all books initially
  displayBooks(listOfBooks.getBooks());
}

function searchBooks() {
  const searchQuery = document.getElementById("searchInput").value.trim();
  const listOfBooks = new BookList();
  const cardList = document.getElementById("bookCards");

  if (searchQuery === "") {
    // If search query is empty, display all books
    displayBooks(listOfBooks.getBooks());
  } else {
    const filteredBooks = listOfBooks.searchBooks(searchQuery);
    if (filteredBooks.length === 0) {
      cardList.innerHTML = '<p class="col-12 text-center">No books found matching your search.</p>';
    } else {
      displayBooks(filteredBooks);
    }
  }
}

function displayBooks(books) {
  const cardList = document.getElementById("bookCards");
  cardList.innerHTML = "";  // Clear previous results

  books.forEach((book) => {
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
    cardList.innerHTML += cardHtml;
  });
}

let catalog = document.getElementById("catalog");

catalog.addEventListener("click", function () {
  generateBookCards();
});