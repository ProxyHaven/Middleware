import { getBrowserData } from "./util/browserData";

// @ts-ignore
browser.contextualIdentities = {};

browser.contextualIdentities.create = async details => {
	const identity = await getBrowserData(
		"CREATE_CONTEXTUAL_IDENTITY",
		null,
		details
	);
	return {
		...details,
		cookieStoreId: identity.cookieStoreId,
		colorCode: identity.colorCode,
		iconUrl: identity.iconUrl,
	};
};
browser.contextualIdentities.get = async cookieStoreId =>
	await getBrowserData("GET_CONTEXTUAL_IDENTITY", null, cookieStoreId);
browser.contextualIdentities.query = async details => {
	const identities: browser.contextualIdentities.ContextualIdentity[] =
		await getBrowserData("GET_CONTEXTUAL_IDENTITIES");
	return identities.filter(identity => identity.name === details.name);
};
browser.contextualIdentities.remove = async cookieStoreId => {
	const identity: browser.contextualIdentities.ContextualIdentity =
		await getBrowserData("REMOVE_CONTEXTUAL_IDENTITY", null, cookieStoreId);
	return identity;
};
