// import { PackageSettings } from 'arui-scripts';

const settings = {
    clientServerPort: 8081,
    serverPort: 3001,
    devServerCors: true,
    modules: {
        // если хост приложение шарит эти библиотеки, и они совпадают по версии
        shared: {
            'react': '^19.1.0', // так же поддерживаются более сложные версии например { requiredVersion: '^17.0.0', singleton: true }
            'react-dom': '^19.1.0',
        },
        exposes: {
            'SuperModule': './src/modules/super-module/index',
        }
    }
};

export default settings;
