const bodyParser = require('body-parser');
//const ejs=require('ejs');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path')

const express = require('express')
const app = express();


app.set('view engine','ejs');
app.set('views','views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404
app.use((req, res, next) => {
  //res.send("<h1>Page not found</h1>")
  // res.status(404).send("<h1>Page not found</h1>")
  console.log("404")
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  res.status(404).render('404',{pageTitle: 'Page not found'});  
})

app.listen(3001);
