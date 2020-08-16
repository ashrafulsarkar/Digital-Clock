/* 
Author: Ashraful Sarkar
Description: Digital Clock
*/

// Digital Clock
setInterval(
    function digitalClock() {
        var dstDate = new Date();
        var dstSec = dstDate.getSeconds();
        var dstMin = dstDate.getMinutes();
        var dstHour = dstDate.getHours();

        var secDst = document.querySelector('#dst-sc').innerText = dstSec;
        var minDst = document.querySelector('#dst-mi').innerText = dstMin;
        var localHour = (dstHour > 12) ? document.querySelector('#dst-hr').innerText = dstHour - 12 : document.querySelector('#dst-hr').innerText = dstHour;
        var localTime = (dstHour > 12) ? document.querySelector('#am-pm').innerText = "PM" : document.querySelector('#am-pm').innerText = "AM";
    }, 1000);