import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('@/views/HomeView.vue');
const MovieDetailsPage = () => import('@/views/MovieDetailsView.vue');

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/movie/:id', name: 'MovieDetails', component: MovieDetailsPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
