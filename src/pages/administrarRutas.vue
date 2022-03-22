<template>
    <div class="q-pa-md">
    <q-list  v-for="ruta in listadoRutas"
    :key="ruta.ruta">

      <itemRuta :nameRuta=ruta.ruta :trayectoria=ruta.trayectoria></itemRuta>
      <q-separator spaced inset="item" />

    </q-list>
  </div>
</template>

<script>
import itemRuta from 'src/components/administracionRutas/itemRuta.vue'
export default {
  name: 'administrarRutas',
  components: { itemRuta },
  data () {
    return {
      listadoRutas: [
        { ruta: '51-A', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-B', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Lamatepec - Col. España' },
        { ruta: '51-D', trayectoria: 'Col. Río Zarco - Col. Altos del Palmar' },
        { ruta: '51-D 1', trayectoria: 'Col. Santa Ana Norte - Col. Altos del Palmar' },
        { ruta: '51-E', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-F', trayectoria: 'Col. El Milagro - Col. Contexa' },
        { ruta: '51-F 1', trayectoria: 'Col. Santa Ana Norte - Col. Contexa' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-D 1', trayectoria: 'Col. Santa Ana Norte - Col. Altos del Palmar' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-F', trayectoria: 'Col. El Milagro - Col. Contexa' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar3 - Col. IVU3' },
        { ruta: '51-C', trayectoria: 'Col. Lamatepec - Col. España' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' },
        { ruta: '51-C', trayectoria: 'Col. Altos del Palmar - Col. IVU' }
      ]
    }
  }
}
</script>

<style>

</style>
