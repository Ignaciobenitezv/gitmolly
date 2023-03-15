const {Router} = require('express');

const router = Router();

router.get('/', (req, res)=>{
    res.send('Helo world');
})

module.exports = router;