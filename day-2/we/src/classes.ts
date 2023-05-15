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
    constructor(public canWalk: string) {

    }
}
// interface
interface Hero {
    title: string;
    fullname(): string;
}

class Hero extends Person implements Hero {
    static version: number = 1001;
    //-------------------------------
    constructor(
        public title: string,
        private _firstname: string,
        private _lastname: string,
        ncw: string) {
        super(ncw)
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
    set firstname(nfirstname: string) {
        this._firstname = nfirstname;
    }
    set lastname(nlastname: string) {
        this._lastname = nlastname;
    }
}

let hero = new Hero('Spiderman', 'Peter', 'Parker', 'I can fly');

console.log(hero.title);
console.log(hero.firstname);