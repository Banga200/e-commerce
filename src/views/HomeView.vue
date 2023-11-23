<script setup>
import FilterFeilds from '../components/FilterFeilds.vue';
import Product from '../components/Product.vue';
import Loading from '../components/Loading.vue'
import { useProductsStore } from '../stores/products';
import { computed } from 'vue';
import { ref, watch } from 'vue'
const store = useProductsStore();
const search = ref('');
const selected = ref('');
// Filter by Searching 
const filterSeach = computed(() => {
  if (store.getProducts) {
    return store.getProducts.filter((product) => {
      return product.title.toLowerCase().includes(search.value.toLowerCase())
    })
  }
})
// Watches 
// watch select field value
watch(selected, (newValue, oldSelected) => {
  if (newValue == 0) {
    unsort()
  }

  if (newValue === 'price') {
    sortByPrice(newValue)
  }
  else if (newValue === 'title') {
    sortByTitle(newValue)
  }
})
// Undo sorting 
function unsort() {
  store.getProducts.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
}
// Sort By Name 
function sortByTitle() {
  store.getProducts.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
}
// Sort By Price 
function sortByPrice() {
  store.getProducts.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
}
</script>

<template>
  <main>
    <div>
      <h1>Products</h1>
      <FilterFeilds v-model:search="search" v-model:selected="selected" />
      <hr />
      <TransitionGroup tag="ul" name="list" class="grid" appear>

        <Product v-for="(product) in filterSeach" :key="product.id" :image="product.image" :title="product.title"
          :description="product.description" :price="product.price" />

      </TransitionGroup>
      <!-- Loading  -->
      <Loading v-if="store.isLoading"/>
    </div>
  </main>
</template>
