import server from './index.js';

const PORT = 8080;
server.listen(process.env.PORT, () =>{
    console.log(`Server is Listening at Port - ${PORT}`);
})
