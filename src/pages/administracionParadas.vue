<template>
  <q-page class="row d-flex justify-center">
    <q-list class="col-12">
      <div
        class="flex justify-between"
        style="margin-bottom: 2rem;"
      >
        <q-item-label  class="text-h6 text-weight-bold text-primary text-uppercase flex items-center">
          <span>Listado de paradas de bus</span>
        </q-item-label>

        <q-btn
          unelevated
          rounded
          color="primary"
          label="Agregar parada"
          class="text-weight-bold"
        />
      </div>

      <elementoLista v-for="(parada, index) in paradas" :key="index" :parada="parada" />
    </q-list>
  </q-page>
</template>

<script>
import elementoLista from '../components/administracionParadas/elementoLista.vue'

export default {
  name: 'administracionParadas',
  components: { elementoLista },
  data: () => ({
    paradas: [
      {
        nombreParada: 'Parada de buses Cantarrana',
        direccionParada: 'Carretera A Sonsonate, Santa Ana'
      },
      {
        nombreParada: 'Parada de buses INSA',
        direccionParada: '31 Calle Pte, Santa Ana'
      },
      {
        nombreParada: 'Parada de buses Las Vegas',
        direccionParada: 'Km 61 - 62, Calle Antigua A San Salvador, Santa Ana'
      },
      {
        nombreParada: 'Parada de buses UNICAES',
        direccionParada: 'Km 64, Calle Antigua A San Salvador, Santa Ana'
      }
    ]
  })
}
</script>
