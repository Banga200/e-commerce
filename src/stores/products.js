import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("product", () => {
  // states
  let products = ref([]);
  let loading = ref(false);
  // getters
  const getProducts = computed(() => {
    return products.value;
  });
  const isLoading = computed(() => {
    return loading.value
  })
  // actions
  async function getAllProducts() {
    loading.value = true;
    try {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => (products.value = data));
      loading.value = false;
    } catch (error) {
      console.log(error);
      loading.value = false;
    }
  }
  return { products, getAllProducts, getProducts, isLoading};
});
