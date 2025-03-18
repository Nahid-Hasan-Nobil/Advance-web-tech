const http= require('http')
const server= http.createServer((req,res)=>{

    res.write("Hello")
    res.end()
})

server.listen(2000,()=>{

    console.log("server is running on port-2000")
})