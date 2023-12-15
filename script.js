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
            answer = 'OF COURSE'
            image = "of-course.jpg"
            color = "text-#"
            break;
          case 1:
            answer = 'NO'
            image = "no.jpg"
            color = "text-#"
            break;
          case 2:
            answer = 'YES'
            image = "yes.jpg"
            color = "text-#"
            break;
          case 3:
            answer = 'MAYBE'
            image = "maybe.jpg"
            color = "text-#"
            break;
          case 4:
            answer = 'IDK TRY AGAIN'
            image = "idk.jpg"
            color = "text-#"
            break;
          case 5:
            answer = 'CANNOT PREDICT NOW'
            image = "cannotpredictnow.jpg"
            color = "text-#"
            break;
          case 6:
            answer = 'DO NOT COUNT ON IT'
            image = "donotcountonit.jpg"
            color = "text-#"
            break;
          case 7:
            answer = 'MY SOURCES SAY NO'
            image = "mysourcessayno.jpg"
            color = "text-#"
            break;
    }
    
    
    




}