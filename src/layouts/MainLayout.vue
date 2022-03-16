<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>Atras Va Solo App</q-toolbar-title>
          <q-btn flat @click = 'drawer = !drawer' round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model= "drawer"
        show-if-above
        :width= "200"
        :breakpoint= "400"
        elevated
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar >
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/destinos">
              <q-item-section avatar >
                <q-icon name="explore" />
              </q-item-section>

              <q-item-section >
                Destinos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/paradas">
              <q-item-section avatar>
                <q-icon name="person_pin_circle" />
              </q-item-section>

              <q-item-section>
                Paradas
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/rutas">
              <q-item-section avatar>
                <q-icon name="directions_bus" />
              </q-item-section>

              <q-item-section>
                Rutas
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Administrator</div>
            <div>@administrator</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>
