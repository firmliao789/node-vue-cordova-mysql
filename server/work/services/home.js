const http = require('http')
module.exports = {
    getNews: async() => {
        let options = {
            hostname: 'http://news.baidu.com/',
            method: 'GET'
        };
        var req = http.request(options, function (res) {
            console.log(res);
            return res;
        })
        req.end();
    }
}