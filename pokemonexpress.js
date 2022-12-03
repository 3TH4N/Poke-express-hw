const express = require('express');
const app = express();


app.get('/', function(req, res) {
    res.send('Welcome to Pokemon App!');
  });
  

app.get('/pokemon', (req,res) =>{
    res.render(res.render('Index', {allPokemon:pokemon
        }))
})


app.listen(3000, () => {
    console.log('listening');
});