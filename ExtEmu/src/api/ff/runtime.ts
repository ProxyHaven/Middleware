import { getBrowserData } from "./util/browserData";

// @ts-ignore
browser.runtime = {};

(async () => {
	const uaPlatform = await getBrowserData("GET_PLATFORM", true);
	const uaPlatformUA = await getBrowserData("GET_PLATFORM_UA", true);

	browser.runtime.getPlatformInfo = async () => {
		const os = uaPlatform ?? uaPlatform;
		const platformInfo: browser.runtime.PlatformInfo = {
			os,
			// There is no way of obtaining this information, so it must be guessed
			arch: os === "android" || os === "ios" ? "arm" : "x86-64",
		};

		return platformInfo;
	};
})();
// TODO: ...
