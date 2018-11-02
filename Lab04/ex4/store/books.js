const favoriteAuthor = { name: "Don Winslow", genre: "True Crime", nationality: "English" };

// returns the favorite book
function favoriteBook() {  
    return { title: "The Force", author: "Don Winslow" };
}

// returns a list of good books
function getBookRecommendations() {  
    return [
        {id: 1, title: "Kings of Cool", author: "Don Winslow"},
        {id: 2, title: "The Stand", author: "Steven King"},
        {id: 3, title: "The Gray Man", author: "Mark Greaney"}
    ];
}

// exports the variables and functions above so that other modules can use them
module.exports = {
    favoriteAuthor: favoriteAuthor,  
    favoriteBook: favoriteBook,
    getBookRecommendations: getBookRecommendations
}