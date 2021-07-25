String.prototype.filter = function(args) {
    var words = this.split(' ');
    return words.filter(function(word) {
        return !args.includes(word);
    }).join(' ');
}

console.log("String filter method example: This house is not nice!".filter(['not']));

Array.prototype.bubbleSort = function() {
    for (var i = 0; i < this.length; i++) {

        for (var j = 0; j < (this.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (this[j] > this[j + 1]) {

                // If the condition is true then swap them
                var temp = this[j]
                this[j] = this[j + 1]
                this[j + 1] = temp
            }
        }
    }
}
var arr = [6, 4, 0, 3, -2, 1];
arr.bubbleSort();
console.log("array bubble sort method")
console.log(arr);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greetings = function() {
    console.log("Greetings, My name is " + this.name + " and I am " + this.age + " years old")
}

Person.prototype.salute = function() {
    console.log("Good morning! And incase I don't see you, Good Afternoon, good evening and good night!")
}

function Student(name, age, major) {
    Person.call(this, name, age)
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greetings = function() {
    console.log("Hey my name is " + this.name + " and I'm studying " + this.major);
}

function Proffesor(name, age, department) {
    Person.call(this, name, age)
    this.department = department;
}

Proffesor.prototype = Object.create(Person.prototype);
Proffesor.prototype.constructor = Proffesor;
Proffesor.prototype.greetings = function() {
    console.log("Good day, my name is " + this.name + " and I'm in " + this.department + " department");
}

var teacher = new Person("John", 35);

teacher.teach = function(subj) {
    console.log(this.name + " is now teaching " + subj);
}

teacher.teach('Math');

var proff = new Proffesor("Prof. Jamie", 49, "computer science");
var stud = new Student("Fred", 19, "Physics");

proff.greetings();
proff.salute();

stud.greetings();
stud.salute();