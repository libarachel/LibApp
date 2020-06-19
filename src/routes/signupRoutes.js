const express=require ('express');
function router(nav){
const signupRouter=express.Router();

signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav,
        title:'LIBRARY'
        
    

    });
});
signupRouter.get('/thank', (req, res) => {
    res.render('thank');
  });

return signupRouter;
}
module.exports=router;