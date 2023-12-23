/**
 * This file contains Cypress tests for the Riparian Frontpage.
 */



describe('Riparian Frontpage', () => {
  beforeEach(() => {
    cy.visit('https://riparian.com')
  })

  it('Successfully loads', () => {
    cy.url().should('include', 'riparian.com')
    cy.get("title").contains("Software Services | Consulting | Outsourcing | Riparian");
  })

  it('Has a navigation bar', () => {
    cy.get('nav').should('exist')
  })

  it('Has a footer', () => {
    cy.get('.copyright').should('exist')
  })

  it('Has a logo', () => {
    cy.get('.navbar-logo').should('exist')
  })

  it('Challenge Expected', () => {
    cy.get('#expected').should('exist')
  })

  it('Challenge Inevitable', () => {
    cy.get('#inevitable').should('exist')
  })

  it('Challenge Accepted', () => {
    cy.get('#accepted').should('exist')
  })

  it('About', () => {
    cy.get('#about').should('exist')
  })

  context('Navbar Test', () => {
    
    it('Tests Solutions dropdown links', () => {
      cy.get('.dropdown-toggle').click({force: true})
      cy.get('.dropdown-menu').should('exist')
      cy.get('.dropdown-menu').find('a').contains('Helix').click({force: true})
      cy.location('pathname').should('equal', '/helix')
      cy.get('.dropdown-menu').find('a').contains('Ion').click({force: true})
      cy.location('pathname').should('equal', '/ion')
      cy.get('.dropdown-menu').find('a').contains('Consulting').click({force: true})
      cy.location('pathname').should('equal', '/consulting')
      cy.get('.dropdown-menu').find('a').contains('Outsourcing').click({force: true})
      cy.location('pathname').should('equal', '/outsourcing')
    });

    it('Tests remaining navbar links', () => {
      cy.get('#navbar').should('exist');
      cy.get('#navbar').find('a').contains('Leadership').click({force: true})
      cy.location('pathname').should('equal', '/leadership')
      cy.get('#navbar').find('a').contains('Resources').click({force: true})
      cy.location('pathname').should('equal', '/resources')
      cy.get('#navbar').find('a').contains('Contact').click({force: true})
      cy.location('pathname').should('equal', '/contact')
      cy.get('#navbar').find('a').contains('Two Labs Partnership').should('have.attr', 'href', '/riparian-acquired-by-two-labs')
    });
  });

  context('Button presence and link checks', () => {

    it('Has a Software button that points to the correct page', () => {
      cy.get('#about')
      .find('a').contains('Software').click()
      cy.location('pathname').should('equal', '/helix')
    });
  
    it('Has a Consulting button that points to the correct page', () => {
      cy.get('#about')
      .find('a').contains('Consulting').click()
      cy.location('pathname').should('equal', '/consulting')
    });
  
    it('Has an Outsourcing button that points to the correct page', () => {
      cy.get('#about')
      .find('a').contains('Outsourcing').click()
      cy.location('pathname').should('equal', '/outsourcing')
    });
  });
});