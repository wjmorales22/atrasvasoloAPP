
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/destinos', name: 'home-destinos', component: () => import('pages/destinos.vue') },
      { path: '/rutas', name: 'home-rutas', component: () => import('pages/rutas.vue') },
      { path: '/paradas', name: 'home-paradas', component: () => import('pages/paradas.vue') },
      { path: '/detalleparada', name: 'home-detalleparada', component: () => import('pages/detalleParada.vue') },
      { path: '/detalleruta', name: 'home-detalleruta', component: () => import('pages/detalleRuta.vue') }
    ]

  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/admin/paradas', name: 'admin-paradas', component: () => import('pages/administrarParadas.vue') },
      { path: '/admin/rutas', name: 'admin-ruta', component: () => import('pages/administrarRutas.vue') },
      { path: '/admin/usuarios', name: 'admin-usuarios', component: () => import('pages/administrarUsuarios.vue') },
      { path: '/admin/addusuario', name: 'admin-addusuario', component: () => import('pages/addUsuarios.vue') },
      { path: '/admin/addruta', name: 'admin-addruta', component: () => import('pages/addRutas.vue') }
    ]
  },
  {
    path: '/log',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/log/destinos', name: 'log-destinos', component: () => import('pages/destinos.vue') },
      { path: '/log/rutas', name: 'log-rutas', component: () => import('pages/rutas.vue') },
      { path: '/log/paradas', name: 'log-paradas', component: () => import('pages/paradas.vue') }
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
