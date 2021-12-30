const User= require("../model/Auth")
const bcrypt =require (bcrypt);

exports.siginup = async (req , res) =>{ 
    try {
        const userName = req.body.userName;
        const password = req.body.password;
    
        error =  verifyNullvalues(userName,password);
        error =  await  verifyExistingUser(userName);
        
        createUser();

    }catch (error){
 console.log(error);
    }
         //   VERIFCATION FUNCTIONS 
    async function verifyExistingUser(userName){
      const oldUser = await User.findOne({userName});
      console.log(oldUser)
      if(oldUser){
        return res.status(409).send("usuario existente ");
      }
      return false;
    }
    function verifyNullvalues(userName , password){
        if(!(userName && password)){
            res.status(400).send("null values");
        }
    }
   async function createUser( userName, pasword ){
       const  encriptedPassword = 
         const user = await User.create({
         userName , password
        })

   }
}
exports.getUsers = async(req , res) => {
    try{
        const posts = await Posts.find();
        console.log('\u001b[' + 32 + 'm' + 'GET : OK ' + '\u001b[0m')
        res.json(posts);

    }catch (error){
        res.send()
    }
}




function verifyAllconditions(userName, password){
     if(!(userName && password)){
         return 400;
     }
}