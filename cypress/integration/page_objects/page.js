class Page {
    navigateV1() {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html');
    }
    navigateV2() {
        cy.visit('https://demo.applitools.com/gridHackathonV2.html');
    }
    filterBlackShoes() {
        cy.get('#ti-filter').click();
        cy.get('#colors__Black').check();
        cy.get('#filterBtn').click();
    }
}

export default Page;