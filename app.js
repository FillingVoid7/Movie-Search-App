const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port  = 3000

const apiKey = '9098d9f9'

app.use(express.static(path.join(__dirname, 'public')))

app.get('/search',(req,res)=>{
    const query = req.query.q ; 
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
         .then(response=>{
            res.json(response.data);
         })
         .catch(error=>{
            console.error('Error occured while fetching data : ' , error)
            res.status(500).send('Error occured fetching data'); 
         })
}); 

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

