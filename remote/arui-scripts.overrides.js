

module.exports = {
    devServer: (config) => {
        const { proxy } = config;

        // config.proxy.push(
        //     {
        //         context: ['/remote'],
        //         target: 'http://localhost:8081',
        //         pathRewrite: { '^/remote': '' },
        //     },
        // )

        return (
            {
                ...config,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'x-csrf-token, cache, content-type, x-request-id',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                },
                // proxy: {
                //     // данная настройка нужна для того чтобы перенаправлять запросы с контекст рутом 'ona' на локально развернутое приложение,
                //     // таким образом мы можем использовать настройки с тестовых стендов, дополнительно никак их не изменяя
                //     '/remote': {
                //         target: `http://localhost:8081`,
                //         pathRewrite: {
                //             '^/remote': ''
                //         },
                //     },
                //     ...proxy,
                // },
            }
        )
    },
};
