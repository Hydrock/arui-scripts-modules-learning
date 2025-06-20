import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import path from 'path';

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
        credentials: true,
        additionalHeaders: ['cache-control', 'x-requested-with', 'x-csrf-token', 'Cookie'],
      },
    },
    state: {
      strictHeader: false,
    },
  });

  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    options: {
      cors: {
        origin: ['*'] // разрешить все источники
      }
    },
    handler: {
      directory: {
        path: path.join(process.cwd(), '.build', 'assets'),
        listing: false,
        index: false
      }
    }
  });

  server.route({
    method: 'OPTIONS',
    path: '/assets/{param*}',
    handler(request, h) {
      return h
        .response('OK')
        .header('Access-Control-Allow-Origin', request.headers.origin)
        .header('Access-Control-Allow-Headers', '*');
    },
    options: { auth: false },
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
