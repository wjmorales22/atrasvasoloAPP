<template>
    <q-card class="my-card absolute-top">
          <q-img src="../assets/bg-profilepic.webp">
            <div class="absolute-bottom bg-transparent">
              <q-avatar size="56px" class="q-mb-sm">
                <img src="../assets/avatar-profile.jpg" />
              </q-avatar>
             <div class="text-weight-bold">Administrator</div>
             <div class="text-subtitle2">@administrator</div>
           </div>
          </q-img>
    </q-card>

    <!-- Card por defecto -->
        <!--
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
        </q-img> -->
</template>
<script>
export default {
  name: 'profilecard'
}
</script>
