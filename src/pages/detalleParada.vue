<template>
  <div class="container-fluid">
    <div class="row" style="padding-bottom: 10px; border-bottom: 5px solid #5900ff">
      <div class="col-2">
        <q-btn
          push
          color="white"
          text-color="primary"
          round
          icon="arrow_back_ios_new"
          style="font-size: 15px"
        />
      </div>
      <div class="col-8">
        <q-item-label style="text-align: center; padding-top: 10px; font-size: 20px"
          >Parada de Bus</q-item-label
        >
      </div>
      <div class="col-2"></div>
    </div>
    <div class="col-12 col-md-auto" style="margin-top: 10px">
      <div class="row justify-between">
        <q-parallax style="" src="https://i.ibb.co/hDhDtLp/Dise-o-sin-t-tulo-36.png">
        </q-parallax>
      </div>
    </div>
    <div class="row-12" style="margin-top: 10px; border-bottom: 5px solid #5900ff">
      <q-intersection>
        <q-item>
          <q-item-section>
            <q-item-label>31 Calle pte, Santa Ana</q-item-label>
            <q-item-label caption lines="3"
              >Destinos: Insa principal, Redondel del palmar, Ministerio de
              eduacion</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
    <div class="row-12" style="margin-top: 10px">
      <div class="row">
        <div class="col-1"></div>
        <div
          class="col-4"
          style="border-bottom: 5px solid purple; margin-bottom: 8px"
        ></div>
        <div
          class="col-2"
          style="text-align: center; font-family: times new roman; font-size: 20px"
        >
          <label> Rutas de buses </label>
        </div>
        <div
          class="col-4"
          style="border-bottom: 5px solid purple; margin-bottom: 8px"
        ></div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="row-12" style="margin-top: 10px">
      <div class="row">
        <div
          class="col-5"
          style="
            background-color: purple;
            border: 5px solid purple;
            text-align: center;
            color: white;
            font-family: times new roman;
            font-size: 20px;
          "
        >
          <label> Nombre de ruta </label>
        </div>
        <div class="col-2" style=""></div>
        <div
          class="col-5"
          style="
            background-color: purple;
            border: 5px solid purple;
            text-align: center;
            color: white;
            font-family: times new roman;
            font-size: 20px;
          "
        >
          <label> Llegada </label>
        </div>
      </div>
    </div>
    <div class="row-12" style="margin-top: 10px">
      <q-intersection
        v-for="index in 5"
        :key="index"
        transition="flip-right"
        style="padding-top: 5px; font-size: 15px"
        class="example-item col-12"
      >
        <q-item>
          <q-item-section avatar>
            <q-icon name="directions_bus" color="black" />
          </q-item-section>
          <q-item-section>
            <q-item-label>R-51B</q-item-label>
            <q-item-label caption lines="3"
              >Destinos: Insa principal, Redondel del palmar</q-item-label
            >
          </q-item-section>
          <q-item-section side>
            <q-item-label
              >5 minutos <q-icon name="schedule" color="primary"
            /></q-item-label>
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
    <div class="row-12" style="margin-top: 10px">
      <div class="col-12">
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
      </div>
    </div>
    <div class="row-12" style="margin-top: 10px; margin-bottom:15px">
        <div class="col-12">
                <q-img src="https://www.superselectos.com/LandingProductos/GetImagen/114?ancho=1349&alto=337&calidad=75" :ratio="300 / 16" />
            </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
