export const bookPreview = {
    props: ['book'],
    template: `
        <h3>{{book.title}}</h3>
        <h5>{{currency}}</h5>
        <img class="book-img" :src="book.thumbnail" alt="book-img">

    `,
    data() {
        return {
         
        }
    },
    created() {
  
     },
    methods: {

    },
    computed: {
        currency(){
            return new Intl.NumberFormat('en-EN', { style: 'currency', currency: this.book.listPrice.currencyCode }).format(this.book.listPrice.amount)
        }
    },
    mounted() { },
};