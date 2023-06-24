// This API is mostly useless and needs to be emulated anyways
const emuState: browser.idle.IdleState = "active";

// @ts-ignore
browser.idle = {};

browser.idle.queryState = async () => emuState;
// TODO: ...
