import { getBrowserData, setBrowserData } from "util/browserData";
import fwdMsg from "util/fwdMsg";

// @ts-ignore
browser.theme = {};

(async => {
	browser.theme.getCurrent = async () => await getBrowserData("GET_THEME");
	//browser.theme.update = (windowId, theme) => setBrowserData("SET_THEME", { windowId, theme });
	browser.theme.reset = windowId =>
		setBrowserData("SET_THEME", { windowId, theme: null });
})();

fwdMsg(browser.theme, "onUpdated", "THEME_UPDATED");
