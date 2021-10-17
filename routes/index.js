const express =  require('express');
const router =  express.Router();
const fs =  require('fs');
const dir = __dirname;

const removeExtension = (file) => {
    return file.split('.').shift();
}

fs.readdirSync(dir).filter((file) => {
    const notExtension = removeExtension(file);
    const skip = 'index'.includes(notExtension);
    if(!skip){
        router.use(`/${notExtension}`,require(`./${notExtension}`));
    }
});



router.get('*' , (req, res) => {
    res.status(404);
    res.send({error: "not found"});
});


module.exports = router;