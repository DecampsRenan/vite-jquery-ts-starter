import jQuery from 'jquery';

import '@/theme/main.css';

Object.assign(window, { $: jQuery, jQuery });

const app = $('#app')!;

app.html(`
  <h1 class="text-3xl font-bold underline">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`);
