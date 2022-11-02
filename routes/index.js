const router = require('express').Router();
const fs = require('fs');
const {readFile, writeFile} = fs.promises

router.get('/notes' , async (req,res) => {
 const data = await readFile('db/db.json')
 const db = JSON.parse(data)
 res.json(db)
})
router.post('/notes', async (req , res) => {
    const newNote = req.body
    const data = await readFile('db/db.json')
    const db = JSON.parse(data)
    db.push(newNote)
    await writeFile('db/db.json', JSON.stringify(db))
    res.json(db)
})

module.exports = router