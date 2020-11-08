<template>

  <div>

    <my-shop-cart2 :cart="cart" :total="total"></my-shop-cart2>
    <br>
    <my-shop-item2 v-for="item in items" :key="item.id" :item="item" ></my-shop-item2>
    <button @click="range(25000,5000000,5)">test</button>
  </div>

</template>

<script>
  import MyShopCart2 from "@/components/myshop2/MyShopCart2";
import MyShopItem2 from "@/components/myshop2/MyShopItem2";
  import Banana from '@/assets/img/banana.jpg';
import Orange from '@/assets/img/orange.jpg';
import Apple from '@/assets/img/apple.jpg';
import EventBus from "@/assets/vendor/eventBus";
    export default {
        name: "mshop2",
        components:{
            MyShopCart2:MyShopCart2,
            MyShopItem2:MyShopItem2,
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
          },
            range(start, stop, step=1) {

                console.log(Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step)));

            }
        },
        mounted() {
            EventBus.$on('btn-click', item =>{this.updateCart(item)});

        }
    }
</script>

<style scoped>

</style>
