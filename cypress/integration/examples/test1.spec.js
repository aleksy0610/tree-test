describe('Test', () => {

    it('Test', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="signup-completed"]')
        .contains('1327')
  
      cy.get('[data-testid="select-date"]')
      .find(':selected')
      cy.wait(2000);

      // Select Date(Sample) and wait 2 seconds
      cy.get('[data-testid="select-date"]')
      .select("0");
      cy.wait(2000);

      // Select Date(Last 30days) and wait 2 seconds
      cy.get('[data-testid="select-date"]')
      .select("1");
      cy.wait(2000);

      // Select Date(24 Hours) and wait 2 seconds
      cy.get('[data-testid="select-date"]')
        .select("2");
      cy.wait(2000);

      
      
  
      
      // Select Node1 and wait 2 seconds
      cy.get('[data-testid="select-node"]')
      .select("0");
      cy.wait(2000);

      // Select Node2 and wait 2 seconds
      cy.get('[data-testid="select-node"]')
      .select("1");
      cy.wait(2000);
      
    });
  });