const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index");
});

router.get("/homepage",(req,res)=>{
    res.render("homepage");
});

router.get("/donate",(req,res)=>{
    res.render("donate");
});

router.get("/request-help",(req,res)=>{
    res.render("request-help");
});

router.get("/live-map",(req,res)=>{
    res.render("live-map");
});

router.get("/store",(req,res)=>{
    res.render("store");
});

router.get("/dashboard",(req,res)=>{
    res.render("dashboard");
});

router.get("/sample",(req,res)=>{
    res.render("sample");
});

router.get("/map",(req,res)=>{
    res.render("map");
});
module.exports = router;