describe("Sample Cypress Test", ()=>{
    beforeEach("Start Test",()=>{
        cy.visit("http://localhost:4200/");
    });
    it("First Test", ()=>{

        //Start visual Testing
        cy.eyesOpen({
            appName: 'Demo Angular',
            testName: 'First Test'
        });
        //to Take Screen Shot
        cy.eyesCheckWindow({
            tag: 'Main Page',
            target: 'window',
            fully: true
        })
    });
    afterEach("End Test",()=>{
        cy.eyesClose();
    })
});
