export function displayTime(time){
    if (time === 0 || '' || typeof time === 'undefined'){
        return ''
    }
    if (time > 0 && time < 10) {
        return "0" + time.toString()
    }  else {
        return String(time)
    }
    // if (time === 0 || '') return ''
    // return time > 0 && time < 10 ? "0" + time.toString() : time.toString()
}