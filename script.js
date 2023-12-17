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
            image = "img/of-course.jpg"
            color = "text-secondary"
            break;
          case 1:
            answer = 'no!'
            image = "img/no.jpg"
            color = "text-danger"
            break;
          case 2:
            answer = 'yes!'
            image = "img/yes.jpg"
            color = "text-success"
            break;
          case 3:
            answer = 'maybe'
            image = "img/maybe.jpg"
            color = "text-info"
            break;
          case 4:
            answer = 'try again'
            image = "img/tryagain.jpg"
            color = "text-primary"
            break;
          case 5:
            answer = 'ask again later'
            image = "img/askagain.jpg"
            color = "text-warning"
            break;
          case 6:
            answer = 'Signs point to yes'
            image = "img/yes2.jpg"
            color = "text-muted"
            break;
          case 7:
            answer = 'my sources say no'
            image = "img/mysourcessayno.jpg"
            color = "text-danger"
            break;
    }
    
    const responseText = document.getElementById(`response-text`)
    responseText.innerText = answer;
    responseText.classList =`display-4 ${color}`;
    document.getElementById('response-image').src = image;

}