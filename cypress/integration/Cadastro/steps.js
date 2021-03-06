/// <reference types= "cypress"/>


let Chance = require('chance');
let chance = new Chance();



When(/^informar meus dados$/, () => {
    cy.get('input[placeholder= "First Name"]').type(chance.first());
        cy.get('input[ng-model^=Last]').type(chance.last());
        cy.get('input[ng-model^=Email]').type(chance.email());
        cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted: false }));
        cy.get('input[value=FeMale]').check();
        cy.get('input[type=checkbox]').check('Cricket');
        cy.get('input[type=checkbox]').check('Hockey');

        //select -> select & select2 (combos)
        cy.get('select#Skills').select('Javascript')
        cy.get('select#countries').select('Argentina')
        cy.get('select#country').select('Australia', ({ force: true }));
        cy.get('select#yearbox').select('1996');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('24');
        cy.get('input#firstpassword').type('Oli@120699');
        cy.get('input#secondpassword').type('Oli@120699');

        cy.get('input#imagesrc').attachFile('upload.png');   

	
});

And(/^salvar$/, () => {
    cy.get('button#submitbtn').click();
	
});

Then(/^devo ser cadastrado com sucesso$/, () => {
    cy.wait('@postNewtable').then((resNewtable) => {
        // com o intercept
        expect(resNewtable.response.statusCode).to.eq(200)
      })
  
      cy.wait('@postUsertable').then((resUsertable) => {
        // com o intercept
        expect(resUsertable.response.statusCode).to.eq(200)
      })
  
      cy.wait('@getNewtable').then((resNewtable) => {
        // com o intercept
        expect(resNewtable.response.statusCode).to.eq(200)
      })

      cy.url().should('contain', 'WebTable')
	
});

