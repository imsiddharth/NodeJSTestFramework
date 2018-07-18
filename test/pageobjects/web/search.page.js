import Page from "./page";



class SearchPage extends Page {

    sortDepartureFlightPrice(){

    }

    sortReturnFlighPrice(){
        // browser.pause(4000);
        browser.waitForEnabled(".inbound-list [data-value='price']");
        browser.click(".inbound-list [data-value='price']");
        // browser.pause(10000);
    }

}

export default new SearchPage();