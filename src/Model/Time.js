export default class Time{
    constructor(hour = -1, minute = -1, second = -1){
        if(hour == -1 && minute == -1 && second == -1){
            const currentTime = new Date()

            this.hour = currentTime.getHours()
            this.minute = currentTime.getMinutes()
            this.second = currentTime.getSeconds()

            return
        }

        this.hour = hour
        this.minute = minute
        this.second = second
    }

    diffTime(targetTime){
        let diffSecond = targetTime.second - this.second
        if(diffSecond < 0){
            diffSecond += 60
            targetTime.minute--
        }

        let diffMinute = targetTime.minute - this.minute
        if(diffMinute < 0){
            diffMinute += 60
            targetTime.hour--
        }

        let diffhour = targetTime.hour - this.hour
        if(diffhour < 0){
            diffhour += 24
        }

        // console.log(new Time(diffhour, diffMinute, diffSecond));

        return new Time(diffhour, diffMinute, diffSecond)
    }
}