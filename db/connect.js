require('dotenv').config();

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://djibba:djibba@dbsnode.p8yc9.mongodb.net/crud_mean?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log(err));