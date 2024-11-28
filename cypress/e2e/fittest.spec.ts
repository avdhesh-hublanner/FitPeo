describe('FitPeo Web Automation', () => {

  beforeEach(() => {
      // Step 1: Navigate to the FitPeo Homepage
      cy.visit('https://www.fitpeo.com');
      // Verifying we're on the correct page
      cy.url().should('include', 'fitpeo');  // Verifying we're on the correct page
});
  
    // Step 2: Navigate to the Revenue Calculator Page
    it('Navigate to the Revenue Calculator page', () => {
      // Go to Revenue calculator
      cy.xpath(`//*[text()="Revenue Calculator"]`).click();
      // Verify that we are on Revenue calculator page
      cy.url().should('include', '/revenue-calculator');
    });
  
    // Step 3: Scroll Down to the Slider Section
    it('Scroll to the slider section', () => {
       // Go to Revenue calculator
       cy.xpath(`//*[text()="Revenue Calculator"]`).click();
       // Verify that we are on Revenue calculator page
       cy.url().should('include', '/revenue-calculator');
       // Scroll Down to the Slider Section
      cy.xpath(`//input[@type='range']`).scrollIntoView(); 
      // verify the slider section is visible
      cy.xpath(`//input[@type='range']`).should('be.visible')
    });
  
    // Step 4: Adjust the Slider to a Value of 820
    it('Adjust the slider to 820', () => {
      // Go to Revenue calculator
      cy.xpath(`//*[text()="Revenue Calculator"]`).click();
      // Verify that we are on Revenue calculator page
      cy.url().should('include', '/revenue-calculator');
      // Scroll Down to the Slider Section
     cy.xpath(`//input[@type='range']`).scrollIntoView(); 

      cy.get(".MuiSlider-root").then(($slider) => {
        // Get slider's width
        const width = $slider.width(); 
        // Set slider's min value
        const minValue = 0; 
        // Set slider's max value
        const maxValue = 2000; 
        // Set slider's target value
        const targetValue = 820;

        // Calculate the percentage position based on the target value
        const percentage = (targetValue - minValue) / (maxValue - minValue)
        // Calculate the x offset
        const xOffset = width * percentage;

        // Click at the calculated position
        cy.wrap($slider).click(xOffset, 0 , { force: true })
        });
        });
  
    // Step 5: Update the Text Field to 560
    it('Update the text field to 560', () => {
      // Go to Revenue calculator
      cy.xpath(`//*[text()="Revenue Calculator"]`).click();
      // Verify that we are on Revenue calculator page
      cy.url().should('include', '/revenue-calculator');
      // Scroll Down to the Slider Section
     cy.xpath(`//input[@type='range']`).scrollIntoView(); 

      cy.get(".MuiSlider-root").then(($slider) => {
        // Get slider's width
        const width = $slider.width(); 
        // Set slider's min value
        const minValue = 0; 
        // Set slider's max value
        const maxValue = 2000; 
        // Set slider's target value
        const targetValue = 820;

        // Calculate the percentage position based on the target value
        const percentage = (targetValue - minValue) / (maxValue - minValue)
        // Calculate the x offset
        const xOffset = width * percentage;

        // Click at the calculated position
        cy.wrap($slider).click(xOffset, 0 , { force: true });
        });
        // Select the input field and type 560
        cy.xpath(`//*[@type='number']`).clear() .type('560');
    });
  
    // Step 6: Validate Slider Value (When Text Field is Updated)
    it('Validate that the slider reflects the value of the text field', () => {
      // Go to Revenue calculator
      cy.xpath(`//*[text()="Revenue Calculator"]`).click();
      // Verify that we are on Revenue calculator page
      cy.url().should('include', '/revenue-calculator');
      // Scroll Down to the Slider Section
     cy.xpath(`//input[@type='range']`).scrollIntoView(); 

      cy.get(".MuiSlider-root").then(($slider) => {
        // Get slider's width
        const width = $slider.width(); 
        // Set slider's min value
        const minValue = 0; 
        // Set slider's max value
        const maxValue = 2000; 
        // Set slider's target value
        const targetValue = 820;

        // Calculate the percentage position based on the target value
        const percentage = (targetValue - minValue) / (maxValue - minValue)
        // Calculate the x offset
        const xOffset = width * percentage;

        // Click at the calculated position
        cy.wrap($slider).click(xOffset, 0 , { force: true });
        });
        // Select the input field and type 560
        cy.xpath(`//*[@type='number']`).clear() .type('560');
        // Ensure slider value is 560 after updating the text field
        cy.get('input[type="range"]')
        .should('have.value', '560');
    });
  
    // Step 7: Select CPT Codes (CPT-99091, CPT-99453, CPT-99454, CPT-99474)
    it('Select the CPT codes', () => {
      // Go to Revenue calculator
      cy.xpath(`//*[text()="Revenue Calculator"]`).click();
      // Verify that we are on Revenue calculator page
      cy.url().should('include', '/revenue-calculator');
      // Scroll Down to the Slider Section
     cy.xpath(`//input[@type='range']`).scrollIntoView(); 

      cy.get(".MuiSlider-root").then(($slider) => {
        // Get slider's width
        const width = $slider.width(); 
        // Set slider's min value
        const minValue = 0; 
        // Set slider's max value
        const maxValue = 2000; 
        // Set slider's target value
        const targetValue = 820;
        // Calculate the percentage position based on the target value
        const percentage = (targetValue - minValue) / (maxValue - minValue)
        // Calculate the x offset
        const xOffset = width * percentage;
        // Click at the calculated position
        cy.wrap($slider).click(xOffset, 0 , { force: true });
        });
        // Select the input field and type 560
        cy.xpath(`//*[@type='number']`).clear() .type('560');
        // Ensure slider value is 560 after updating the text field
        cy.get('input[type="range"]')
        .should('have.value', '560');
        function getCptCheckbox(text: string) {
        return cy.xpath(`//p[text()='${text}']//parent::div//descendant::input`)
      }
      // Check the check of the required CPT
      getCptCheckbox("CPT-99091").check(); 
      getCptCheckbox("CPT-99453").check();
      getCptCheckbox("CPT-99454").check();
      getCptCheckbox("CPT-99474").check();
      
      // Ensure all checkboxes are checked
      getCptCheckbox("CPT-99091").should('be.checked');
      getCptCheckbox("CPT-99453").should('be.checked');
      getCptCheckbox("CPT-99454").should('be.checked');
      getCptCheckbox("CPT-99474").should('be.checked');
    });
  
    // Step 8: Validate Total Recurring Reimbursement
    it('Validate the total recurring reimbursement', () => {
      // Go to Revenue calculator
      cy.xpath(`//*[text()="Revenue Calculator"]`).click();
      // Verify that we are on Revenue calculator page
      cy.url().should('include', '/revenue-calculator');
      // Scroll Down to the Slider Section
     cy.xpath(`//input[@type='range']`).scrollIntoView(); 

      cy.get(".MuiSlider-root").then(($slider) => {
        // Get slider's width
        const width = $slider.width(); 
        // Set slider's min value
        const minValue = 0; 
        // Set slider's max value
        const maxValue = 2000; 
        // Set slider's target value
        const targetValue = 820;

        // Calculate the percentage position based on the target value
        const percentage = (targetValue - minValue) / (maxValue - minValue)
        // Calculate the x offset
        const xOffset = width * percentage;

        // Click at the calculated position
        cy.wrap($slider).click(xOffset, 0 , { force: true });
        });
        // Select the input field and type 560
        cy.xpath(`//*[@type='number']`).clear() .type('560');
        // Ensure slider value is 560 after updating the text field
        cy.get('input[type="range"]')
        .should('have.value', '560');
        function getCptCheckbox(text: string) {
        return cy.xpath(`//p[text()='${text}']//parent::div//descendant::input`)
      }
      // Check the check of the required CPT
      getCptCheckbox("CPT-99091").check(); 
      getCptCheckbox("CPT-99453").check();
      getCptCheckbox("CPT-99454").check();
      getCptCheckbox("CPT-99474").check();
      
      // Ensure all checkboxes are checked
      getCptCheckbox("CPT-99091").should('be.checked');
      getCptCheckbox("CPT-99453").should('be.checked');
      getCptCheckbox("CPT-99454").should('be.checked');
      getCptCheckbox("CPT-99474").should('be.checked');
      // Verify the total recurring reimbursement value
      cy.xpath(`//p[text()='Total Recurring Reimbursement for all Patients Per Month:']//descendant::p[text()='75600']`).should('exist'); 
    });
  
  });

  