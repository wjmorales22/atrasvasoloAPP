<template>
    <div>
        <q-item clickable v-ripple>
        <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="fas fa-bus" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{nameRuta}}</q-item-label>
          <q-item-label caption lines="2">{{trayectoria}}</q-item-label>
        </q-item-section>

         <q-item-section side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="14px" flat dense round icon="delete" >
                <q-tooltip content-class="bg-accent">Borrar</q-tooltip>
            </q-btn>
            <q-btn class="gt-xs" size="14px" flat dense round icon="ion-create" >
                <q-tooltip content-class="bg-accent">Editar-</q-tooltip>
            </q-btn>
          </div>
        </q-item-section>
      </q-item>
    </div>
</template>
<script>
export default {
  props: {
    nameRuta: String,
    trayectoria: String
  }
}
</script>
<style>
</style>
