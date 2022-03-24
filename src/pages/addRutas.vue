<template>
    <div>
        <q-page padding>
    <h4 >Agregar Ruta</h4>
<div class="q-pa-lg">
    <div class="q-gutter-md" >
      <q-input outlined v-model="text" label="Nombre de la Ruta" />

    </div>
  </div>
    <div class="q-pa-lg q-gutter-sm">
      <q-input filled v-model="time" mask="time" :rules="['time']" label="Hora de Salida">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="time">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                  <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
  </div>
    <div class="col-12">
      <q-img
        :src="url"
        spinner-color="white"
      />
    </div>
    <div class="q-pa-lg q-gutter-sm">
    <q-btn-dropdown color="purple-10" label="Precios">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Normal: 0.20 ctvs</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Especial: 0.35 ctvs</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
  </div>
  <div class="q-pa-lg q-gutter-sm">
      <q-input filled v-model="time" mask="time" :rules="['time']" label="Tiempo de recorrido">
      </q-input>
  </div>
  <div class="q-pa-lg q-gutter-sm">
    <q-btn color="purple-10" label="Recorridos" />
  </div>
  <div class="q-pa-lg q-gutter-md items-start" >
      <q-file
        v-model="files"
        label="Agregar Imagenes"
        filled
        counter
        :counter-label="counterLabelFn"
        max-files="3"
        multiple
        style="max-width: 300px"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
  </div>
  <div align="right">
    <q-btn v-close-popup label="Cancelar" color="primary" flat icon="cancel" />
    <q-btn label="Guardar" color="primary" flat icon="save" />
    </div>

  </q-page>
        <div class="col-12" >
            <q-img src="https://pbs.twimg.com/media/CS_wEu3WwAETIjP.png" :ratio="200 / 20" />
        </div>
    </div>
</template>
<script>
</script>
