import { createApp } from 'vue';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';
import App from './App.vue';
import router from './router';
import './assets/main.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      retry: false,
    },
  },
});

const app = createApp(App);
app.use(VueQueryPlugin, { queryClient });
app.use(router);
app.mount('#app');
