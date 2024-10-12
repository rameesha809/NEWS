import express from 'express'
const app = express()
const port = 3005
import mongoose from 'mongoose'
import cors from 'cors';
app.use(cors()); 
const noteSchema = new mongoose.Schema({
    name: String,
    password: String
});
const Note = mongoose.model('Note', noteSchema);
mongoose.connect("mongodb://localhost:27017/form", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err))
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Data saved")

})
app.post('/generated',async(req,res) => {
    try {
        const { firstName, password } = req.body;

            let newNote = new Note({ name: firstName, password }); 
            await newNote.save();


            res.json({ redirectUrl: '/' });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Error saving data");
    }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})