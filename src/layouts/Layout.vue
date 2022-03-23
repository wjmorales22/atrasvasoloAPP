<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-purple-10">
        <!--bg-cyan-10-->
        <q-toolbar>
          <q-toolbar-title>Atras Va Solo App</q-toolbar-title>
          <q-space />
          <q-input
            dark
            dense
            standout
            v-model="text"
            input-class="text-right"
            class="q-s-md"
          >
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="text = ''"
              />
            </template>
          </q-input>
          <q-space />
          <q-space />
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-footer bordered>
        <q-tabs align="center" class="q-pa-md">
          <q-route-tab to="/log/destinos" label="Destinos" icon="explore"/>
          <q-route-tab to="/log/paradas" label="Paradas" icon="directions_bus"/>
          <q-route-tab to="/log/rutas" label="Rutas" icon="insights"/>
        </q-tabs>
      </q-footer>
      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400" elevated>
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item clickable v-ripple to="/log">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section> Home </q-item-section>
            </q-item>
            <q-separator/>
            <br>
            <q-item-label header>Administración</q-item-label>
            <q-item clickable v-ripple to="/admin/rutas">
              <q-item-section avatar>
                <q-icon name="directions_bus" />
              </q-item-section>

              <q-item-section>Rutas </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple to="/admin/paradas">
              <q-item-section avatar>
                <q-icon name="place" />
              </q-item-section>

              <q-item-section>Paradas </q-item-section>
            </q-item>
            <q-separator />
            <q-item
              clickable
              v-ripple
              to="/admin/usuarios"
            >
              <q-item-section avatar>
                <q-icon name="people" />
              </q-item-section>

              <q-item-section>Usuarios</q-item-section>
            </q-item>
            <q-separator />
            <q-item-label
              header
              style="margin-top: 1.5rem;"
            >
              Sobre nosotros
            </q-item-label>

            <q-item
              clickable
              v-ripple
              href="https://diseno2022.github.io/atrasvasoloAPP/"
            >
              <q-item-section avatar>
                <q-icon name="public" />
              </q-item-section>

              <q-item-section>Sitio web</q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-scroll-area>
        <profileCard></profileCard>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import profileCard from '../components/profileCard.vue'
export default {
  components: { profileCard },
  data () {
    return {
      drawer: false,
      text: ''
    }
  }
}
</script>
