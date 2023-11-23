<script setup>
const props = defineProps(['image','title', 'description', 'price'])
</script>
<template>
    <li class="card">
        <div class="image_container">
            <img :src="props.image"/>
        </div>
        <div class="content">
            <h3>{{ props.title.substring(0, 40) + '...'  }}</h3>
            <p>{{ props.description.substring(0, 40) + '...' }}</p>
            <div class="price_container">
                <h1>${{props.price}}</h1>
            </div>
        </div>
    </li>
</template>