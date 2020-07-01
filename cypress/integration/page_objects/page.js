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
    clickFirstBlackShoe() {
        cy.get('#product_grid').find('a').first().click();
    }
}

export default Page;