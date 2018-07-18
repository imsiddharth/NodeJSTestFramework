import Page from "./page";


class Dashboard extends Page {
    
    get departure_ele() {return browser.element()}
    get arrival() { return browser.element()}
    get departingDate() { return browser.element()}
    get oneway() { return browser.element()}
    get returningDate() { return browser.element()}
    
    open()
    {
        
    }
    
}

export default new Dashboard();
