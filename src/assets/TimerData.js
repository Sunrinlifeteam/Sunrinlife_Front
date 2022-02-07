import Time from "./../Model/Time.js"
import TimerItem from "./../Model/TimerItem.js"

export default [
    new TimerItem(
        "등교전",
        new Time(0, 0, 0),
        new Time(8, 29, 0),
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
        new Time(9, 29, 59),
        "study"
    ),
    new TimerItem(
        "1교시 쉬는시간",
        new Time(9, 30, 0),
        new Time(9, 34, 59),
        "not study"
    ),
    new TimerItem(
        "2교시",
        new Time(9, 35, 0),
        new Time(10, 24, 59),
        "study"
    ),
    new TimerItem(
        "2교시 쉬는시간",
        new Time(10, 25, 0),
        new Time(10, 29, 59),
        "not study"
    ),
    new TimerItem(
        "3교시",
        new Time(10, 30, 0),
        new Time(11, 24, 59),
        "study"
    ),
    new TimerItem(
        "점심시간",
        new Time(11, 25, 0),
        new Time(12, 14, 59),
        "launch"
    ),
    new TimerItem(
        "4교시",
        new Time(12, 15, 0),
        new Time(13, 4, 59),
        "study"
    ),
    new TimerItem(
        "4교시 쉬는시간",
        new Time(13, 5, 0),
        new Time(13, 9, 59),
        "not study"
    ),
    new TimerItem(
        "5교시",
        new Time(13, 10, 0),
        new Time(13, 59, 59),
        "study"
    ),
    new TimerItem(
        "5교시 쉬는시간",
        new Time(14, 0, 0),
        new Time(14, 4, 59),
        "not study"
    ),
    new TimerItem(
        "6교시",
        new Time(14, 5, 0),
        new Time(14, 54, 59),
        "study"
    ),
    new TimerItem(
        "6교시 쉬는시간",
        new Time(14, 55, 0),
        new Time(14, 59, 59),
        "not study"
    ),
    new TimerItem(
        "7교시",
        new Time(15, 0, 0),
        new Time(15, 49, 59),
        "study"
    ),
    new TimerItem(
        "방과후",
        new Time(15, 50, 0),
        new Time(23, 59, 59),
        "not study"
    ),
]