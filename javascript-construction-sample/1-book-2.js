// Object of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// // Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book 1'
// book1.somhin = 'somhin'
// book1.year = '2018'

// Another approach
const book1 = Object.create(bookProtos, {
    title: { value: 'Book 1'},
    author: { value: 'somhin'},
    year: { value: '2018'}
});

console.log(book1);