const express = require("express")
const User = require("../models/user")
const router = express.Router();

router.post('/',async(req,res)=>{
    const{name, age, email} = req.body;

    try{
       const newUser = new User({name , age , email});
       await newUser.save()
       res.status(201).json(newUser);


    }catch(error)
    {
       console.log("error in user registration ",error)
    }

})


router.get('/export', async(req, res)=>{
    try {
        const test = req.query.test
        const users =  await User.find();


        if(test ==='csv')
        {
            const fields = ['name' , 'age' , 'email'];
            const jsonToCsv = new Parser({fields});

            const csvData =  jsonToCsv.Parse({users})
            

            res.header('Content-Type', 'text/csv')
            res.attachment("neosoft.csv")
            
            
            return res.send(csvData) 
        }
    } catch (error) {
        
    }
})

module.exports = router