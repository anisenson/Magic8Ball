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
    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch(randomNumber) {
          case 0:
            answer = 'Of Course!'
            image = "img/of-course.jpg"
            color = "text-secondary"
            break;
          case 1:
            answer = 'No!'
            image = "img/no.jpg"
            color = "text-danger"
            break;
          case 2:
            answer = 'Yes!'
            image = "img/yes.jpg"
            color = "text-success"
            break;
          case 3:
            answer = 'Maybe'
            image = "img/maybe.jpg"
            color = "text-info"
            break;
          case 4:
            answer = 'Try Again'
            image = "img/tryagain.jpg"
            color = "text-primary"
            break;
          case 5:
            answer = 'Ask Again Later'
            image = "img/askagain.jpg"
            color = "text-warning"
            break;
          case 6:
            answer = 'Signs Point To Yes'
            image = "img/yes2.jpg"
            color = "text-muted"
            break;
          case 7:
            answer = 'My Sources Say No'
            image = "img/mysourcessayno.jpg"
            color = "text-danger"
            break;
    }
    
    const responseText = document.getElementById(`response-text`)
    responseText.innerText = answer;
    responseText.classList =`display-4 ${color}`;
    document.getElementById('response-image').src = image;

}