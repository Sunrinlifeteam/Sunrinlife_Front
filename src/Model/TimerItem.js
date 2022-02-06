import Time from "./Time.js"

export default class TimerItem{
    constructor(className, startTime, endTime){
        this.className = className
        this.startTime = startTime
        this.endTime = endTime
    }

    get isCurrentTime(){
        const nowTime = new Time();
        
        const nowTimeAllSecond = nowTime.hour * 60 * 60 
            + nowTime.minute * 60 + nowTime.second
        
        const StartTimeAllSecond = this.startTime.hour * 60 * 60 
            + this.startTime.minute * 60 + this.startTime.second

        const EndTimeAllSecond = this.endTime.hour * 60 * 60 
            + this.endTime.minute * 60 + this.endTime.second
        
        // alert(`${StartTimeAllSecond} ${nowTimeAllSecond} ${EndTimeAllSecond}`);

        return StartTimeAllSecond <= nowTimeAllSecond && nowTimeAllSecond < EndTimeAllSecond
    }
}