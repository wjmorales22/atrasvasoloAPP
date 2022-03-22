
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'destinos', name: 'destinos', component: () => import('pages/destinos.vue') },
      { path: 'rutas', name: 'rutas', component: () => import('pages/rutas.vue') },
      { path: 'paradas', name: 'paradas', component: () => import('pages/paradas.vue') },
      { path: 'detalleparada', name: 'detalleparada', component: () => import('pages/detalleParada.vue') },
      { path: 'detalleruta', name: 'detalleruta', component: () => import('pages/detalleRuta.vue') }
    ]

  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: 'administrar-paradas', name: 'dministrar-paradas', component: () => import('pages/administrarParadas.vue') },
      { path: 'administrar-rutas', name: 'dministrar-ruta', component: () => import('pages/administrarRutas.vue') },
      { path: 'administrar-usuarios', name: 'dministrar-usuarios', component: () => import('pages/administrarUsuarios.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
