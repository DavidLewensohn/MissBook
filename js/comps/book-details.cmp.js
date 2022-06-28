import { bookService } from "../services/book-service.js";

export const bookDetails =  {
 template: `
 <section v-if="book" class="book-details-container">
     <h4>{{book.title}}</h4>
     <h5>{{reading}}</h5>
     <h5>{{published}}</h5>
     <h5 :class="priceColor">{{price}} </h5>
     <img v-if="onSale" src="./imges/sale.png" alt="on-Sale" class="saleImg">
     <router-link class="info-btn" to="/book">back</router-link>

</section>
`,
props:['currBook'],
data() {
return {
    book:null,
};
},
created() {
    const { bookId } = this.$route.params
    console.log(bookId)
    bookService.get(bookId)
        .then(book => this.book = book)
},
methods: {
    close(){
        this.book=null
        // this.$emit('closed')
    }
},
computed: {
    reading(){
        if (this.book.pageCount>500) return '> 500 – Long reading'
        else if (this.book.pageCount>200) return '> 200 – Decent Reading'
        else if (this.book.pageCount<100) return '< 200 – Light Reading'
    },
    published(){
        var diff = new Date().getFullYear()-this.book.publishedDate
        if (diff > 10 ) return 'Veteran Book'
        if (diff < 1 ) return 'New!'
    },
    priceColor(){
        if (this.book.listPrice.amount > 50) return 'red'
        if (this.book.listPrice.amount < 20) return 'green'
    },
    price(){
        return new Intl.NumberFormat('en-EN', { style: 'currency', currency: this.book.listPrice.currencyCode }).format(this.book.listPrice.amount)
    },
    onSale(){
        return (this.book.listPrice.isOnSale)
    }
},
mounted() {
    this.book= this.currBook
},
};