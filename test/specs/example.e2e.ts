
describe('My Login application', () => {
    it('should login with valid credentials', () => {
        console.log("============================Test Execution Started===========================");
        $('#men-link').click();
        $('#wrap > div > div.span12.browsing-column.browsing-center-column.tablet-landscape-full-fluid-width > section > div.browsing-product-content > div > figure:nth-child(1)').click();
        console.log("============================Test Execution Stopped===========================");
        browser.pause(10000)
    });
});


