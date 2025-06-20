module.exports = {
    devServer: (config) => {
        // config.proxy.push(
        //     {
        //         context: ['/remote'],
        //         target: 'http://localhost:8081',
        //         pathRewrite: { '^/remote': '' },
        //     },
        // )

        config.proxy = [
            {
                context: ['/remote'],
                target: 'http://localhost:8081',
                pathRewrite: { '^/remote': '' },
            },
            config.proxy[0],
        ];



        console.log('config.proxy:', config.proxy);

        return (
            {
                ...config,
            }
        )
    },
};
