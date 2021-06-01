//Welcome to ⭐️ B&H libarary ⭐️
const library = [
  { name: "The Hollow", author: "Agatha Christie", price: 3 },
  { name: "The Book Thief", author: "Markus Zusak", price: 5 },
  { name: "The ABC Murders", author: "Agatha Christie", price: 2.5 },
  { name: "And Then There Were None", author: "Agatha Christie", price: 3.5 },
  { name: "The Queen's Gambit", author: "Walter Tevis", price: 4 },
  {
    name: "Harry Potter and the Deathly Hallows",
    author: "J. K. Rowling ",
    price: 3,
  },
  {
    name: "Harry Potter and the Order of the Phoenix",
    author: "J. K. Rowling ",
    price: 3,
  },
];

const users = [
  /** add your code here
   array of users 😈
   */
  {
    id: 1,
    name: "Meshari Aldoukhi",
    isAdmin: 0,
    wishlist: [],
    cart: [],
  },
  {
    id: 2,
    name: "Instructor",
    isAdmin: 1,
    wishlist: [],
    cart: [],
  }
];

/**
 ============================Part 1 ============================
1.The user should be able to search for books by title , author ,and prices 🤑
2.The user should be able to add a book to his wishlist
3.The user should be able to add a book to the  cart
4.The user should be able to see the items in the cart and the total amount 💸💰 

 ============================Part 2 ============================
 1.The admin should be able to view all the items
 2.The admin should be able to add new items to the library
 3.The admin should be able to edit items
 4.The admin should be able to remove an item

 Good luck 😍
*/

/* Start with User Side */

//Search Book on the Library
function searchBook(way,params) {
  return (way.toLowerCase() === "title") ? library.filter(el => el.name.includes(params.toLowerCase()))
    : (way.toLowerCase() === "author") ? library.filter(el => el.author.includes(params.toLowerCase()))
    : (way.toLowerCase() === "price") ? library.filter(el => el.price == params)
    : false;
  }
//Add Book in user's WhishList
function addWhishList(userId, params) {
  //Assign user index
  let user = users.find(user => user.id == userId);
  //add the books to the array of user.whishlist
  user.wishlist.push(params)
  return user.wishlist.push(params)
}
//Add Books in the user's cart 
function addCart(userId, params) {
  //Assign user index
  let user = users.find(user => user.id == userId);
  //add to the cart array
  user.cart.push(params)
  return user.cart 
}
//check user cart and the total number
function checkCart(userId) {
  let user = users.find(user => user.id == userId); // Assign the user index
  //check the Cart if is it Empty or not
  if (user.cart.length != 0) { 
    let totalPrice = user.cart.flat().map(el => el.price).reduce((a, b) => a + b); // calculate the Book Price
    let bookName = user.cart.flat().map(el => el.name); //filter the array to show only book's name
    let bookAuthor = user.cart.flat().map(el => el.author); //filter the array to show only book's Author
    let bookPrice = user.cart.flat().map(el => el.price); //filter the array to show only book's Price
    //Write on console log the cart List 
    for (let index = 0; index < user.cart.flat().length; index++) {
      console.log(`The Book name is: ${bookName[index]}, => The Author is: ${bookAuthor[index]} => Cost: ${bookPrice[index]} K.D`)
    }
    console.log(`The total Price for Your all Books Are: ${totalPrice} K.D`) //Write the total Price 
  } else { console.log('Cart is Empty') }
}
/* End With User Side */

/* Start With Admin Side */

//View All Library
function allItem(userId) {
  let user = users.find(user => user.id == userId); // Assign the user index
  return (user.isAdmin == true) ? library : console.log(`You are Not Admin`)
}
//To Add New Item to the Library
function addNewItem(userId, bookName, bookAuthor, bookPrice) {
  let user = users.find(user => user.id == userId); // Assign the user index
  return (user.isAdmin == true) ? library.push({name: bookName, author: bookAuthor, price: bookPrice}) : console.log(`You are Not Admin`)
}
//To Edit Item on the Library 
function editItem(userId, index, EditedValue, NewValue) {
  let user = users.find(user => user.id == userId); // Assign the user index
  if (user.isAdmin == true) {
    if (EditedValue.toLowerCase() === "name") { library[index].name = NewValue }
    else if (EditedValue.toLowerCase() === "author") {  library[index].author = NewValue }
    else if (EditedValue.toLowerCase() === "price") {  library[index].price = NewValue }
  } else {console.log(`You are Not Admin`)}
}
//Removed Item from the Library
function removedItem(userId, index) {
  let user = users.find(user => user.id == userId); // Assign the user index
  return (user.isAdmin == true) ? library.splice(index, 1) : console.log(`You are Not Admin`);
}
/* End With Admin Side */


//console log result
addCart("1",searchBook("price",3)) //add To user Cart same way to addWhishList
addCart("1",searchBook("price",2.5)) //add to check the total if increase or not
checkCart("1")
console.log("#".repeat(50));
addNewItem("1", "Javascript", "Meshari Aldoukhi", 3) //Add new Item only work for admin 
console.log("#".repeat(50));
addNewItem("2", "Javascript", "Meshari Aldoukhi", 3) //Add new Item only work for admin 
console.log(library[library.length-1]) // check if the element is added or not
console.log("#".repeat(50));
editItem("2", 0, "name", "test") // Editied the name of index 0 
console.log(library[0])
