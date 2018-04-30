const {db, Gardner, Plot, Vegetable} = require('./models');



db.sync({force: true})
.then(() => {
    console.log('hello');
    return Vegetable.create({name: 'tomato', color: 'red'})
})
.then(() => Vegetable.create({name: 'cucumber', color: 'green'}))
.then((vegetable => {
  return Gardner.create({"favorite_vegetable": vegetable.Id})
})
.then((gardner) => {
  console.log('Gardner created', gardner)
}))
.then(() => {console.log('vegetable added');
db.close()})
.catch(err => {
  console.log (err);
  db.close()}
)

// Vegetable.create()
//   .then((vegetable => {
//     return Gardner.create({"favorite_vegetable": vegetable.Id})
//   })
//   .then((gardner) => {
//     console.log('Gardner created', gardner)
//   }))
