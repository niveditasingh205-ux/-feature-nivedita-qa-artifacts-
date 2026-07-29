describe('Klodr Platform - Automated Smoke Suite', () => {
const loginEmail = 'klodr.2026+dev-salon-owner@gmail.com';
const loginPassword = 'Testtenant@1';


// Prevent uncaught application exceptions from breaking test runs
Cypress.on('uncaught:exception', () => false);


it('should complete smoke flow: Login -> Dashboard -> Open Salon -> Logout', () => {
// -------------------------------------------------------------------------
// STEP 1: LOG IN
// -------------------------------------------------------------------------
cy.visit('https://dev-one.klodr.com/login');


// Fill login credentials
cy.get('input[type="email"], input[name="email"]', { timeout: 10000 })
  .should('be.visible')
  .clear()
  .type(loginEmail);

cy.get('input[type="password"]', { timeout: 10000 })
  .should('be.visible')
  .clear()
  .type(loginPassword);

cy.get('button[type="submit"]').click();

// Confirm login redirection away from /login page
cy.url({ timeout: 15000 }).should('not.include', '/login');

// -------------------------------------------------------------------------
// STEP 2: DASHBOARD LOAD
// -------------------------------------------------------------------------
cy.get('header', { timeout: 10000 }).should('be.visible');
cy.contains('Welcome back', { timeout: 10000 }).should('be.visible');

// -------------------------------------------------------------------------
// STEP 3: OPEN SALON TAB
// -------------------------------------------------------------------------
cy.contains('h2', 'Salon', { timeout: 10000 })
  .should('be.visible')
  .click();

// Assert URL transition into the Salon module route
cy.url({ timeout: 10000 }).should('include', '/salon');

// -------------------------------------------------------------------------

// STEP 4: LOG OUT
// -------------------------------------------------------------------------
// 1. Target specifically the LAST popup button in the right header section (.last())
cy.get('header .ml-auto button[aria-haspopup="menu"]', { timeout: 10000 })
.last()
.click({ force: true });


// 2. Click 'Log out' from the dropdown menu
cy.contains('[role="menuitem"]', 'Log out', { timeout: 10000 })
  .should('exist')
  .click({ force: true });

// 3. Verify session terminated and user returned to login screen
cy.url({ timeout: 10000 }).should('include', '/login');
