const express = require('express');
const app = express();

const dishes =[{
    type: 'Sisig',
    province: 'Pampanga',
    price: 220
},
{
    type: 'Salpicao',
    province: 'Quezon',
    price: 180
},
{
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370
}
]; 
app.get('/dishes', (req, res) => {
    res.send(dishes);
});

app.get('/dishes/:type', (req, res) => {
    const dishes = dishes.find(a => a.type=== parseInt(req.params.type));
    if (!dishes) return res.status(404).send('Record not found');
    res.send(dishes);
});

app.listen(3000, () => console.log('server is listening on port 3000'));