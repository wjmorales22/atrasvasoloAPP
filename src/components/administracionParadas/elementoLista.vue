<template>
  <q-item
    clickable
    style="margin-bottom: 1rem;"
  >
    <q-item-section avatar>
      <q-icon name="directions_bus" color="black" size="34px" />
    </q-item-section>

    <q-item-section top>
      <q-item-label lines="1">
        <span class="text-weight-medium">{{ parada.nombreParada }}</span>
      </q-item-label>

      <q-item-label caption lines="1">
        {{ parada.direccionParada }}
      </q-item-label>

      <q-item-label
        lines="1"
        class="text-caption text-weight-bold text-primary text-uppercase"
        style="padding-top: 0.75rem;"
      >
        <span class="cursor-pointer">Ver en el mapa</span>
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn size="12px" flat dense round icon="delete" />
        <q-btn size="12px" flat dense round icon="settings" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'elementoLista',
  props: {
    parada: Array
  }
}
</script>
