// implement your posts router here
const express = require('express');
const Posts = require('./posts-model')

const router = express.Router();

// GET
router.get('/', (req, res) => {
    Posts.find()
        .then(post => {
            res.json(post)
        })
        .catch(() => {
            res.status(500).json({
                message: "The posts information could not be retrieved"
            })
        })
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id)
        if(!post){
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        }else{
            res.json(post)
        }
    } catch (err) {
        res.status(500).json({
            message: "The post information could not be retrieved"
        })
    }
})

// POST

router.post('/', (req, res) => {
    const {title, contents} = req.body;
        if(!title || !contents){
            res.status(400).json({
                message: "Please provide title and contents for the post"
            })
        }else{
            Posts.insert({title, contents})
            .then(({id})=> {
                return Posts.findById(id)
            })
            .then(newPost => {
                res.status(201).json(newPost)
            })
            .catch(()=> {
                res.status(500).json({
                    message: "There was an error while saving the post to the database"
                })
            })
        }  
})

//PUT

router.put('/:id', (req, res) => {
    
})

module.exports = router;