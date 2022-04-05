import Time from "./../Model/Time.js"
import TimerItem from "./../Model/TimerItem.js"

const timeData1 = [
    new TimerItem(
        "등교전",
        new Time(0, 0, 0),
        new Time(8, 29, 59),
        "not study"
    ),
    new TimerItem(
        "조회",
        new Time(8, 30, 0),
        new Time(8, 39, 59),
        "not study"
    ),
    new TimerItem(
        "1교시",
        new Time(8, 40, 0),
        new Time(9, 19, 59),
        "study"
    ),
    new TimerItem(
        "1교시 쉬는시간",
        new Time(9, 20, 0),
        new Time(9, 29, 59),
        "not study"
    ),
    new TimerItem(
        "2교시",
        new Time(9, 30, 0),
        new Time(10, 9, 59),
        "study"
    ),
    new TimerItem(
        "2교시 쉬는시간",
        new Time(10, 10, 0),
        new Time(10, 19, 59),
        "not study"
    ),
    new TimerItem(
        "3교시",
        new Time(10, 20, 0),
        new Time(10, 59, 59),
        "study"
    ),
    new TimerItem(
        "점심시간",
        new Time(11, 0, 0),
        new Time(11, 59, 59),
        "launch"
    ),
    new TimerItem(
        "4교시",
        new Time(12, 0, 0),
        new Time(12, 39, 59),
        "study"
    ),
    new TimerItem(
        "4교시 쉬는시간",
        new Time(12, 40, 0),
        new Time(12, 49, 59),
        "not study"
    ),
    new TimerItem(
        "5교시",
        new Time(12, 50, 0),
        new Time(13, 29, 59),
        "study"
    ),
    new TimerItem(
        "5교시 쉬는시간",
        new Time(13, 30, 0),
        new Time(13, 39, 59),
        "not study"
    ),
    new TimerItem(
        "6교시",
        new Time(13, 40, 0),
        new Time(14, 19, 59),
        "study"
    ),
    new TimerItem(
        "6교시 쉬는시간",
        new Time(14, 20, 0),
        new Time(14, 29, 59),
        "not study"
    ),
    new TimerItem(
        "7교시",
        new Time(14, 30, 0),
        new Time(15, 9, 59),
        "study"
    ),
    new TimerItem(
        "방과후",
        new Time(15, 10, 0),
        new Time(23, 59, 59),
        "not study"
    ),
]

const timeData2 = [
    new TimerItem(
        "등교전",
        new Time(0, 0, 0),
        new Time(8, 29, 59),
        "not study"
    ),
    new TimerItem(
        "조회",
        new Time(8, 30, 0),
        new Time(8, 39, 59),
        "not study"
    ),
    new TimerItem(
        "1교시",
        new Time(8, 40, 0),
        new Time(9, 19, 59),
        "study"
    ),
    new TimerItem(
        "1교시 쉬는시간",
        new Time(9, 20, 0),
        new Time(9, 29, 59),
        "not study"
    ),
    new TimerItem(
        "2교시",
        new Time(9, 30, 0),
        new Time(10, 9, 59),
        "study"
    ),
    new TimerItem(
        "2교시 쉬는시간",
        new Time(10, 10, 0),
        new Time(10, 19, 59),
        "not study"
    ),
    new TimerItem(
        "3교시",
        new Time(10, 20, 0),
        new Time(10, 59, 59),
        "study"
    ),
    new TimerItem(
        "3교시 쉬는시간",
        new Time(11, 0, 0),
        new Time(11, 9, 59),
        "launch"
    ),
    new TimerItem(
        "4교시",
        new Time(11, 10, 0),
        new Time(11, 49, 59),
        "study"
    ),
    new TimerItem(
        "점심 시간",
        new Time(11, 50, 0),
        new Time(12, 49, 59),
        "not study"
    ),
    new TimerItem(
        "5교시",
        new Time(12, 50, 0),
        new Time(13, 29, 59),
        "study"
    ),
    new TimerItem(
        "5교시 쉬는시간",
        new Time(13, 30, 0),
        new Time(13, 39, 59),
        "not study"
    ),
    new TimerItem(
        "6교시",
        new Time(13, 40, 0),
        new Time(14, 19, 59),
        "study"
    ),
    new TimerItem(
        "6교시 쉬는시간",
        new Time(14, 20, 0),
        new Time(14, 29, 59),
        "not study"
    ),
    new TimerItem(
        "7교시",
        new Time(14, 30, 0),
        new Time(15, 9, 59),
        "study"
    ),
    new TimerItem(
        "방과후",
        new Time(15, 10, 0),
        new Time(23, 59, 59),
        "not study"
    ),
]

export default [timeData1, timeData2]