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
            answer = 'of course!'
            image = "of-course.jpg"
            color = "text-secondary"
            break;
          case 1:
            answer = 'no!'
            image = "no.jpg"
            color = "text-danger"
            break;
          case 2:
            answer = 'yes!'
            image = "yes.jpg"
            color = "text-success"
            break;
          case 3:
            answer = 'maybe'
            image = "maybe.jpg"
            color = "text-info"
            break;
          case 4:
            answer = 'try again'
            image = "tryagain.jpg"
            color = "text-primary"
            break;
          case 5:
            answer = 'cannot predict now'
            image = "cannotpredictnow.jpg"
            color = "text-warning"
            break;
          case 6:
            answer = 'do not count on it'
            image = "donotcountonit.jpg"
            color = "text-muted"
            break;
          case 7:
            answer = 'my sources say no'
            image = "mysourcessayno.jpg"
            color = "text-danger"
            break;
    }
    
    const responseText = document.getElementById(`response-text`)
    responseText.innerText = answer;
    responseText.classList =`display-4 ${color}`;
    document.getElementById('response-image').src = image;

}