const thisId = "TODO";

import getBrowserData from "util/browserData.ts";

browser.management = {};

browser.management.getAll = getBrowserData.call(null, "EXT_LIST");
browser.management.get = id => getBrowserData(`GET_EXT_${id}`);
browser.management.getSelf = getBrowserData.call(null, `GET_EXT_${thisId}`);
browser.management.install = id => getBrowserData(`INSTALL_EXT_${id}`);
browser.management.uninstall = id => getBrowserData(`UNINSTALL_EXT_${id}`);
browser.management.uninstallSelf = getBrowserData.call(
	null,
	`UNINSTALL_EXT_${thisId}`
);
// TODO: Finish the apis...
