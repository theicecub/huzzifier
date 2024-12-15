function uzzifier(){
    let answer = prompt("Word uzz-ifier, enter a word you want to uzz-ify")
    if(answer.length <= 3){
        let res1 = answer.slice(0, -1)
        alert(res1 + "uzz")
    }
    else{
    let res = answer.slice(0, -2)
    alert(res + "uzz")
    }
}
uzzifier()