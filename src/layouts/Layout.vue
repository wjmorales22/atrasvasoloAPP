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
        <q-route-tab to="/destinos" label="Destinos" icon="explore"/>
        <q-route-tab to="/paradas" label="Paradas" icon="directions_bus"/>
        <q-route-tab to="/rutas" label="Rutas" icon="insights"/>
      </q-tabs>
      </q-footer>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
        elevated
      >
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section> Home </q-item-section>
            </q-item>
            <q-separator />
            <br>
            <q-item-label header>Administración</q-item-label>
            <q-item clickable v-ripple to="/admin/rutas">
              <q-item-section avatar>
                <q-icon name="ion-cog" />
              </q-item-section>

              <q-item-section>Rutas </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="ion-cog" />
              </q-item-section>

              <q-item-section>Paradas </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="ion-cog" />
              </q-item-section>

              <q-item-section>General</q-item-section>
            </q-item>
            <q-separator />
            <br><br>
            <q-item-label header>Sobre nosotros</q-item-label>
            <q-item clickable v-ripple href="https://diseno2022.github.io/atrasvasoloAPP/">
              <q-item-section avatar>
                <q-icon name="language" />
              </q-item-section>

              <q-item-section> Sitio </q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-3d-stereoscopic-property-technology-image_26567.jpg"
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
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
      drawer: false,
      text: ''
    }
  }
}
</script>
