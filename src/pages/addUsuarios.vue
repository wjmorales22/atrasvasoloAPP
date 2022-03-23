<template>
  <q-page padding>
    <h4>Agregar Usuario</h4>

    <q-form class="row q-col-gutter-lg-md">
      <div class="col-12 col-sm-4">
        <q-input square outlined v-model="text" label="Nombre" />
      </div>

      <div class="col-12 col-sm-4">
        <q-input square outlined v-model="text" label="Apellido" />
      </div>

      <div class="col-12 col-sm-4">
        <q-input v-model="date" filled type="date" hint="Fecha de nacimiento" />
      </div>

      <div class="col-12 col-sm-4">
        <q-input v-model="email" filled type="email" hint="E-mail" />
      </div>

      <div class="col-12 col-sm-4">
        <q-input v-model="tel" filled type="tel" hint="Celular" />
      </div>

      <div class="col-12 col-sm-4">
        <q-select
          square
          outlined
          v-model="model"
          :options="options"
          label="Departamento"
        />
      </div>

      <div class="col-12 col-sm-4">
        <q-select
          square
          outlined
          v-model="model"
          :options="options"
          label="Tipo de usuario"
        />
      </div>

      <div>
        <q-btn label="Guardar" color="positive" :ripple="false" />
        <q-btn
          label="Cancelar"
          color="negative"
          class="q-ml-sm"
          :ripple="false"
        />
      </div>
    </q-form>
  </q-page>
</template>
