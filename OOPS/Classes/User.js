var User = /** @class */ (function () {
    function User(fname, lName) {
        this.firstName = fname;
        this.lastName = lName;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setFirstName = function (name) {
        this.firstName = name;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (name) {
        this.lastName = name;
    };
    return User;
}());
var myUser = new User("Pragatheesh", "Raghu");
console.log(myUser.getFirstName());
console.log(myUser.getLastName());
myUser.setFirstName("Thanigai");
myUser.setLastName("R");
console.log(myUser.getFirstName());
console.log(myUser.getLastName());
