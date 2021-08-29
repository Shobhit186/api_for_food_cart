
var express = require('express');
var router = express.Router();


const data =  [
           {
             id: 1,
             img: '/images/img2.jpg',
             title: 'Pizza Marinara',
             desc: 'Features tomatoes, garlic, oregano, and extra virgin olive oil',
             price: 89,
           },
           {
               id: 2,
               img: '/images/img8.jpg',
               title: 'Pizza Margherita',
               desc: 'Features tomatoes, sliced mozzarella, basil, and extra virgin olive oil',
               price: 169,
           },
           {
               id: 3,
               img: '/images/img13.jpg',
               title: 'Detroit Pizza',
               desc: 'features pepperoni, brick cheese usually brick cheese, tomato sauce.',
               price: 489,
           },
           {
               id: 4,
               img: '/images/img4.jpg',
               title: 'St. Louis Pizza',
               desc: 'features Provel cheese and a sweeter tomato sauce with  oregano.',
               price: 489,
           },
           {
               id: 5,
               img: '/images/img15.jpg',
               title: 'Sicilian Pizza',
               desc: 'it originated in Sicily, Italy, and was first sold in Italian bakeries where it is known as sfincione',
               price: 399,
           },
           {
               id: 6,
               img: '/images/img14.webp',
               title: 'Greek Pizza',
               desc: 'Proofed and baked in shallow pans, unlike regular pizzas, the dough is not stretched.',
               price: 399,
           },
           {
               id: 7,
               img: '/images/img1.jpg',
               title: 'Ai Broccoli',
               desc: 'Tomato sauce, Mozzarella, Broccoli, Garlic, Chili peppers, Oregano peproni and slice cheese',
               price: 899,
           },
           {
               id: 8,
               img: '/images/img3.jpg',
               title: 'Quattro Formaggi',
               desc: 'Tomato Sauce, Four different kinds of cheese (Mozzarella, Gorgonzola Piccante)',
               price: 1099,
           },

      ];
    
    

/* GET users listing. */
router.get('/', function(req, res) {
  
  

    res.send(data);
});
router.get('/:id', function(req,res) {
     
    const item = data.find(d => d.id === parseInt(req.params.id));
    if(!item) res.status(404).send('Item not found');   //404
    res.send(item);
})


module.exports = router;
