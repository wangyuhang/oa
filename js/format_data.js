var transFormWeekArr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
function transformDateToSeveralType(tm) {
	var today = new Date();
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);
	today.setMilliseconds(0);
	var oneday = 1000*60*60*24;
	var yestoday = new Date(today-oneday);
	var aweekago = new Date(today-6*oneday);
	var	otherDay = new Date(parseInt(tm) * 1000);
	
	if(otherDay >= today) {
		return otherDay.getHours()+':'+otherDay.getMinutes();
	}else if(otherDay < today && otherDay >= yestoday) {
		return '昨日';
	}else if(otherDay < yestoday && otherDay >= aweekago) {
		return transFormWeekArr[otherDay.getDay()];
	}else {
		return otherDay.getFullYear()+'/'+otherDay.getMonth()+'/'+otherDay.getDate();
	}	
} 

function transformDateToFullDate(tm) {
	return new Date(parseInt(tm) * 1000).toLocaleString().replace(/年|月/g, "/").replace(/日/g, " "); 
}
