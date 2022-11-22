import React from 'react';
import ReactDOM from 'react-dom';
import Book from "./book"

const books = [
    {
        id: 0,
        img: "https://m.media-amazon.com/images/I/41yFXWNfPtL._SY346_.jpg",
        title: "A Spy's Guide to Thinking",
        author: "John Braddock"
    },
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/3167D-lfywL.jpg",
        title: "Guns",
        author: "Stephen King"
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/51rB5PUVRoL.jpg",
        title: "Here Be Monsters... 50 Days Adrift At Sea",
        author: "Michael Finkel"
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/41hxJerWa9L.jpg",
        title: "Illusions II: The Adventures of a Reluctant Student",
        author: "Richard Bach"
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/61jwYJQo5mL.jpg",
        title: "Murder In The Yoga Store",
        author: "Peter Ross Range"
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/51CPXzIUP+L.jpg",
        title: "Reckoning: Conversations With the Grateful Dead",
        author: "Alan Paul"
    }
]


const Booklist = () => {
    return ( 
        <section className='booklist'>
            {
                books.map((book) => {
                    return <Book key={book.id} {...book}/>
                })
            }
        </section>
    );
}
 
export default Booklist;