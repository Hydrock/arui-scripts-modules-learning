import Hapi from '@hapi/hapi';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return `
        <!DOCTYPE html>
        <html lang="ru">
          <head>
            <meta charset="UTF-8">
            <title>Hapi Сервер</title>
            <script src="assets/main.js"></script>
          </head>
          <body>
            <div id="root"></div>
            <h1>Добро пожаловать на простой Hapi сервер!</h1>
          </body>
        </html>
      `;
        }
    });

    await server.start();
    console.log('Сервер запущен на %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();
