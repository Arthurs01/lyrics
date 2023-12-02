const express = require('express')
const router = express.Router();
const getLyrics = require ('./getLyrics')   
const extract = require('./utils/extractLyrics') 
const cheerio = require('cheerio-without-node-native');

router.get('/', async(req, res) =>{    
    res.render('index')
})

router.get('/search',(req, res) => {
    res.render('search')
})

router.post('/search', async (req, res) =>{ 
        const options = {    
            apiKey:'IpHRFgg6B4B9uRZgjMvWfZJH_CE9sd8oH7Le0f4p4l5813nVveIUIZiFoH98gutr',
            title:  req.body.title,
            artist: req.body.artist,          
            optimizeQuery:true
        }           
        let dataLyrics = await getLyrics(options).then((lyric) => lyric)
        

        res.render('search', {lyrics:dataLyrics});   
        console.log(dataLyrics)    
        
})

module.exports = router;