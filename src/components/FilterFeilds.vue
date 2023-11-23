<script setup>
import SearchIcon from './Icons/IconSearch.vue';
import {ref} from 'vue';



</script>
<template>
    <div class="filters__container">
        <div class="search_container">
            <input placeholder="Search for products" @input="$emit('update:search', $event.target.value)" />
            <SearchIcon width="25px"/>
        </div>
        <select @change="$emit('update:selected', $event.target.value)" >
            <option value="" disabled selected hidden>Sort By</option>
            <option value="0">Reset</option>
            <option value="title">Name</option>
            <option value="price">Price</option>
        </select>
    </div>
</template>