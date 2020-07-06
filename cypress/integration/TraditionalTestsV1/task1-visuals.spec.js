/// <reference types="cypress" />
import Page from '../page_objects/page'

describe('Task 1', () => {
    context('1200x700 desktop', () => {
        beforeEach(() => {
            cy.viewport(1200, 700);
        });
        
        it('should load a page', () => {
            const page = new Page();
            page.navigateV1();
        });
    
        it('should find a navbar categories', () => {
            const page = new Page();
            page.getNavbarCategories().should('be.visible');
        });
    
        it('should find a searchbar', () => {
            const page = new Page();
            page.getSearchbar().should('be.visible');
        });
    
        it('should check if mobile search button is hiddden', () => {
            const page = new Page();
            page.getMobileSearchButton().should('be.hidden');
        });
    
        it('should find a wishlist button', () => {
            const page = new Page();
            page.getWishlistButton().should('be.visible');
        });
    
        it('should find a number of items in cart', () => {
            const page = new Page();
            page.getNumberOfItemsInCart().should('be.visible');
        });
    
        it('should find a filters list', () => {
            const page = new Page();
            page.getFiltersList().should('be.visible');
        });
    
        it('should find a grid view button', () => {
            const page = new Page();
            page.getGridViewButton().should('be.visible');
        });
    
        it('should find a list view button', () => {
            const page = new Page();
            page.getListViewButton().should('be.visible');
        });
    
        it('should check if open filters button is hidden', () => {
            const page = new Page();
            page.getOpenFiltersButton().should('be.hidden');
        });
    
        it('should check if buttons under products are hidden', () => {
            const page = new Page();
            page.getButtonsUnderProducts().should('be.hidden');
        });
    });
    
    context('768x700 tablet', () => {
        beforeEach(() => {
            cy.viewport(768, 700);
        });
        
        it('should load a page', () => {
            const page = new Page();
            page.navigateV1();
        });
    
        it('should check if navbar categories are hidden', () => {
            const page = new Page();
            page.getNavbarCategories().should('be.hidden');
        });
    
        it('should find a searchbar', () => {
            const page = new Page();
            page.getSearchbar().should('be.visible');
        });
    
        it('should check if mobile search button is hiddden', () => {
            const page = new Page();
            page.getMobileSearchButton().should('be.hidden');
        });
    
        it('should check if wishlist button is hidden', () => {
            const page = new Page();
            page.getWishlistButton().should('be.hidden');
        });
    
        it('should find a number of items in cart', () => {
            const page = new Page();
            page.getNumberOfItemsInCart().should('be.visible');
        });
    
        it('should find a filters list, open and then close it', () => {
            const page = new Page();
            page.getFiltersListTabletMobile().should('be.visible');
            page.closeFiltersListTabletMobile().should('be.hidden');
        });
    
        it('should check if grid view button is hidden', () => {
            const page = new Page();
            page.getGridViewButton().should('be.hidden');
        });
    
        it('should check if list view button is hidden', () => {
            const page = new Page();
            page.getListViewButton().should('be.hidden');
        });
    
        it('should check if open filters button is visible', () => {
            const page = new Page();
            page.getOpenFiltersButton().should('be.visible');
        });
    
        it('should check if buttons under products are visible', () => {
            const page = new Page();
            page.getButtonsUnderProducts().should('be.visible');
        });
    });

    context('500x700 mobile', () => {
        beforeEach(() => {
            cy.viewport(500, 700);
        });
        
        it('should load a page', () => {
            const page = new Page();
            page.navigateV1();
        });
    
        it('should check if navbar categories are hidden', () => {
            const page = new Page();
            page.getNavbarCategories().should('be.hidden');
        });
    
        it('should check if searchbar is hidden', () => {
            const page = new Page();
            page.getSearchbar().should('be.hidden');
        });
    
        it('should find mobile search button', () => {
            const page = new Page();
            page.getMobileSearchButton().should('be.visible');
        });

        it('should click the mobile search button and check if search component is visible' , () => {
            const page = new Page();
            page.getMobileSearchButton().click();
            page.getMobileSearchbar().should('be.visible');
            page.getMobileSearchQueryButton().should('be.visible');
        });
    
        it('should check if wishlist button is hidden', () => {
            const page = new Page();
            page.getWishlistButton().should('be.hidden');
        });
    
        it('should check if number of items in cart is hidden', () => {
            const page = new Page();
            page.getNumberOfItemsInCart().should('be.hidden');
        });
    
        it('should find a filters list, open and then close it', () => {
            const page = new Page();
            page.getFiltersListTabletMobile().should('be.visible');
            page.closeFiltersListTabletMobile().should('be.hidden');
        });
    
        it('should check if grid view button is hidden', () => {
            const page = new Page();
            page.getGridViewButton().should('be.hidden');
        });
    
        it('should check if list view button is hidden', () => {
            const page = new Page();
            page.getListViewButton().should('be.hidden');
        });
    
        it('should check if open filters button is visible', () => {
            const page = new Page();
            page.getOpenFiltersButton().should('be.visible');
        });
    
        it('should check if buttons under products are visible', () => {
            const page = new Page();
            page.getButtonsUnderProducts().should('be.visible');
        });

        it('should check if none of the footer accordions is expanded', () => {
            const page = new Page();
            page.getFooterAccordions().should('not.have.attr', 'aria-expanded');
        });
    });
});
