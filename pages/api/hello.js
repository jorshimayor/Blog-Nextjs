export default ProxyHandler((req, res)=>{
    res.status(200).json({text: "Hello"});
})
