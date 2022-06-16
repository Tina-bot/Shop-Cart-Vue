var app = new Vue({
    el: '#app',
    data: {
        products: [{
            name: 'Cookie 🍪',
            price: '$50',
            quantity: 0,
            totalPriceProduct: 0
        }, {
            name: 'Cake 🍰',
            price: '$250',
            quantity: 0,
            totalPriceProduct: 0
        }, {
            name: 'Milk 🥛',
            price: '$100',
            quantity: 0,
            totalPriceProduct: 0
        }, {
            name: 'Donut 🍩',
            price: '$200',
            quantity: 0,
            totalPriceProduct: 0
        }, {
            name: 'Cupcake 🧁',
            price: '$500',
            quantity: 0,
            totalPriceProduct: 0
        }, {
            name: 'Croissant 🥐',
            price: '$75',
            quantity: 0,
            totalPriceProduct: 0
        }
        ],
        cart: [],
        total: 0,
        finished: false
    },
    methods: {
        addProductCart(product) {
            if (product.quantity <= 0) {
                this.cart.push(product);
            }
            this.total += Number(product.price.replace('$', ''));
            product.quantity++;
            product.totalPriceProduct = product.quantity * Number(product.price.replace('$', ''));
        },
        removeProductCart(product) {
            this.total -= Number(product.price.replace('$', ''));
            product.quantity--;
            product.totalPriceProduct = product.quantity * Number(product.price.replace('$', ''));
            if (product.quantity === 0) {
                this.cart.splice(this.cart.indexOf(product), 1);
            }
        },
        clearCart() {
            this.cart.forEach(product => {
                product.quantity = 0;
                product.totalPriceProduct = 0;
            });
            this.total = 0;
            this.cart = [];
        },
    },
    computed: {
        totalPrice() {
            return this.total;
        }
    }
});