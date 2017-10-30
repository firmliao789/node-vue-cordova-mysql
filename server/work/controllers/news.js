const newsService = require('../services/news'),
    rssSite = require('../config/rssSite.json'),
    channel = rssSite.channel,


    initNewsList = function () {
        channel.forEach(function (e, i) {
            var lists = [];
            if (e.work != false) {
                newsService.fetchRss(e.link).then(function (posts) {
                    posts.forEach(function (data, i) {
                        var nowDate = (+new Date());
                        lists.push({
                            id: 'N' + nowDate + i,
                            title: data.title,
                            description: data.description,
                            summary: data.summary,
                            date: +new Date(data.date),
                            link: data.link,
                            guid: data.guid,
                            comments: data.comments && JSON.stringify(data.comments),
                            origlink: data.origlink,
                            source: data.source && JSON.stringify(data.source),
                            categories: data.categories && JSON.stringify(data.categories),
                            enclosures: data.enclosures && JSON.stringify(data.enclosures),
                            createdAt: nowDate
                        })
                    })

                    newsService.insertList(lists);
                }, function (err) {
                    console.log(err);
                });
            }
        })
    },
    getNewsList = async function (ctx) {
        const Data = ctx.request.query;
        let result = await newsService.getNewsList(Data.pageNo, Data.pageSize);
        if (result) {
            ctx.body = {
                code: 99,
                data: result
            }
        }
    }

module.exports = {
    initNewsList,
    getNewsList
}