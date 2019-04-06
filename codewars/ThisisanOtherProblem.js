// https://www.codewars.com/kata/this-is-an-other-problem/train/javascript

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
}

d = NamedOne.prototype;
Object.defineProperty(d, 'firstName', {
  get: () => this.firstName,
  set: (first) => {
    this.firstName = first;
    this.fullName = first + ' ' + this.lastName;
  }
});
Object.defineProperty(d, 'lastName', {
  get: () => this.lastName,
  set: (last) => {
    this.lastName = last;
    this.fullName = this.firstName + ' ' + last;
  }
});
Object.defineProperty(d, 'fullName', {
  get: () => this.fullName,
  set: (full) => {
    if (full.split` `[1] === undefined) return;
    this.fullName = full;
    this.firstName = full.split` `[0];
    this.lastName = full.split` `[1];
  }
});

// best practice (other person)

// function NamedOne(first, last) {
//   this.firstName = first;
//   this.lastName = last;

//   Object.defineProperty(this, "fullName", {
//     set: function(value) {
//       var parts = value.split(" ");
//       if (parts.length === 2) {
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//       }
//     },
//     get: function() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   });
// }

