import { getBrowserData } from "util/browserData";

browser.topSites = {};

browser.topSites.get = async opts =>
	getBrowserData("GET_TOPSITES", null, JSON.stringify(opts));
