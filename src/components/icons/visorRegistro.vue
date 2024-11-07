<template>
    <div class="contenedor-registro">
        <ul>
            <li><b>UP:</b> {{ registro.up }} - <b>Lote:</b> {{ registro.lote }} - <b>Actividad:</b> {{ registro.actividad }} - <b>Tipo:</b> {{ registro.tipo }} - <b>Insumo:</b> {{ registro.insumo }} - <b>Cantidad:</b> {{ registro.cant }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'visorRegistro',
    props: {
        registro: {
            type: Object
        }
    }
    
}
</script>

<style scoped>
    .contenedor-registro {
        display: flex;
        flex-direction: column;
        max-width: 100%;
    }

    .contenedor-registro ul {
        padding: 0px;
        max-width: 100%;

    }

    /*.contenedor-registro ul li {
        font-size: small;
    }*/
</style>