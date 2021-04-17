describe('Form Validation Test', function () {
  it('validity', function () {
    cy.visit('index.html');

    cy.get('[name=userForm]').then(
      ($form) => expect($form[0].checkValidity()).to.be.false
    );
    cy.get('[name=userForm] : invalid').should('have.length', 3);
    cy.get('#nameInput:invalid')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Name is required.');

    cy.get('#nameInput').type('Jane Doe');
    cy.get('#email').type('janemail.com');
    cy.get('#email:invalid')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Must provide a valid email address.');

    cy.get('#email').clear().type('jane@mail.com');
    cy.get('[name=current-password]').type('pass');
    cy.get('[name=current-password]:invalid')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Passwords must contain at least 6 characters.');

    cy.get('[name=current-password]').clear().type('password');
    cy.get('[type=checkbox]').check().should('be.checked');
    cy.get('#userForm input[type=submit]').click();

    cy.get('#userForm').then(
      ($form) => expect($form[0].checkValidity()).to.be.true
    );
  });
});

describe('Visit Form Site Test', function () {
  //Arrange
  it('Visits a new site', function () {
    //Act
    cy.visit('index.html');
  });
});

describe('Name Input Test', function () {
  it('Get the Name input and type a name in it', function () {
    cy.visit('index.html');
    cy.get('[name=nameInput]')
      .type('Betty Doe')
      .should('have.value', 'Betty Doe');
  });
});

describe('Email Input Test', function () {
  it('Get the email input and type an email address into it', function () {
    cy.visit('index.html');
    cy.get('[name=email]')
      .type('betty@mail.com')
      .should('have.value', 'betty@mail.com');
  });
});

describe('Password Input Test', function () {
  it('Get the password input and type a password into it', function () {
    cy.visit('index.html');
    cy.get('[name=current-password]')
      .type('password')
      .should('have.value', 'password');
  });
});

describe('Terms Checkbox Input Test', function () {
  it('Get the terms checkbox input and check it', function () {
    cy.visit('index.html');
    cy.get('[type=checkbox]').check().should('be.checked');
  });
});

describe('Submit Form Test', function () {
  it('Get the form and submit it.', function () {
    cy.visit('index.html');
  });
});
