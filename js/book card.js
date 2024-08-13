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
                'ISBN: 978-3-16-148410-0',
                'Killers of the Flower Moon',
                'David Grann',
                2018,
                'path/to/flower_moon.jpg',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores alias eligendi laboriosam voluptates nam! Rem magnam beatae porro, vitae, consequuntur quae, omnis maiores ad ipsam repellat...',
                19.99
            ),
            new Book(
                'ISBN: 978-0-00-000000-0',
                'Quake',
                'Richard Laymon',
                1995,
                'path/to/quake.jpg',
                '"No one writes like Laymon and you\'re going to have a good time with anything he writes" - Dean Koontz',
                15.99
            ),
            new Book(
                'ISBN: 978-1-11-111111-1',
                'Again, Dangerous Visions',
                'Harlan Ellison',
                1972,
                'path/to/dangerous_visions.jpg',
                '46 original short stories from the science fiction genre',
                24.99
            ),
            new Book(
                'ISBN: 978-2-22-222222-2',
                'The Housemaid',
                'Freida McFadden',
                2022,
                'path/to/housemaid.jpg',
                'From behind closed doors, she sees everything.',
                12.99
            )
        ];
    }

    getBooks() {
        return this.books;
    }
}