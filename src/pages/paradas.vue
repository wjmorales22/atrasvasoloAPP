<template>
<div class="q-pa-md">
    <q-layout view="lHh Lpr lff">
        <div class="" >
            <div class="row justify-between">

                <q-parallax src="https://pbs.twimg.com/media/FOK3drJXsAIBeBF?format=png&name=small">
                    <h1 class="text-white">Basic</h1>
                </q-parallax>

            </div>
        </div>
        <div class="col-12 col-md-auto" >
            <label class="row justify-center">Paradas cercanas</label>
        </div>
        <hr class="bg-primary" style="" />
        <div class="">
    <div >
      <q-intersection
        v-for="index in 5"
        :key="index"
        transition="flip-right"
        class="example-item"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="directions_bus" color="black" />
          </q-item-section>

          <q-item-section>
            <q-item-label>INSA CALLE PTE</q-item-label>
            <q-item-label caption lines="3">Destinos: Insa principal, Redondel del palmar</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
  </div>
    </q-layout>
</div>
</template>
