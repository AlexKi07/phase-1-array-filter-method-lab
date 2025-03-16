// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

console.log(findMatching(drivers, "Sarah"))


function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()))
}
 drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(drivers, query){
return drivers.filter(driver => driver.name === query)
}