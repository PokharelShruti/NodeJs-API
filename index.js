const express= require('express');
const app= express();

app.use(express.json());
let products=[
    {id:1, name:'Laptop', price: 1000},
    {id:2, name:'Keyboard', price:50}
];
app.get('/', (req,res)=>{
    res.send('Welcome to ERP API');
});
app.get('/products',(req,res)=>{
    res.json(products);
});
app.post('/products',(req,res)=>{
    const newProduct= req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});
app.put('/products/:id', (req,res)=>{
const id=parseInt(req.params.id);
const updatedProduct=req.body;
const index = products.findIndex(p=>p.id===id)
if (index!==-1){
    products[index]=updatedProduct;
res.json(updatedProduct);
}
else{
    res.status(404).json({message:'Product Not Found'})

}
});

app.delete('/products/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const index=products.findIndex(p=>p.id===id)
    if(index !==-1){
        products.splice(index,1);
        res.json({message: `Product with id ${id} is deleted`});
    }
    else{
        res.status(404).json({message:'Product Not Found'});
    }
});

app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
});