function takeANumber(currLine, newName){
  currLine = currLine.length+1
  return "Welcome, " + newName + ". You are number " + currLine + "in line."
}

function nowServing(currLine){
  let newLine = currLine - 1
  if (currLine===0){
    return "There is nobody waiting to be served"
  }
  do {
    currLine = currLine -1
  }
  while(currLine>0)

  return currLine       // first person in line 
  return newLine            // new line number after cut
}

function currentLine(currLine){
  let strLine = katzDeliLine.toString()
  return "The line is currently:"+ katzDeliLine  + newName + ","  
  
}