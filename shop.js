Vue.component("product", {
  props: {  //variables that have values passed from the parent
    //name of item
    name:{
     type: String  
    },
    //amount of item in stock
    qty:{
     type: Number
    },
    //amount of items in cart
    cart:{
     type: Number
    }
  },
  //html in component
  template: `
     <div class="product">
     
       <div class="product-image">
		  <img id="product-pic" :src="image">
       </div>
        
        <div class="product-info">
            <h1>{{ name }}</h1> 
            
            <!--message displayed is based on quantity-->
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            
            <!--When quantity=0, the font color of the quantity is red.-->
            
            <p>Amount in stock: 
            <span :style=" { color: (inStock ? '': 'red') }"> {{ quantity }} </span> </p>
            
            <!-- Cart is updated when the user presses the + or - button -->
            <p>Amount in cart: {{ this.productCart }} </p>
            
     
  			<!-- Button disabled when inStock is false- quantity=0-->
            <button v-on:click="addToCart" 
              :disabled="!inStock"
              >+
            </button>
             
            <!--button is disabled when the cart is empty-->
            <button @click="removeFromCart"
             :disabled="empty">-</button>  
         </div>  
        </div>
      </div>`,
  data() {
    return {	
      quantity: this.qty,
      productCart: 0 //initialized to 0
    };
  },
  methods: {
    addToCart: function () {
      this.quantity-=1; //qty decreases as user adds items to cart
      this.productCart+=1; //amnt in cart increases as user adds to cart
      this.$emit("add-to-cart"); //emit function to cause response in parent
      
    },
    removeFromCart: function () {
      this.quantity += 1;  //qty increases removes items from cart 
      this.productCart-=1;  //amount in cart decreases as user removes items from cart
      this.$emit("remove-from-cart"); //emit function to cause response in parent
    }
  },
  computed: { 
    inStock() {  //Boolean var based on quantity
      if (this.quantity > 0){
      	return true;
      }
      else{ 
      	return false;
      }
     },
      empty() {  //Boolean var based on amount in cart
            if (this.productCart >  0) {
              return false;
            }
            else{
              return true;
          }
        },
     image() {
     	if (this.name == "Hat") {
     		return image='picture/hat.png';
     	}
     	else if (this.name == "Tote Bag") {
     		return image='picture/bag.png';
     	}
     	else if (this.name == "Shirt") {
     		return image='picture/shirt.png';
     	}
     	else if (this.name == "Beer Mug") {
     		return image='picture/mug.png';
     	}
     }   
    }
  });

//Vue instance
var app = new Vue({
  el: "#app",
  data: {
  	pageTitle: "Fighting Fish",
    cart: 0  //initialized to 0- nothing in cart yet
  },
  methods: { 
  	//response to emission when + button in component is pressed
    updateCart() {
      this.cart+=1;
    },
    
    //response to emission when - button in component is pressed
    removeItem() {
      this.cart-=1;
    }
  }
});