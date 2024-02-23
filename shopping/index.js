const express =  require('express');

const app = express();

app.use(express.json());

app.use('/' , (req, res) => {

    return res.status(200).json({"msg:": "Shopping Service is Running"});

})


app.listen(8003, () => {
  console.log("Shopping Service is Running on Port 8003");
})   
