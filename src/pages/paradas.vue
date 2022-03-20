<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff">
      <div class="col-12 col-md-auto" style="border: solid">
        <div class="row justify-between">
          <q-parallax style="" src="https://i.ibb.co/hDhDtLp/Dise-o-sin-t-tulo-36.png"> </q-parallax>
        </div>
      </div>
      <div class="col-12 col-md-auto" style="padding-top: 10px">
        <label
          style="font-family: 'Bebas Neue', cursive; font-size: 30px"
          class="row justify-center"
          >Paradas cercanas</label
        >
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <hr class="bg-primary" style="border-width: 1.5px" />
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row-12">
        <div>
          <q-intersection
            v-for="index in 5"
            :key="index"
            transition="flip-right"
            style="padding-top: 5px"
            class="example-item"
          >
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="directions_bus" color="black" />
              </q-item-section>

              <q-item-section>
                <q-item-label>INSA CALLE PTE</q-item-label>
                <q-item-label caption lines="3"
                  >Destinos: Insa principal, Redondel del palmar</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-icon name="arrow_forward_ios" color="primary" />
              </q-item-section>
            </q-item>
          </q-intersection>
        </div>
      </div>
      <div class="row" style="margin-top: 15px">
        <div class="col-12">
          <q-img
            src="https://www.superselectos.com/LandingProductos/GetImagen/114?ancho=1349&alto=337&calidad=75"
            :ratio="300 / 16"
          />
        </div>
      </div>
    </q-layout>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
</style>
