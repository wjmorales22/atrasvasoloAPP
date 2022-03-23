<template>
  <q-page padding>
    <h4>Agregar Usuario</h4>

    <q-intersection>
      <q-item class="row q-col-gutter-lg-md">
        <div class="col-12 col-sm-4">
          <q-input outlined v-model="text" label="Nombre" />
        </div>
      </q-item>
    </q-intersection>

    <q-intersection>
      <q-item class="row q-col-gutter-lg-md">
        <div class="col-12 col-sm-4">
          <q-input outlined v-model="text" label="Apellido" />
        </div>
      </q-item>
    </q-intersection>

    <div class="col-12">
      <q-img
        :src="url"
        spinner-color="white"
        style="height: 140px; max-width: 150px"
      />
    </div>

    <q-intersection>
      <q-item class="row q-col-gutter-lg-md">
        <div class="col-12 col-sm-6">
          <q-input
            v-model="date"
            filled
            type="date"
            hint="Fecha de nacimiento"
          />
        </div>
      </q-item>
    </q-intersection>

    <q-intersection>
      <q-item class="row q-col-gutter-lg-md">
        <div class="col-12 col-sm-6">
          <q-input v-model="email" filled type="email" hint="E-mail" />
        </div>
      </q-item>
    </q-intersection>

    <q-intersection>
      <q-item>
        <div class="col-12 col-sm-6">
          <q-input v-model="tel" filled type="tel" hint="Celular" />
        </div>
      </q-item>
    </q-intersection>

    <q-intersection>
      <q-item>
        <div class="col-12 col-sm-6">
          <q-select
            outlined
            v-model="model"
            :options="options"
            label="Departamento"
          />
        </div>
      </q-item>
    </q-intersection>

    <q-intersection>
      <q-item>
        <div class="col-12 col-sm-6">
          <q-select outlined v-model="model" :options="options" label="" />
        </div>
      </q-item>
    </q-intersection>

    <!-- Opcion desbloqueable si el usuario es colaborador -->
    <q-intersection>
      <q-item>
        <div class="col-12 col-sm-6">
          <q-select
            outlined
            v-model="model"
            :options="options"
            label="Tipo de usuario"
          />
        </div>
      </q-item>
    </q-intersection>

    <q-intersection>
      <q-item>
        <div>
          <q-btn label="Guardar" color="positive" :ripple="false" />
          <q-btn
            label="Cancelar"
            color="negative"
            class="q-ml-sm"
            :ripple="false"
          />
        </div>
      </q-item>
    </q-intersection>
  </q-page>
</template>
