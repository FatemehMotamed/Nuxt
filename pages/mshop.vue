<template>

  <div>

    <my-shop-cart :cart="cart" :total="total"></my-shop-cart>
    <br>
    <my-shop-item v-for="item in items" :key="item.id" :item="item" @update-cart="updateCart"></my-shop-item>
  </div>

</template>

<script>
  import MyShopCart from "@/components/myshop/MyShopCart";
import MyShopItem from "@/components/myshop/MyShopItem";
  import Banana from '@/assets/img/banana.jpg';
import Orange from '@/assets/img/orange.jpg';
import Apple from '@/assets/img/apple.jpg';
    export default {
        name: "mshop",
        components:{
            MyShopCart:MyShopCart,
            MyShopItem:MyShopItem,
        },
        data() {
        return {
            items: [
                {
                    id: 205,
                    name: 'Banana',
                    price: 1,
                    imageSrc: Banana
                },
                {
                    id: 148,
                    name: 'Orange',
                    price: 2,
                    imageSrc: Orange
                },
                {
                    id: 248,
                    name: 'Apple',
                    price: 1,
                    imageSrc: Apple
                }
            ],
            cart: [],
            total: 0
        }
    },

        methods:{
          updateCart(new_item_cart){
              this.cart.push(new_item_cart);
              console.log(this.cart)

          }
        },
    }
</script>

<style scoped>

</style>
