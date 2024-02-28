// Konfiguration des Vue-Routers
const router = new VueRouter({
  routes: [
      {
          path: '/',
          redirect: '/login' // Standardroute leitet zur Login-Seite weiter
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },
      // Weitere Routen hier hinzufügen
  ]
});
