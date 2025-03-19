const express = require('express');

const app = express();
const port = 6000;

app.use(express.json())

app.post('/registration', (req, res) => {
  const {username, email, password, dateofbirth} = req.body;
  if(!username){ 
    res.json({message:"Username cannot be empty"})
  }
  if(!email){
    res.json({message:"Email cannot be empty"})
  }
  if(password.length < 8 || password.length > 16){
    res.json({message:"Password must be between 8 and 16 characters"})
  }
  dateofbirth
  res.json({message:"User created Successfully", username, email, password, dateofbirth})
});

  app.get('/',(req,res)=>{
    res.json({message: "Successfully completed"})
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});