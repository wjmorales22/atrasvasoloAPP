<template>
  <div class="row ">
    <q-parallax>
      <template v-slot:media>
        <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://minecraft-tutos.com/wp-content/uploads/2020/09/install-shader-minecraft-with-optifine.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2021/07/bsl-shader-hero.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.mos.cms.futurecdn.net/mYW3XyGMai6aadP8T7AN9e-970-80.jpg.webp"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.brgeeks.com/wp-content/uploads/2021/11/Best-Shaders-in-Minecraft.jpg"
          />
        </q-carousel>
      </template>

      <template v-slot:content="scope">
        <div
          class="full-width column items-center"
          :style="{
            top: scope.percentScrolled * 60 + '%',
            left: 0,
            right: 0,
          }"
        >

          <q-input
              rounded
              standout="bg-pink-6 text-white"
              bottom-slots
              v-model="text"
              label="¿Cuál es tu proximo Destino?"
              bg-color="grey-1"
              color="light-green"
              style="width: 90%"
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:append>
              <q-icon name="search" />
            </template>

          </q-input>
        </div>
      </template>
    </q-parallax>

    <div class="q-mt-md">
      <span class="text-weight-bolder text-h6 ">Elige tu destino favorito</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>

<style scoped>
.fondo{
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
