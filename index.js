const axios = require('axios');
const value = "Wikipedia";

var responseData = axios.get("https://en.wikipedia.org/w/api.php", {
    params:{
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: value
    }
})
.then((res)=>{
    console.log(res.data.query);
});