/// <reference types="cypress" />
import Page from '../page_objects/page'
describe('Task 1', () => {
    const page = new Page()
    context('1200x700 desktop', () => {
        
        beforeEach(() => {
            cy.viewport(1200, 700);
        });
        
        it('should load a page', () => {
            page.navigateV1();
        });
    
        it('should find a navbar categories', () => {
            page.getNavbarCategories().should('be.visible');
        });
    
        it('should find a searchbar', () => {
            page.getSearchbar().should('be.visible');
        });
    
        it('should check if mobile search button is hiddden', () => {
            page.getMobileSearchButton().should('be.hidden');
        });
    
        it('should find a wishlist button', () => {
            page.getWishlistButton().should('be.visible');
        });
    
        it('should find a number of items in cart', () => {
            page.getNumberOfItemsInCart().should('be.visible');
        });
    
        it('should find a filters list', () => {
            page.getFiltersList().should('be.visible');
        });
    
        it('should find a grid view button', () => {
            page.getGridViewButton().should('be.visible');
        });
    
        it('should find a list view button', () => {
            page.getListViewButton().should('be.visible');
        });
    
        it('should check if open filters button is hidden', () => {
            page.getOpenFiltersButton().should('be.hidden');
        });
    
        it('should check if buttons under products are hidden', () => {
            page.getButtonsUnderProducts().should('be.hidden');
        });
    });
    
    context('768x700 tablet', () => {
        beforeEach(() => {
            cy.viewport(768, 700);
        });
        
        it('should load a page', () => {
            page.navigateV1();
        });
    
        it('should check if navbar categories are hidden', () => {
            page.getNavbarCategories().should('be.hidden');
        });
    
        it('should find a searchbar', () => {
            page.getSearchbar().should('be.visible');
        });
    
        it('should check if mobile search button is hiddden', () => {
            page.getMobileSearchButton().should('be.hidden');
        });
    
        it('should check if wishlist button is hidden', () => {
            page.getWishlistButton().should('be.hidden');
        });
    
        it('should find a number of items in cart', () => {
            page.getNumberOfItemsInCart().should('be.visible');
        });
    
        it('should find a filters list, open and then close it', () => {
            page.getFiltersListTabletMobile().should('be.visible');
            page.closeFiltersListTabletMobile().should('be.hidden');
        });
    
        it('should check if grid view button is hidden', () => {
            page.getGridViewButton().should('be.hidden');
        });
    
        it('should check if list view button is hidden', () => {
            page.getListViewButton().should('be.hidden');
        });
    
        it('should check if open filters button is visible', () => {
            page.getOpenFiltersButton().should('be.visible');
        });
    
        it('should check if buttons under products are visible', () => {
            page.getButtonsUnderProducts().should('be.visible');
        });
    });

    context('500x700 mobile', () => {
        beforeEach(() => {
            cy.viewport(500, 700);
        });
        
        it('should load a page', () => {
            page.navigateV1();
        });
    
        it('should check if navbar categories are hidden', () => {
            page.getNavbarCategories().should('be.hidden');
        });
    
        it('should check if searchbar is hidden', () => {
            page.getSearchbar().should('be.hidden');
        });
    
        it('should find mobile search button', () => {
            page.getMobileSearchButton().should('be.visible');
        });

        it('should click the mobile search button and check if search component is visible' , () => {
            page.getMobileSearchButton().click();
            page.getMobileSearchbar().should('be.visible');
            page.getMobileSearchQueryButton().should('be.visible');
        });
    
        it('should check if wishlist button is hidden', () => {
            page.getWishlistButton().should('be.hidden');
        });
    
        it('should check if number of items in cart is hidden', () => {
            page.getNumberOfItemsInCart().should('be.hidden');
        });
    
        it('should find a filters list, open and then close it', () => {
            page.getFiltersListTabletMobile().should('be.visible');
            page.closeFiltersListTabletMobile().should('be.hidden');
        });
    
        it('should check if grid view button is hidden', () => {
            page.getGridViewButton().should('be.hidden');
        });
    
        it('should check if list view button is hidden', () => {
            page.getListViewButton().should('be.hidden');
        });
    
        it('should check if open filters button is visible', () => {
            page.getOpenFiltersButton().should('be.visible');
        });
    
        it('should check if buttons under products are visible', () => {
            page.getButtonsUnderProducts().should('be.visible');
        });

        it('should check if none of the footer accordions is expanded', () => {
            page.getFooterAccordions().should('not.have.attr', 'aria-expanded');
        });
    });
});
