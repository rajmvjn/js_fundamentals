// FOUR FUNDAMENTAL PRICIPLES OF OBJECT ORIENTED PROGRAMMING

// 1. Abstraction  // hide the details of the implementation     // example - addEventListner - we dont know how its works behind the scene, also we dont really have to know

// 2. Encapsulation // hide the details of the implementation    // example - having private variables   // preventing outside world from manipulation of the variables

// 3. Inheritance // Child has extends parent class // example - Person class extends Being class

// 4. Polymorphism  // Overloading // example - Admin class extends the user class and modifies implementation of login method


// OBJECT ARE LINKED TO PROTOTYPES
// THE PROTOTYPE CONTAINS METHODS THAT ARE ACCESSIBLE TO ALL THE OBJECTS THAT ARE LINKED TO THAT PROTOTYPE
// THE ABOVE IS CALLED PROTOTYPICAL INHERITANCE, WHICH IS IN FACT DIFFERENT THAN CLASS INHERITANCE

// JS HOW DO WE DO PROTOTYPICAL INHERITANCE

// 1. Object.create()
        // Easiest and straight forward way to create an object that linked to prototype object

// 2. CONSTRUCTOR FUNCTION
        // Technique to create Objects from function
        // This is how build in Objects like array, map or set are created

// 3. ES6 CLASSES
        // Syntatical sugar over the constructor function
        // Not behave like classic classes in OOP

