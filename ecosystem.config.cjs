// pm2 start ecosystem.config.cjs

module.exports = {
    apps: [{
        name: 'VoenSite',
        script: "node_modules/next/dist/bin/next",
        args: "start",
        instances: 1,
        autorestart: true,
        watch: false,
        time: true,

        env: {
            NODE_ENV: 'production',
        },
    }],
}
