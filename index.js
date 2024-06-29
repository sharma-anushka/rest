const express = require("express");
const app = express();
const port = 8080;
const methodOverride = require('method-override');


const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username:"apnacoll",
        content: "i love coding"
    },
    {
        id: uuidv4(),
        username : "rahul kumar",
        content :  "'hard work pays off"
    },
    {
        id: uuidv4(),
        username : "anushka",
        content : "loves to learn"
    }
];
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("form.ejs")
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id,username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show", {post});
});

app.patch("/posts/:id", (req, res) =>{
    let { id } = req.params;
    let newContent = req.body.content;
    let post =posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
    
});

app.get("/posts/:id/edit", (req, res) =>{
    let { id } = req.params;
    let post =posts.find((p) => id === p.id);
    res.render("edit" , {post});
});

app.listen(port, ()=>{
    console.log("app is listening");
});