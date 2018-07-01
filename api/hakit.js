const request = require('request');

// Kitsu API
// Original Source from the-conceptionist/node-kitsu

exports.searchAnime = function(query, offset) {
    return new Promise(function(resolve, reject) {
        request({
            method: 'GET',
            url: 'https://kitsu.io/api/edge/anime?filter[text]=' + query + '&page%5Boffset%5D=' + (offset.toString() ? offset : '0'),
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }, function(error, response, body) {
            if (error) {
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}
