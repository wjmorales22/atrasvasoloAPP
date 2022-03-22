
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
      { path: 'detalleruta', name: 'detalleruta', component: () => import('pages/detalleRuta.vue') },
      { path: 'administracion-paradas', name: 'administracion-paradas', component: () => import('pages/administracionParadas.vue') },
      { path: 'administrar-usuario', name: 'administrar-usuario', component: () => import('pages/administrarUsuario.vue') }
    ]

  },

  {
    path: '/layout',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'destinos', name: 'destinos', component: () => import('pages/destinos.vue') },
      { path: 'rutas', name: 'rutas', component: () => import('pages/rutas.vue') },
      { path: 'paradas', name: 'paradas', component: () => import('pages/paradas.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/admin/rutas', component: () => import('pages/administrarRutas.vue') }
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
