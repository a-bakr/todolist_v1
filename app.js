const express = require('express');
const bodyParser = require('body-parser');
const date = require( __dirname + '/date.js');

const app = express();
app.listen(3000, () => console.log('Server started at port 3000.'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

let items = ['learning EJS', 'Studying React JS'];
let itemsWork = [];

app.get('/', (req, res) => {
	
	let day = date.getDate();

	res.render('list', {
		listName: day,
		newItems: items
	});
})

app.post('/', (req, res) => {
	let item = req.body.newItem;
	console.log(req.body.button);
	
	if (req.body.button === 'Work') {
		item === '' ? itemsWork : itemsWork.push(item);	
		res.redirect('/work');
	} else {
		item === '' ? items : items.push(item);
		res.redirect('/');
	}
})

app.get('/work', (req, res) => {
	res.render('list', {
		listName: 'Work List',
		newItems: itemsWork
	})
})

app.get('/about', (req, res) => {
	res.render('about')
})