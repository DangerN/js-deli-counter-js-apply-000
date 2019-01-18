var katzDeliLine = [];
 
function takeANumber(katzDeliLine,name)
{
  var output = "";
  var linePosition = katzDeliLine.length + 1;
  
  katzDeliLine[linePosition - 1] = name;
  
  output = "Welcome, " + name + ". You are number " + linePosition + " in line.";
  
  return output;
}

function nowServing(katzDeliLine)
{
  
}

function currentLine(katzDeliLine)
{
  var position = 1;
  
}
