<template>
  <div class="q-pa-md">
    <q-img
    src="https://i.ibb.co/7bzT1RH/Mapa.png"
    >
    </q-img>
    <q-layout view="lHh Lpr lff">
       <q-table
      title="Rutas de Santa Ana"
      :data="data"
      :columns="columns"
      row-key="name"
      selection="single"
      :selected.sync="selected"
      no-data-label="Rutas no disponibles"
      :pagination="pagination"
    >
    </q-table>
    </q-layout>
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: [name],
      pagination: {
        sortBy: 'desc',
        rowsPerPage: 0
      },
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Recorrido',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'ruta', align: 'left', label: 'Ruta', field: 'ruta', sortable: true }
      ],
      data: [
        {
          name: 'COL. LAMATEPEC-COL. SANTA MARIA Y VIC',
          ruta: '1 SA Micro'
        },
        {
          name: 'COL. LAS COCINAS - METROCENTRO ( 6º AV. SUR ) Y VIC',
          ruta: '2 SA Micro'
        },
        {
          name: 'COL. COPINOLITO-COL.GUERRA-CENTRO-COL. SAN IGNACIO Y VIC',
          ruta: '3 SA Micro'
        },
        {
          name: 'COL. SAN JOSE-CENTRO-COL. AVILES Y VIC',
          ruta: '4 SA Micro'
        },
        {
          name: 'COLONIA CEL (CANTON NATIVIDAD) - CENTRO - COL. PANADES Y VIC',
          ruta: '5 SA Micro'
        },
        {
          name: 'COL. LOMAS DEL TECANA-COL. SAN MAURICIO Y VIC',
          ruta: '6 SA Micro'
        },
        {
          name: 'COL. SAN CARLOS-COL. RIO ZARCO Y VIC',
          ruta: '7 SA Micro'
        },
        {
          name: 'COL. ALTOS DEL PALMAR (IGLESIA CALEB)-UNICO-COL. ESMERALDA Y VIC',
          ruta: '8 SA Micro'
        },
        {
          name: 'COL. ALTOS DEL PALMAR (IGLESIA CALEB)-SAN MIGUELITO-SAN LORENZO Y VIC',
          ruta: '8 1 SA Micro'
        },
        {
          name: 'COL. ALTOS DEL PALMAR (IGLESIA CALEB)-CENTRO-RESID. EL MOLINO Y VIC',
          ruta: '8 2 SA Micro'
        }
      ]
    }
  }
}
</script>
