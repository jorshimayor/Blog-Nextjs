export default ProxyHandler(re, res){
    res.status(200).json({text: "Hello"});
}