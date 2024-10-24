<template>
    <div class="carta">
        <h4 class="carta-header"><b class="negrita">Campaña:</b>{{ registro.campania }}</h4>
        <p><b class="negrita">Uni Prod:</b> {{ registro.up }}</p>
        <p><b class="negrita">Lote:</b> {{ registro.lote }}</p>
        <p><b class="negrita">Actividad:</b> {{ registro.actividad }}</p>
        <p><b class="negrita">Tipo:</b> {{ registro.codigo }}</p>
        <p><b class="negrita">Insumo:</b> {{ registro.detalle }}</p>
        <p><b class="negrita">Cantidad:</b> {{ registro.cant }}</p>
        <p><b class="negrita">Fecha:</b> {{ registro.fecha }}</p>
        <p><b class="negrita">Usuario:</b> {{ registro.usuario }}</p>
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
    background-color: var(--color-background-soft);
    /*box-shadow: 2px 2px grey;*/
    margin-right: 12px;
    margin-bottom: 12px;
    /*min-width: 230px;
    max-width: 260px;*/
    width: 260px;
    max-height: 370px;
    box-sizing: border-box;
}

.carta-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--vt-c-primaryColor);
    color: #fff;
    margin: 0px 0px;
    padding: 10px 8px;
}

.carta p {
    margin:8px 0px;
    padding: 0px 8px;
    color: var(--color-heading);
}

.negrita {
    font-weight: bold;
}

@media (max-width: 550px) {
    .carta {
        width: 100%;
    }
}
</style>