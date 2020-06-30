class Page {
    navigateV1() {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html');
    }
    navigateV2() {
        cy.visit('https://demo.applitools.com/gridHackathonV2.html');
    }
}

export default Page;