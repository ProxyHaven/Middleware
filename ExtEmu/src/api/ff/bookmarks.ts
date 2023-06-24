// @ts-ignore
browser.bookmarks = {};

{
	const bcCreateBookmark = new BroadcastChannel("BOOKMARKS_CREATE");
	browser.bookmarks.create = async bookmark => {
		bcCreateBookmark.postMessage(bookmark);
		return await new Promise(res => {
			bcCreateBookmark.onmessage = e => res(e.data);
		});
	};
}
