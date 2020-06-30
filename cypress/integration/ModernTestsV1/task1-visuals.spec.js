/// <reference types="cypress" />
import Page from '../page_objects/page'

describe('Task 1', () => {
    beforeEach(() => {
        cy.viewport(800, 600);
        cy.eyesOpen({
          appName: 'Hackathon V1',
          testName: 'Task 1',
          browser: [
            {width: 1200, height: 700, name: 'chrome'},
            {width: 1200, height: 700, name: 'firefox'},
            {width: 1200, height: 700, name: 'edgechromium'},
            {width: 768, height: 700, name: 'chrome'},
            {width: 768, height: 700, name: 'firefox'},
            {width: 768, height: 700, name: 'edgechromium'},
            {deviceName: 'iPhone X', screenOrientation: 'portrait'},
          ]
        });
      });
    
    afterEach(() => {
        cy.eyesClose();
    });

    it('should load a page and take screenshot', () => {
        const page = new Page();

        page.navigateV1();
        cy.eyesCheckWindow('Cross-Device Elements Test');
    })
})