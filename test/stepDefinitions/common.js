import dashboard from "../pageobjects/web/dashboard.page";
import search from  "../pageobjects/web/search.page";

var {Given, When, Then} = require('cucumber');

Given(/^Bill has decided to check available flights$/, function () {
    dashboard.open();
    browser.pause(4000);
});

When(/^Bill looks at a return trip from "([^"]*)" to "([^"]*)" leaving one week from now$/, function (departure, arrival) {
    dashboard.departure(departure);
    browser.pause(4000);
    dashboard.arrival(arrival);
    browser.pause(4000);
    dashboard.departing();
    dashboard.returning();
    dashboard.searchFlight();
});

Then(/^Bill sees the cheapest return ticket$/, function () {
    browser.pause(10000);
    search.sortReturnFlighPrice();
    browser.pause(4000);
});