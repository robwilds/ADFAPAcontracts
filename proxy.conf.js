module.exports = {
    "/auth/admin/realms/myrealm": {
        "target": "https://sse.dev.alfrescocloud.com",
        "secure": false,
        "pathRewrite": {
            "^/auth/admin/realms/myrealm": ""
        },
        "changeOrigin": true,
        "logLevel": "debug"
    },
    "/auth/realms/myrealm": {
        "target": "https://sse.dev.alfrescocloud.com",
        "secure": false,
        "pathRewrite": {
            "^/auth/realms/myrealm": ""
        },
        "changeOrigin": true,
        "logLevel": "debug"
    },
    "/": {
        "target": "https://sse.dev.alfrescocloud.com",
        "secure": false,
        "changeOrigin": true,
        "logLevel": "debug"
    },
    '/alfresco': {
        target: "https://sse.dev.alfrescocloud.com",
        secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        onProxyReq: function(request) {
            if(request["method"] !== "GET")
            request.setHeader("origin", host);
        },
        // workaround for REPO-2260
        onProxyRes: function (proxyRes, req, res) {
            const header = proxyRes.headers['www-authenticate'];
            if (header && header.startsWith('Basic')) {
                proxyRes.headers['www-authenticate'] = 'x' + header;
            }
        },
    }
}
