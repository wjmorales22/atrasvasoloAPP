<template>
   <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="24rem"
      width="24rem"
      class="posCar"
    >
      <q-carousel-slide :name="1" img-src="https://www.visitcentroamerica.com/wp-content/uploads/2017/08/ver-centroamerica-el-salvador-santa-ana-03.jpg" />
      <q-carousel-slide :name="2" img-src="https://hablemosdeculturas.com/wp-content/uploads/2017/12/patrimonio-cultural-de-el-salvador-6-1024x768.jpg" />
      <q-carousel-slide :name="3" img-src="https://static.elmundo.sv/wp-content/uploads/2020/04/Alcaldia-de-Santa-Ana.jpg" />
    </q-carousel>
    <div class="row">
      <div class="col-6 favorite">
        <q-item-label>Favoritos</q-item-label>
      </div>
      <div class="col-6 favorite">
        <div class="posBtn">
          <q-btn align="right" class="btn-fixed-width" color="indigo" label="Agregar" size="9px"/>
        </div>
      </div>
      <div class="col-12 rec">
        <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          icon="explore"
          label="Destinos"
          caption="vacio"
        >
        </q-expansion-item>

        <q-expansion-item :content-inset-level="0.5" expand-separator icon="person_pin_circle" label="Paradas" caption="vacio">

        </q-expansion-item>
        <q-expansion-item :content-inset-level="0.5" expand-separator icon="directions_bus" label="Rutas" caption="vacio">
        </q-expansion-item>
      </q-list>
      </div>
    </div>
    <div class="row">
      <q-item-label>Recientes</q-item-label>
      <div class="col-12 rec">
        <q-list bordered class="rounded-borders">

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label lines="1">INSA CALLE PTE</q-item-label>
          <q-item-label caption lines="2">

          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-separator inset="item" />

      <q-item clickable v-ripple>

        <q-item-section>
          <q-item-label lines="1">UES</q-item-label>
          <q-item-label caption lines="2">

          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
      <q-separator inset="item" />

      <q-item clickable v-ripple>

        <q-item-section>
          <q-item-label lines="1">INSA CALLE PTE</q-item-label>
          <q-item-label caption lines="2">

          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          5 min ago
        </q-item-section>
      </q-item>
    </q-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>

<style scoped>
  .rec{
    border: 1px solid black;
    margin-top: 5px;
  }
  .favorite{
    margin-top: 1.5em;
    margin-bottom: 0.5px;
  }
  .posBtn{
    text-align: right;
  }
  .posCar{
    position: relative;
    z-index: 1;
  }
</style>
