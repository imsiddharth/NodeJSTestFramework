import Page from "./page";
import {utilMethods} from "../../utility/helper-utility";


class DashboardPage extends Page {

    get departureAirport() { return browser.element(".search-flight [name='Departure airport']"); }

    get clearDepartureAirport() { return browser.element(".search-flight [name='clear Departure airport']"); }

    get arrivalAirport() { return browser.element(".search-flight [name='Arrival airport']"); }

    get clearArrivalAirport() { return browser.element(".search-flight [name='clear Arrival airport']"); }

    // get selectAirport() { return browser.element("//div[contains(@class,'search-flight')]//p[text()='__replace__']"); }

    get todayMonthDate() { return browser.element(".search-flight__datepicker .ek-datepicker__today"); }

    get fixedDepartingDate() { return browser.element(".ek-datepicker__day--start"); }


    // get departureDate() {
    //     return browser.element(".search-flight__datepicker [data-month='__month__'] [data-date='__date__']")
    // }

    // get departureDate() {return browser.element()}
    //
    // get oneway() {return browser.element()}
    //
    // get returnDate() { return browser.element() }


    get submit() { return browser.element(".search-flight [type='submit']"); }

    open() {
        super.open('https://www.emirates.com/ae/english/');
        // browser.pause(2000);
        if (this.departureAirport.isVisible()) {
            browser.pause(2000);
        }
    }

    departure(airport) {
        this.clearDepartureAirport.click();
        // browser.pause(2000);
        // this.departureAirport.isEnabled();
        this.departureAirport.isVisible();
        this.departureAirport.setValue(airport);
        const xpathAirport = "//div[contains(@class,'search-flight')]//p[text()='__replace__']";
        const newValue = utilMethods.updateXpath(xpathAirport, airport, '__replace__');
        browser.isEnabled(newValue);
        browser.isVisible(newValue);
        browser.click(newValue);
    }

    arrival(airport) {

        // this.clearArrivalAirport.click();
        // browser.pause(8000);
        this.arrivalAirport.isVisible();
        this.arrivalAirport.setValue(airport);
        browser.pause(2000);
        const xpathAirport = "//div[contains(@class,'search-flight')]//p[text()='__replace__']";
        const newValue = utilMethods.updateXpath(xpathAirport, airport, '__replace__');
        browser.isEnabled(newValue);
        browser.isVisible(newValue);
        browser.click(newValue);

        // browser.pause(2000);
    }


    month() { return browser.getAttribute(".search-flight__datepicker .ek-datepicker__today", 'data-month') }

    day() { return browser.getAttribute(".search-flight__datepicker .ek-datepicker__today", 'data-date') }


    departing() {
        // browser.pause(2000);
        const xpath_departing_date = ".search-flight__datepicker [data-month='__month__'] [data-date='__date__']";

        const newDay = parseInt(this.day()) + 7;

        if (newDay > 31) {
            const month = parseInt(this.month()) + 1;
            const day = newDay - 31;
            const xpathMonthUpdate = utilMethods.updateXpath(xpath_departing_date, month, '__month__');
            const xpathDayUpdate = utilMethods.updateXpath(xpathMonthUpdate, day, '__date__');
            browser.click(xpathDayUpdate);
        } else {
            const xpathMonthUpdate = utilMethods.updateXpath(xpath_departing_date, parseInt(this.month()), '__month__');
            const xpathDayUpdate = utilMethods.updateXpath(xpathMonthUpdate, newDay, '__date__');
            browser.click(xpathDayUpdate);
        }
    }


    returning() {
        // browser.pause(2000);
        const xpath_departing_date = ".search-flight__datepicker [data-month='__month__'] [data-date='__date__']";
        const month = parseInt(browser.getAttribute(".ek-datepicker__day--start", 'data-month'));
        const day = parseInt(browser.getAttribute(".ek-datepicker__day--start", 'data-date'));

        const newDay = day + 7;

        if (newDay > 31) {
            const month1 = month + 1;
            const day1 = newDay - 31;
            const xpathMonthUpdate = utilMethods.updateXpath(xpath_departing_date, month1, '__month__');
            const xpathDayUpdate = utilMethods.updateXpath(xpathMonthUpdate, day1, '__date__');
            browser.click(xpathDayUpdate);
        } else {
            const xpathMonthUpdate = utilMethods.updateXpath(xpath_departing_date, month, '__month__');
            const xpathDayUpdate = utilMethods.updateXpath(xpathMonthUpdate, day, '__date__');
            browser.click(xpathDayUpdate);
        }
    }


    searchFlight(){
        this.submit.isVisible();
        this.submit.click();
    }




}

export default new DashboardPage();
