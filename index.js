function takeANumber(currentLine, newPerson){
let place = currentLine.push(newPerson)
return (`Welcome, ${newPerson}. You are number ${place} in line.`)
}
console.log(takeANumber(["Ben", "Jake", "Mike"], ["Jenny"]))


function nowServing(katzDeliLine){
	let firstPerson = katzDeliLine[0]
	katzDeliLine.shift()
	if (katzDeliLine.length<1){
		return "There is nobody waiting to be served!"
	}
	else {
		return `Currently serving ${firstPerson}.`
	}
}
console.log(nowServing([]))

function currentLine(line){
	array = []
	for (let i = 0; i<line.length; i++){
	let number = i + 1
	let updateLine = (` ${number}. ${line[i]}`)
	array.push(updateLine)
	}
	return (`The line is currently:${array.toString()}`)
}