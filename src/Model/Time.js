export default class Time{
	constructor(hour = -1, minute = -1, second = -1){
		if(hour == -1 && minute == -1 && second == -1){
			const currentTime = new Date();

			this.hour = currentTime.getHours();
			this.minute = currentTime.getMinutes();
			this.second = currentTime.getSeconds();

			return;
		}

		this.hour = hour;
		this.minute = minute;
		this.second = second;
	}

	get allSecond(){
		return this.hour * 60 * 60 + this.minute * 60 + this.second;
	}

	get diffTimeForNow(){
		return new Time().diffTime(this);
	}

	diffTime(targetTime){
		if(targetTime.second < this.second){
			targetTime.second += 60;
			targetTime.minute--;
		}
		const diffSecond = targetTime.second - this.second;

		if(targetTime.minute < this.minute){
			targetTime.minute += 60;
			targetTime.hour--;
		}
		const diffMinute = targetTime.minute - this.minute;

        
		if(targetTime.hour < this.hour)
			targetTime.hour += 24;
		const diffhour = targetTime.hour - this.hour;


		return new Time(diffhour, diffMinute, diffSecond);
	}
}