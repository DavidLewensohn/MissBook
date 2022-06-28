import { bookPreview } from "../comps/book-preview.cmp.js"


export const bookList = {
    props: ['books'],
    template: `
    <section v-for="book in books" 
    @click="onSelect(book)" class="book-container">
    <router-link class="info-btn" :to="'/book/'+book.id">Details</router-link>
        <book-preview :book="book"/>
</section> 
    `,

    components: {
        bookPreview,
    },

    data() {
        return {
            book: null,
        }
    },

    created() { },
    methods: {
        onSelect(book) {
            this.$emit('selected', book)
            this.book= book
        }
    },
    computed: {},
    unmounted() { },

}