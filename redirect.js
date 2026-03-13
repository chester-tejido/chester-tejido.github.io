const ROUTES = {
	VUE: '/vue',
	ANGULAR: '/angular',
	REACT: '/react',
};

function baseUrl(url) {
	const base = window.location.origin;
	return `${base}${url}`;
}

function redirect(framework) {
	// window.location.href = baseUrl(ROUTES[framework]);
	window.location.replace(baseUrl(ROUTES[framework]));
}

// redirect('VUE'); // Default redirect to Vue page on load
