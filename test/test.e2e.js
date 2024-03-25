describe(`$$ command issue`, function() {
    
    let paragraphs1, paragraphs2;
    
    beforeEach(`Open page`, async function() {
        await browser.url('http://127.0.0.1:5500/html/page.html');
    });
    
    context(`Paragraphs exist in DOM`, async function() {
        
        it(`Case 1 (Synchronous assignment)`, async function() {
            
            paragraphs1 = $$('.div-holder-1 .paragraph-class');
            await expect(paragraphs1[0]).toBeDisplayed();
        })
        
        it(`Case 2 (Asynchronous assignment)`, async function() {
            
            paragraphs1 = await $$('.div-holder-1 .paragraph-class');
            await expect(paragraphs1[0]).toBeDisplayed();
        })
    })
    
    context(`Paragraphs exist in DOM`, async function() {
        
        it(`Case 1 (Synchronous assignment)`, async function() {
            
            // This doesn't work in v8.35.0
            paragraphs2 = $$('.div-holder-2 .paragraph-class');
            await expect(paragraphs2[0]).not.toBeDisplayed();
        })
        
        it(`Case 2 (Asynchronous assignment)`, async function() {
            
            paragraphs2 = await $$('.div-holder-2 .paragraph-class');
            await expect(paragraphs2[0]).not.toBeDisplayed();
        })
    })
})
