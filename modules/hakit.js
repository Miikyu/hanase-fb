'use strict';
const request = require('request');

// Kitsu API
// Original Source by the-conceptionist/node-kitsu

exports.animeInfoNameEN = function(query, offset) {
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
                var fetchData = JSON.parse(body)
                var results = fetchData.data.attributes.titles.en_jp
                resolve(results)
            }
        })
    })
}
