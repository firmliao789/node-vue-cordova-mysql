const request = require('request'),
    FeedParser = require('FeedParser'),
    es = require('event-stream'),
    _ = require('lodash'),
    Iconv = require('iconv').Iconv,
    postOptions = ['title', 'description', 'summary', 'date', 'link',
        'guid', 'author', 'comments', 'origlink', 'image', 'source', 'categories',
        'enclosures'
    ],
    model = require('../model'),
    //抓取网络新闻
    fetchRss = function (url) {
        return new Promise(function (resolve, reject) {
            var posts = [];
            let req = request(url, {
                time: 3000,
                pool: false
            });

            var feedparser = new FeedParser();

            req.setMaxListeners(50);
            req.setHeader('user-agent',
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) ' +
                'AppleWebKit/537.36 (KHTML, like Gecko) ' +
                'Chrome/31.0.1650.63 Safari/537.36'
            )
            req.setHeader('accept', 'text/html,application/xhtml+xml');
            req.on('error', function (err) {
                console.log('抓去网站出错：' + err);
                reject(err)
            })
            req.on('response', function (res) {
                if (res.statusCode != 200) {
                    reject('网络抓取出错')
                }
            }).pipe(es.through(function (data) {
                var result = data.toString('utf-8');
                var meta = result.match(/<\?(.*?)\?>/g);
                if (meta !== null) {
                    meta = meta[0].toString().match(/encoding="(.*?)"\?>/g);
                    encoding = meta && meta.toString().split('"')[1];
                }

                //iconv-lite , which can support windows
                try {
                    result = iconv.decode(data, encoding);
                } catch (err) {
                    result = data.toString('utf-8');
                }
                this.emit('data', data);
            })).pipe(feedparser);

            feedparser.on('error', reject);

            feedparser.on('end', function (err) {
                if (err) {
                    reject(err);
                }
                resolve(posts);
            });

            feedparser.on('readable', function () {
                while (post = this.read()) {
                    var post = _.pick(post, postOptions);
                    posts.push(post);
                }
            });
        })

    },
    //存储新闻列表
    insertList = async function (list) {
        let result = await model.news_list.bulkCreate(list);
        if (result) {
            console.log('新闻抓取完成');
        }
    },
    //获取新闻列表
    getNewsList = async function (pageNo, pageSize) {
        pageNo = parseInt(pageNo);
        pageSize = parseInt(pageSize);
        let result = await model.news_list.findAll({
            offset: pageSize * (pageNo - 1),
            limit: pageSize,
            order: [['createdAt','DESC']]
        });
        if (result)
            return result;
    }

module.exports = {
    fetchRss,
    getNewsList,
    insertList
}