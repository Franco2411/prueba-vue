<template>
    <div class="contenedor-registro">
        <ul>
            <li><b>UP:</b> {{ listaRegistro.up }} - <b>Lote:</b> {{ listaRegistro.lote }} - <b>Actividad:</b> {{ listaRegistro.actividad }} - <b>Tipo:</b> {{ listaRegistro.codigo }} - <b>Insumo:</b> {{ listaRegistro.detalle }} - <b>Cantidad:</b> {{ listaRegistro.cant }} - </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: visorRegistro,
    props: {
        listaRegistro: {
            type: Object
        }
    }
    
}
</script>

<style scoped>

</style>