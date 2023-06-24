// TODO: Use import paths
import crxToZip from "../util/crxToZip";
import extractZip from "../util/extractZip";

export default async (e: MessageEvent) => {
	const resp = await fetch(e.data);

	if (resp.headers.get("content-type") === "application/x-chrome-extension") {
		const zip = await crxToZip(await resp.arrayBuffer());

		if (zip) {
			const files = await extractZip(zip);

			if (files) {
				const manifest = files.get("manifest.json");
			}
		}
	}
};
