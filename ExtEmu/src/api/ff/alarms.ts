// In seconds
const checkFreq = 60;

let alarms = new Map<string, browser.alarms.Alarm>();

// @ts-ignore
browser.alarms = {};

browser.alarms.clear = async name => alarms.delete(name);
browser.alarms.clearAll = alarms.clear;
browser.alarms.create = alarms.set;
browser.alarms.get = alarms.get;
browser.alarms.getAll = searchName =>
	[...alarms.entries()].filter(([alarmName]) => alarmName === searchName);

// I know this won't work
// I might have to have some injects to use setTimeout, and store the map on there
// Settimeout doesn't work on background pages

// TODO: browser.alarms.onalarm
