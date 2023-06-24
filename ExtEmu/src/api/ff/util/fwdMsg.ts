export default (obj: object, prop: string, id: string) => {
	const bc = new BroadcastChannel(`BROWSER_${id}`);
	bc.onmessage = e => obj[prop](e);
};
