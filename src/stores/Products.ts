import { defineStore } from "pinia";

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  isAdded?: boolean;
  isFavorite?: boolean;
}

interface State {
  items: Product[];
  isLoading: boolean;
}

export const useProductsStore = defineStore("products", {
  state: (): State => ({ items: [], isLoading: true }),
  actions: {
    async fetchItems() {
      this.isLoading = true;

      const res = await fetch(
        "http://localhost:3000/items"
      );
      if (res.ok) {
        this.items = await res.json();
      }

      this.isLoading = false;
    },
  },
});
