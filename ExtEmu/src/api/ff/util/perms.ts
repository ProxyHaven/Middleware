const perms = [];

function hasPerm(api) {
	return api in perms;
}

function setPerm(api) {}

export { hasPerms, reqPerm };
