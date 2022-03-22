<template>
  <q-layout view="lHh Lpr lff">

    <div class="q-pa-md doc-container">
      <div class="row justify-center">
        <div class="col-4">
          <span class="text-weight-bolder text-h5">Administrar Usuarios</span>
        </div>
        <div class="col-4">
          <div class="col" text-xs-right>
            <q-btn color="primary" icon="style" label="Agregar" />
          </div>
        </div>
      </div>
    </div>

    <q-intersection>
      <q-item>
        <q-item-section avatar>
          <q-icon name="manage_accounts" color="black" />
        </q-item-section>
        <q-item-section>
          <span class="text-weight-bolder text-h6">Usuarios colaboradores</span>
        </q-item-section>
        <q-item-section side>
          <q-input filled placeholder="Buscar Usuario">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>
    </q-intersection>

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

          <!-- Combobox para usuarios colaboradores -->
          <q-item-section>
            <div class="q-pa-md" style="max-width: 300px">
              <div class="q-gutter-md">
                <q-select v-model="model" :options="options" label="Standard" />
              </div>
            </div>
          </q-item-section>
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

    <q-intersection>
      <q-item>
        <q-item-section avatar>
          <q-icon name="manage_accounts" color="black" />
        </q-item-section>
        <q-item-section>
          <span class="text-weight-bolder text-h6">Usuarios públicos</span>
        </q-item-section>

        <q-item-section side>
          <q-input filled placeholder="Buscar Usuario">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-item-section>

        <!-- BOTON AGREGAR Usuarios públicos-------------------------

        <q-item-section side>
          <div class="col" text-xs-right>
            <q-btn color="primary" icon="style" label="Agregar" />
          </div>
        </q-item-section>
        -->
      </q-item>
    </q-intersection>
  </q-layout>
</template>
