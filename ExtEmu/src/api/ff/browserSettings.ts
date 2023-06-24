import { getBrowserData, setBrowserData } from "./util/browserData";

// @ts-ignore
browser.browserSettings = {};

(async () => {
	// TODO: Precompile these values
	const text = await (
		await fetch(
			"https://raw.githubusercontent.com/mdn/content/main/files/en-us/mozilla/add-ons/webextensions/api/browsersettings/index.md"
		)
	).text();
	// @ts-ignore
	const settings = [
		...text.matchAll(/(?<={{WebExtAPIRef\(\"browserSettings\.).*(?=\"\)}})/g),
	];

	for (const setting of settings) {
		browser.browserSettings[setting] = {
			get: async () => await getBrowserData(`GET_SETTINGS_${setting}`),
			set: async details => setBrowserData(`SET_SETTINGS_${setting}`, details),
			clear: async () => setBrowserData(`SET_SETTINGS_${setting}`, null),
		};
	}
})();
