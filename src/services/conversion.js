export function displayTime(time){
    if (time === 0 || ""){
        return ''
    }
    if (time > 0 && time < 10) {
        return "0" + time.toString()
    }  else {
        console.log("time.toString()")
        console.log(time)
        return time.toString()
    }
    // if (time === 0 || '') return ''
    // return time > 0 && time < 10 ? "0" + time.toString() : time.toString()
}