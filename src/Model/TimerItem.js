import Time from "./Time.js"

export default class TimerItem{
    constructor(className, startTime, endTime, classType){
        this.className = className
        this.startTime = startTime
        this.endTime = endTime
        this.classType = classType
    }

    get isCurrentTime(){
        const nowTime = new Time();
        
        const nowTimeAllSecond = nowTime.allSecond
        const StartTimeAllSecond = this.startTime.allSecond
        const EndTimeAllSecond = this.endTime.allSecond
        
        return StartTimeAllSecond <= nowTimeAllSecond && nowTimeAllSecond < EndTimeAllSecond
    }
}