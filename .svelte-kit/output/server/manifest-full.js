export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Active-High.png","Active-Low.png","Active-Medium.png","favicon.png","Inactive-High.png","Inactive-High.png~","Inactive-Low.png","Inactive-Low.png~","Inactive-Medium.png","Inactive-Medium.png~","main-bg.png","main-bg.png~"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f574f99f.js","app":"_app/immutable/entry/app.d701565f.js","imports":["_app/immutable/entry/start.f574f99f.js","_app/immutable/chunks/index.ad1d4fec.js","_app/immutable/chunks/singletons.e09a03d3.js","_app/immutable/entry/app.d701565f.js","_app/immutable/chunks/index.ad1d4fec.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/floor1",
				pattern: /^\/floor1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/floor2",
				pattern: /^\/floor2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
