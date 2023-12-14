function shakeMagic8Ball(){
    const question = prompt(`ask a question`)
    if(question === null){
        document.getElementById("response-text").innerText = `PLEASE ASK A QUESTION!`
        document.getElementById("response-text").classList = `lead text-danger`
        document.getElementById("response-image").src = `#BADIMAGE`//add image//
    }
    if(!question.trim()) {
        alert(`Please enter a valid question!`)
        return      
    }
}
