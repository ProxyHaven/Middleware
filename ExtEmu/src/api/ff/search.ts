import getBrowserData from "util/browserData";
import fwdMsg from "util/fwdMsg";

// @ts-ignore
browser.search = {};

(async => {
	browser.search.get = async () => await getBrowserData("GET_ENGINE");
	browser.search.query = async queryInfo => {};
	fwdMsg(browser.search, "search", "SEARCH");
})();
