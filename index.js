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
     else if(secondAnswer === 'ignore'){
        let thirdAnswer = window.prompt('You decide to walk around the figure and ignore it. The short hallway then turns long and the ceiling lights become red. You turn around and see the figure start chasing you. You start running and running. After a minute the hallway seems endless, seeming to never stop. You finally come across two doors, one green and one blue. Which one will you open?')
     
         if(thirdAnswer === 'blue door'){
            let fourthAnswer = window.prompt('You choose to go through the blue door. After going through the blue door, you trip and fall only to realize you have escaped the figure and end up in a party room with yellow walls and balloons. As you get up, a friendly looking figure approaches and asks to be your friend. Do you accept or keep walking?')
        
         }
         else if(thirdAnswer === 'green door'){
            let fourthAnswer = window.alert('You chose to go through the green door. As you trip and fall over, you realize you cannot see. The room is completely pitch black. Light does not shine in this darkness, so you starve as you cry in despair in the blackness. DARKNESS ENDING!')
         }

        }
        







} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You decide to head right. As 
    you're walking down a hallway, you approach an office and see 
    a note on top of a desk. You open the note and a key falls out. 
    The note reads Level 0, Find The Exit.You turn around and two red 
    doors stand in front of you, unattached to walls. Which door will you open using the key?`)

    if(secondAnswer === 'left door'){
        let thirdAnswer = window.alert('You decide to open the left door and go through it. You start falling endlessly, with no chance of it ever stopping. You fall indefinitely until the end of days. BOTTOMLESS ENDING!')
    }
    else if(secondAnswer === 'right door'){
        let thirdAnswer = window.prompt('You choose the right door and go through it. You feel dizzy and lightheaded...so you faint. You wake up in a strange parking lot, realizing youre in Level 1. Will you explore the place or stay where you are?')
    }
    



}
