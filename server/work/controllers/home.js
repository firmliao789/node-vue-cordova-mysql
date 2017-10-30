const homeService = require('../services/home')
var exec = require('child_process').exec;
function silkToWav(file) {
    return new Promise(function (resolve, reject) {
        exec('sh converter.sh ' + file + ' wav', function (err, stdout, stderr) {
            if (err) {
                resolve({
                    result: false,
                    msg: stderr
                });
            } else {
                //var data = JSON.parse(stdout);
                console.log(stdout);
                console.log(stderr);
                //console.log(err);
                resolve({
                    result: true,
                    msg: ''
                });
            }
        });
    });
}

module.exports = {
    get: async(ctx) => {
        let html = `
    <h1 style="margin-top: 50px;text-align: center">welcome my service </h1>
  `

        silkToWav('files/1.silk').then(function (res) {
            console.log(res);
        })
        ctx.body = html


    },
    getNews: async(ctx) => {
        const newsResult = await homeService.getNews();
        console.log(newsResult);
    }
}
