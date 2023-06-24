import { getBrowserData } from "util/browserData.ts";

import { loadModule } from "cld3-asm";

(async => {
	const acceptLangs = await getBrowserData("ACCEPT_LANGS", true);
	browser.i18n.getAcceptLanguages = async () => acceptLangs;
})();

// @ts-ignore
browser.i18n = {};

(async () => {
	const cldFactory = await loadModule();

	const identifier = cldFactory.create(0);

	browser.i18n.detectLanguage = async text => {
		const langs = identifier.findMostFrequentLanguages(text, Infinity);

		return {
			isReliable: langs[0].is_reliable,
			languages: langs.map(lang => {
				return {
					language: lang.language,
					percentage: lang.probability,
				};
			}),
		};
	};
})();
