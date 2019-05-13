const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://ake:chaman99+@cluster0-7wke5.mongodb.net/test?retryWrites=true', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('MongoDB en Linea'))
  .catch(err => console.error(err));
