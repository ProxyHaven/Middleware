const lang = "en";

const lib: LibReq = {
	handle: async ctx => {
		ctx.req.headers["accept-language"] = lang;

		return ctx.req;
	},
};

export default lib;
