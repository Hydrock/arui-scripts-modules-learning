import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app';

document.addEventListener('DOMContentLoaded', () => {
    // Найдём элемент-контейнер в HTML
    const container = document.getElementById('root');

    // Создаём "корень" React и монтируем приложение
    if (container) {
        const root = createRoot(container);
        root.render(<App />);
    }
})
