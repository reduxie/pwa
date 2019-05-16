"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'User' };
document.body.innerHTML = greeter(user);
//# sourceMappingURL=_greeter.js.map