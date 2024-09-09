<template>
    <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComp"
}
</script>

<style scoped>
.card {
    width: 18rem;
    margin: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card img {
    width: 100%;
    height: auto;
}
.card-body {
    padding: 1rem;
}
.card-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
}
</style>