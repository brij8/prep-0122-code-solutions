const person = { firstName: 'Duder', lastName: 'McBruh', hobby: 'vibe checking' };
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("the person's full name is:", fullName);

person.job = 'furry artist';
console.log("the person's current job is:", person.job);

person.previousJob = 'Professor of Anthropology';
console.log("the person's previous job was:", person.previousJob);

console.log(person);
