function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!'
} else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks."
} else if (distance > 2000 && distance < 2501){
    return 'I will gladly take your thirty bucks.'
} else if (distance > 2500) {
    return 'No can do.'
}


}
function ternaryCheckCity(place){
  if (place === 'NYC'){
    return "Ok, sounds good."
  } else if (place === 'Pittsburgh'){
    return 'No go.'
  }
}

function switchOnCharmFromTip(money){
  if (money === "generous"){
    return 'Thank you so much.'
  } if (money === 'not as generous'){
    return 'Thank you.'
}   else {
      return 'Bye.' 
    }
}