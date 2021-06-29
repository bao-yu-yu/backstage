<template>
    <div id="app">
        a
    </div>
</template>

<script>

    export default {
        name: 'A',
        props: {
            msg: String
        },
        components: {
        }
    }
</script>

<style scoped>
    html, body{
        padding:0;
        margin:0;
        height: 100%;
        width: 100%;
    }
    #app{
        /*内边距*/
        padding:0;
        /*外边距*/
        margin:0;
        height: 100%;
        width: 100%;
    }


</style>
