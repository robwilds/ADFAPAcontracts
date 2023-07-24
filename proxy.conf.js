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
    "/alfresco": {
        "target": "https://sse.dev.alfrescocloud.com",
        "secure": false,
        "changeOrigin": true
      }
}
