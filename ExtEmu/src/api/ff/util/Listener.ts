type ListenerInfo = {
	filter: browser.webRequest.RequestFilter;
	extraInfoSpec: string[];
};
class Listener {
	listeners = new Map<Function, ListenerInfo>();

	addListener(
		listener: Function,
		filter: browser.webRequest.RequestFilter,
		extraInfoSpec: string[]
	) {
		this.listeners.set(listener, {
			filter,
			extraInfoSpec,
		});
	}
	removeListener(listener: Function) {
		this.listeners.delete(listener);
	}
}
