<script>
export default {
    name: 'GenUUID',
    methods: {
        genUUID(event) {
            let url = URL.createObjectURL(new Blob());
            event.currentTarget.querySelector('.my-uuid').innerText = url.split('/')[3];
            URL.revokeObjectURL(url);
        }
    }
}
</script>
<template>
    <button @click="genUUID($event)">Click to Generate a UUID: <span class='my-uuid'></span></button>
</template>
<style scoped>
    button {
        padding: 1rem;
    }
    button * {
        font-weight: bold; 
        font-size: 18px;
    }
</style>