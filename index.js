let firstAnswer  = window.prompt('Suddenly, you wake up and notice you have noclipped into the backrooms successfully. Straight ahead there are two paths that lead left and right, which do you take?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You decide to 
    head left. You start walking down a short hallway and the
     lights start flickering. Suddenly a shadow figure with a 
     bright white smile appears right in front of you. 
     Do you approach it or ignore it and walk around the figure?`)
     if(secondAnswer === 'approach'){
        let thirdAnswer = window.alert('You decide to approach the shadowy figure. He grabs you by the neck and snaps it. SHADOW FIGURE ENDING!')
     }

} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You decide to head right. As 
    you're walking down a hallway, you approach an office and see 
    a note on top of a desk. You open the note and a key falls out. 
    The note reads Level 0, Find The Exit.You turn around and two red 
    doors stand in front of you. Which door will you open using the key?`)

}
