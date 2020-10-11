export function displayTime(time){
    if (time === 0 || '') return ''
    return time > 0 && time < 10 ? "0" + time.toString() : time.toString()
}