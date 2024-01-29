describe('sample1',()=>{
    it('testcase1',()=>{
        cy.visit("https://parabank.parasoft.com/parabank/services.htm")
        //cy.get('#headerPanel > ul.leftmenu > li:nth-child(6) > a').click();
        cy.get('#loginPanel > form > div:nth-child(2) > input').type('username_5')
        cy.get('#loginPanel > form > div:nth-child(4) > input').type('746587964')
        cy.get("#loginPanel > form > div:nth-child(5) > input").click();
        cy.get('#headerPanel > ul.leftmenu > li:nth-child(6) > a').click();
        cy.get('#rightPanel > table > tbody > tr > td:nth-child(1) > form > table > tbody > tr > td:nth-child(1) > button').click();
        cy.wait(10000);
        cy.get('#accessMode1').check();
        cy.wait(1000);
        cy.get('#accessMode3').check();
        cy.wait(1000);
        cy.get('#accessMode2').check();
        cy.wait(1000);
        cy.get('#loanProvider').select('Local');
        cy.wait(1000);
        cy.get('#loanProvider').select('Web Service');
        cy.wait(1000);
        cy.get('#loanProvider').select('JMS');
        cy.wait(1000);
        cy.get('#loanProcessor').select('Down Payment');
        cy.wait(1000);
        cy.get('#loanProcessor').select('Available Funds');
        cy.wait(1000);
        cy.get('#loanProcessor').select('Combined');
        cy.wait(1000);
        cy.get('#loanProcessorThreshold').clear().type('30');
        cy.wait(1000);
        cy.get('#loanProcessorThreshold').clear().type('40');
        cy.wait(1000);
        cy.get('#loanProcessorThreshold').clear().type('50');
        cy.wait(1000);
        cy.get('#adminForm > input').click();
        cy.root()
    })
})