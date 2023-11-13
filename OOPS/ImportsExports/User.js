"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(fname, lName) {
        this.firstName = fname;
        this.lastName = lName;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(name) {
        this.firstName = name;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(name) {
        this.lastName = name;
    }
}
exports.User = User;
let myUser = new User("Pragatheesh", "Raghu");
console.log(myUser.getFirstName());
console.log(myUser.getLastName());
myUser.setFirstName("Thanigai");
myUser.setLastName("R");
console.log(myUser.getFirstName());
console.log(myUser.getLastName());
