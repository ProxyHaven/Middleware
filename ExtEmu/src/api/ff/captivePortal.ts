// @ts-ignore
browser.captivePortal = {};

Object.defineProperty(browser.captivePortal, "canonicalURL", {
	value: "",
	writable: true,
});

browser.captivePortal.getLastChecked = async () => 0;
browser.captivePortal.getState = async () => "unknown";
