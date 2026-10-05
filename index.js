const express=require("express");
const app=express();
const path=require("path");
app.use(express.static("public"));

const port=8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
console.log(`listening on port${port}`);
});

app.get("/ig/:username",(req,res)=>{
    
   const  user={
    username:"@its_akshara_akzz",
    name:"Akshara",
    followers:1000,
    following :50000, 
    bio:"I am a web developer and I love to create beautiful websites!!"
   }
       const posts = [
        {
            username: "akshara_chaudhary",
            likes: 120,
            caption: "Learning EJS 🚀"
        },
        {
            username: "sushant",
            likes: 250,
            caption: "Beautiful day ☀️"
        },
        {
            username: "yummm_gill",
            likes: 90,
            caption: "Coding is fun 💻"
        },
        {
            username: "adam_sroff",
            likes: 500,
            caption: "Building my first project 🔥"
        }
    ];
    res.render("instagram.ejs", { user,posts });
});
