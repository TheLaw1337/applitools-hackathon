class Page {
    navigateV1() {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html');
    };

    navigateV2() {
        cy.visit('https://demo.applitools.com/gridHackathonV2.html');
    };

    filterBlackShoes() {
        cy.get('#ti-filter').click();
        cy.get('#colors__Black').check();
        cy.get('#filterBtn').click();
    };

    clickFirstBlackShoe() {
        cy.get('#product_grid').find('a').first().click();
    };
    
    getNavbarCategories() {
        return cy.get('.main-menu');
    };

    getSearchbar() {
        return cy.get('.custom-search-input');
    };

    getMobileSearchbar() {
        return cy.get('.search_mob_wp .form-control');
    };

    getMobileSearchButton() {
        return cy.get('.btn_search_mob');
    };

    getMobileSearchQueryButton() {
        return cy.get('.search_mob_wp .btn_1');
    }

    getWishlistButton() {
        return cy.get('.wishlist');
    };

    getNumberOfItemsInCart() {
        return cy.get('#STRONG____50');
    };

    getFiltersList() {
        return cy.get('.filter_col');
    };

    getFiltersListTabletMobile() {
        cy.get('.clearfix .open_filters').click();
        return cy.get('#filter_col');
    };

    closeFiltersListTabletMobile() {
        cy.get('.filter_col .ti-close').click();
        return cy.get('#filter_col');
    };

    getGridViewButton() {
        return cy.get('.ti-view-grid');
    };

    getListViewButton() {
        return cy.get('.ti-view-list');
    };
    
    getOpenFiltersButton() {
        return cy.get('.clearfix .open_filters');
    };

    getButtonsUnderProducts() {
        return cy.get('.grid_item #UL____222');
    };

    getFooterAccordions() {
        return cy.get('footer .row h3');
    };
};

export default Page;