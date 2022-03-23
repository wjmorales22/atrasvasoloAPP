<template>
  <q-layout view="lHh Lpr lff">
    <!-- Encabezado + btn "Agregar" -->
    <div class="q-pa-md doc-container">
      <div class="row justify-center">
        <div class="col-4">
          <span class="text-weight-bolder text-h5">Administrar Usuarios</span>
        </div>
        <div class="col-2">
          <div class="col" text-xs-right>
            <q-btn
             clickable
              v-ripple
              to="/admin/addusuario"
              label="Agregar" name="btnAgregar" color="primary"
              icon="class"
            >
            </q-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- Titulo "Usuarios colaboradores" + buscador -->
    <q-intersection>
      <q-item>
        <q-item-section avatar>
          <q-icon name="manage_accounts" color="black" />
        </q-item-section>
        <q-item-section>
          <span class="text-weight-bolder text-h6">Usuarios colaboradores</span>
        </q-item-section>
        <q-item-section side>
          <q-input filled placeholder="Buscar colaborador">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>
    </q-intersection>

    <!-- Nombre de usuarios colaboradores + opciones "borrar" "editar" -->
    <div class="q-pa-md">
      <q-intersection>
        <q-item clickable v-ripple to="#">
          <q-item-section avatar>
            <q-icon name="perm_identity" color="black" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Juanastacio Primordial</q-item-label>
          </q-item-section>
          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="14px" flat dense round icon="delete">
                <q-tooltip content-class="bg-negative">Borrar</q-tooltip>
              </q-btn>
              <q-btn
                class="gt-xs"
                size="14px"
                flat
                dense
                round
                icon="ion-create"
              >
                <q-tooltip content-class="bg-indigo">Editar</q-tooltip>
              </q-btn>
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
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="14px" flat dense round icon="delete">
                <q-tooltip content-class="bg-negative">Borrar</q-tooltip>
              </q-btn>
              <q-btn
                class="gt-xs"
                size="14px"
                flat
                dense
                round
                icon="ion-create"
              >
                <q-tooltip content-class="bg-indigo">Editar</q-tooltip>
              </q-btn>
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
            <q-item-label>Pedro Parker</q-item-label>
          </q-item-section>
          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="14px" flat dense round icon="delete">
                <q-tooltip content-class="bg-negative">Borrar</q-tooltip>
              </q-btn>
              <q-btn
                class="gt-xs"
                size="14px"
                flat
                dense
                round
                icon="ion-create"
              >
                <q-tooltip content-class="bg-indigo">Editar</q-tooltip>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>

    <q-intersection>
      <q-item>
        <!-- Titulo "Usuarios públicos" + buscador -->
        <q-item-section avatar>
          <q-icon name="manage_accounts" color="black" />
        </q-item-section>
        <q-item-section>
          <span class="text-weight-bolder text-h6">Usuarios públicos</span>
        </q-item-section>

        <q-item-section side>
          <q-input filled placeholder="Buscar usuario público">
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

    <!-- Nombre de usuarios colaboradores + opciones "borrar" "editar" -->
    <div class="q-pa-md">
      <q-intersection>
        <q-item clickable v-ripple to="#">
          <q-item-section avatar>
            <q-icon name="perm_identity" color="black" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Camilo Octavo</q-item-label>
          </q-item-section>
          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="14px" flat dense round icon="delete">
                <q-tooltip content-class="bg-negative">Borrar</q-tooltip>
              </q-btn>
              <q-btn
                class="gt-xs"
                size="14px"
                flat
                dense
                round
                icon="ion-create"
              >
                <q-tooltip content-class="bg-indigo">Editar</q-tooltip>
              </q-btn>
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
            <q-item-label>Pedro Castro</q-item-label>
          </q-item-section>
          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="14px" flat dense round icon="delete">
                <q-tooltip content-class="bg-negative">Borrar</q-tooltip>
              </q-btn>
              <q-btn
                class="gt-xs"
                size="14px"
                flat
                dense
                round
                icon="ion-create"
              >
                <q-tooltip content-class="bg-indigo">Editar</q-tooltip>
              </q-btn>
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
            <q-item-label>Ronaldo Rubio</q-item-label>
          </q-item-section>
          <q-item-section side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="14px" flat dense round icon="delete">
                <q-tooltip content-class="bg-negative">Borrar</q-tooltip>
              </q-btn>
              <q-btn
                class="gt-xs"
                size="14px"
                flat
                dense
                round
                icon="ion-create"
              >
                <q-tooltip content-class="bg-indigo">Editar</q-tooltip>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
  </q-layout>
</template>
