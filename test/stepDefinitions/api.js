process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


var request = require("request");
var expect = require("chai").expect;


var {Given, When, Then} = require('cucumber');

import {utilMethods} from "../utility/api-validator"

Given(/^I request for the API$/, function () {

    const baseURL1 = "https://api.darksky.net/forecast/6508dfe23c140cf146a5ad4c2b233282/37.8267,-122.4233";
    request.get({url: baseURL1},
        function (error, response) {
            return response;
        });
});


Then(/^I verify the response code "([^"]*)"$/, function (responseCode) {
    request.get({url: "https://api.darksky.net/forecast/6508dfe23c140cf146a5ad4c2b233282/37.8267,-122.4233"},
        function (error, response) {
            assert(response.statusCode).to.equal(responseCode);
        });
});

Then(/^I verfy the "([^"]*)" is "([^"]*)"$/, function (key, action) {
    request.get({url: "https://api.darksky.net/forecast/6508dfe23c140cf146a5ad4c2b233282/37.8267,-122.4233"},
        function (error, response) {
            expect(response.statusCode).to.equal(200);

            const body1 = JSON.parse(response.body);

            const xpathMapforKey = {
                latitude: 'latitude',
                longitude: 'longitude',
                timezone: 'timezone',
                currently: 'currently',
                minutely: 'minutely',
                hourly: 'hourly',
                flags: 'flags',
                offset: 'offset'
            };

            const xpathMapforaction = {
                float: 'isFloat',
                int: 'isInt',
                string: 'isString',
                object: 'isObject'
            };
            assert.isTrue(body1[xpathMapforKey[key]], apiValidator[xpathMapforaction[key]], "assertion failed for" + key +"\t" +action);
        });
});


Then(/^I verfy the "([^"]*)" "([^"]*)" has "([^"]*)" items$/,function (object,key,value) {
    request.get({url: "https://api.darksky.net/forecast/6508dfe23c140cf146a5ad4c2b233282/37.8267,-122.4233"},
        function (error, response) {
            expect(response.statusCode).to.equal(200);

            const body1 = JSON.parse(response.body);


            const xpathObjecti = {
                minutely: 'minutely',
                hourly: 'hourly',
                daily: 'daily'
            };

            const key = {
                data: 'data'
            };

            assert.equal(apiValidator.getsize(body1[xpathObjecti[object]][key[value]]),value, "equality assertion failed");
        });
});

