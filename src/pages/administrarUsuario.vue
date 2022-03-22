<template>
  <div class="row">
    <div class="q-mt-md full-width">
      <p align="center">
        <span class="text-weight-bolder text-h5">Administrar Usuarios</span>
      </p>
    </div>

    <div class="q-pa-md full-width">
      <div class="row">
        <div class="col">
          <span class="text-weight-bolder text-h6">Usuarios colaboradores</span>
        </div>
        <div class="col">
          <q-input filled placeholder="Buscar Usuario">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <v-card-actions class="q-pa-md">
          <v-flex text-xs-right>
            <div class="col" text-xs-right>
              <q-btn color="primary" icon="style" label="Agregar" />
            </div>
          </v-flex>
        </v-card-actions>
      </div>
    </div>

    <q-layout view="lHh Lpr lff">
      <div class="q-pa-md">
        <q-intersection>
          <q-item clickable v-ripple to="#">
            <q-item-section avatar>
              <q-icon name="perm_identity" color="black" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Juanastacio Primero</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios" color="primary" />
            </q-item-section>

            <div class="q-pa-md" style="max-width: 300px">
              <div class="q-gutter-md">
                <q-select v-model="model" :options="options" label="Standard" />
              </div>
            </div>

          </q-item>
        </q-intersection>

        <q-intersection>
          <q-item clickable v-ripple to="#">
            <q-item-section avatar>
              <q-icon name="perm_identity" color="black" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Mauricio Foden</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios" color="primary" />
            </q-item-section>
          </q-item>
        </q-intersection>

        <q-intersection>
          <q-item clickable v-ripple to="#">
            <q-item-section avatar>
              <q-icon name="perm_identity" color="black" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Pedro Parker</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="arrow_forward_ios" color="primary" />
            </q-item-section>
          </q-item>
        </q-intersection>
      </div>
    </q-layout>

    <div class="q-pa-md full-width">
      <div class="row">
        <div class="col">
          <span class="text-weight-bolder text-h6">Usuarios colaboradores</span>
        </div>
      </div>
    </div>
  </div>
</template>
