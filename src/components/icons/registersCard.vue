<template>
    <div class="carta">
        <h4 class="carta-header">Campaña: {{ registro.campania }}</h4>
        <p><b>Uni Prod:</b> {{ registro.up }}</p>
        <p><b>Lote:</b> {{ registro.lote }}</p>
        <p><b>Actividad:</b> {{ registro.actividad }}</p>
        <p><b>Tipo:</b> {{ registro.codigo }}</p>
        <p><b>Insumo:</b> {{ registro.detalle }}</p>
    </div>
</template>

<script>
export default {
    props: {
        registro: {
            type: Object
        }
    }
};
</script>

<style scoped>
.carta {
    display: flex;
    flex-direction: column;
    border: solid 2px #20512d;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px grey;
    margin-right: 12px;
    margin-bottom: 12px;
    /*min-width: 230px;
    max-width: 260px;*/
    width: 260px;
    box-sizing: border-box;
}

.carta-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #20512d;
    color: #fff;
    margin: 0px 0px;
    padding: 10px 8px;
}

.carta p {
    margin:8px 0px;
    padding: 0px 8px;
    color: var(--vt-c-indigo);
}
</style>