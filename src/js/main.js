var month = new Array();

month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var d = new Date();
document.write("org month: " + d.getMonth() + '       ');
var n = month[d.getMonth() + 2];
// document.write("current: " + n );

d.getMonth() > 9 ? d.getMonth() = 0 : document.write("   current: " + n);