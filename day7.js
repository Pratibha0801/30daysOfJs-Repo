//Activity 1:Object Creation and Access

//<--Task1:
const Book={
    Title : "The Red and the Black",
    Author:"Stendhal",
    Year:1830,
} ; 
console.log(Book);
//output-- Title: 'The Red and the Black', Author: 'Stendhal', Year: 1830 }


//<--Task2:
console.log(Book["Title"]);
console.log(Book["Author"]);
//Output--
//The Red and the Black
//Stendhal


//Activity 2:Object Method

//<--Task3:
console.log(`${Book.Title} by ${Book.Author}`);
//output--The Red and the Black by Stendhal


//<--Task4:
Book.Year=2007;
console.log("Updated");
console.log(Book);
//Output--
//Updated
//{ Title: 'The Red and the Black', Author: 'Stendhal', Year: 2007 }


//Activity 3:Nested OBjects

//<--Task5:
const library={
    name:"city library",
        book1: {
            title:"Bunch of old letters",
            author:"Jawahar Lal Nehru",
        },
        book2: {
            title:"Chandalika",
            author:"Rabindra Nath Tagore",
        },
        book3: {
            title:"Conquest of self",
            author:"Mahatma Gandhi",
        }
};
console.log(library);
//Output--{
//  name: 'city library',
//  book1: { title: 'Bunch of old letters', author: 'Jawahar Lal Nehru' },
//  book2: { title: 'Chandalika', author: 'Rabindra Nath Tagore' },
//  book3: { title: 'Conquest of self', author: 'Mahatma Gandhi' }
//}


//<--Task6:
console.log(library.name);
console.log(library.book1.title);
console.log(library.book2.title);
console.log(library.book3.title);
//Output--
//Bunch of old letters
//Chandalika
//Conquest of self


//Activity4:The this Keyword

//<--Task7:
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};
console.log(book.getTitleAndYear());
//Output--
//The Great Gatsby (1925)



//Activity 5:Object iteration

//<--Task8:
for(const property in Book){
    console.log(`${property}: ${Book[property]}`);;
}
//output--
// Title : The Red and the Black
// Author:Stendhal
// Year:2007


//<--Task9:
//Log all keys
console.log("Keys:");
Object.keys(Book).forEach(key =>{
    console.log(key);
})

//Log all values
console.log("Values:");
Object.values(Book).forEach(value =>{
    console.log(value);
})
//Output--
// Keys:
// Title
// Author
// Year
// Values:
// The Red and the Black
// Stendhal
// 2007



