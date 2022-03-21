<template>
        <q-layout view="lHh Lpr lff">
            <div class="row q-mt-xs">
                <div class="column col-xs-12">
                    <div class="col-2 col-xs-6">
                        <q-btn flat rounded color="primary" icon="arrow_back_ios"/>
                    </div>
                    <div class="col-10 col-xs-6">
                        <q-icon size="3em" name="directions_bus" />
                        <span class="text-h6">Detalle de Ruta</span>
                    </div>
                </div>
                <div class="column items-center col-xs-12 q-mb-xs">
                    <span class="text-subtitle1">51-C</span>
                </div>
                <div class="col col-lg-6 col-xs-12">
                    <q-parallax
                        :height="450" :speed="0.5"
                        src="https://i.ibb.co/7bzT1RH/Mapa.png"
                        >
                    </q-parallax>
                </div>
                <div class="col col-lg-6 col-xs-12">
                    <div class="bg-purple-10 text-white">
                        <q-option-group
                        :options="sentidoRuta"
                        type="radio"
                        v-model="group"
                    />
                    </div>
                </div>
            </div>
        </q-layout>
</template>
<script>
export default {
  data () {
    return {
      group: null,
      sentidoRuta: [
        { label: 'Ilamatepec - Col. España', value: 'ida', color: 'deep-purple-1' },
        { label: 'Col. España - Ilamatepec', value: 'regreso', color: 'deep-purple-1' }
      ]
    }
  }
}
</script>
