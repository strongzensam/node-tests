const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  var results = utils.add(33, 11);
  expect(results).toBe(44).toBeA('number');
  // if (results !== 44) {
  //   throw new Error(`Expected 44 but got ${results}`)
  // };
});
it('should async add two numbers', (done) => {
  var results = utils.asyncAdd(33, 11, (sum)=>{
    expect(sum).toBe(44).toBeA('number');
    done();
  });
});
it('should square a number', () => {
  var results = utils.square(10);
  expect(results).toBe(100).toBeA('number');

});
it('should async square a number', (done) =>{
  var results = utils.asyncSquare(10, (product) =>{
    expect(product).toBe(100).toBeA('number');
    done();
  })
})
it('should expect some values', () => {
  expect(12).toNotBe(11);
  expect([0,'Heyo',76,{name: "Sam"}]).toEqual([0,'Heyo',76,{name: "Sam"}]);
  expect([0,'Heyo',76,{name: "Sam"}]).toExclude(2);
  expect({
    name: "Sam",
    age: 31,
    location: "Vallejo"
  }).toExclude({
    age:2
  });
})
it('should expect users first and last name', () => {
  var user = {
    age: 31,
    location: "Vallejo"
  }
  var testcase = utils.setName(user, "Sam Schwartz");
  expect(user).toBeA('object').toInclude({
    firstName: "Sam",
    lastName: "Schwartz"
  });
})
