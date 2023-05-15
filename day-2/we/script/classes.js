"use strict";
// constructor
// super()
// Private property
// Public Property
// Private Methods
// Public methods
// Static method
// static property
// Get & set
// class Hero {
//     public title: string = 'Batman';
//     private _firstname: string = 'Bruce';
//     private _lastname: string = 'Wayne';
//     static version: number = 1001;
//     constructor(ntitle: string, nfirstname: string, nlastname: string) {
//         this.title = ntitle;
//         this._firstname = nfirstname;
//         this._lastname = nlastname;
//     }
// }
class Person {
    canWalk;
    constructor(canWalk) {
        this.canWalk = canWalk;
    }
}
class Hero extends Person {
    title;
    _firstname;
    _lastname;
    static version = 1001;
    //-------------------------------
    constructor(title, _firstname, _lastname, ncw) {
        super(ncw);
        this.title = title;
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    //-------------------------------
    fullname() {
        return this._firstname + " " + this._lastname;
    }
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    set firstname(nfirstname) {
        this._firstname = nfirstname;
    }
    set lastname(nlastname) {
        this._lastname = nlastname;
    }
}
let hero = new Hero('Spiderman', 'Peter', 'Parker', 'I can fly');
console.log(hero.title);
console.log(hero.firstname);
