import { bookService } from "../services/book-service.js"
import { bookFilter } from "../comps/book-filter.cmp.js"
import { bookList } from "../comps/book-list.cmp.js"
import { bookDetails } from "../comps/book-details.cmp.js"

export default {
    template: `
    <section class="books-container ">
        <book-filter @filtered="filterBook"/>
    <book-details v-if="selectedBook" :currBook = "selectedBook" @closed="selectedBook=null"/>
    <book-list :books="booksToShow" @selected="selectBook"/>
 </section>
`,
    components: {
        bookFilter,
        bookList,
        bookDetails,
    },
    data() {
        return {
            books: null,
            filterBy: '',
            selectedBook: null,
        }
    },
    created() {
        bookService.getBooks().then(books => this.books = books)
    },
    methods: {
        filterBook(filter) {
            console.log(arguments)
            this.filterBy = filter
        },
        selectBook(book) {
            this.selectedBook = book

        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const regex = new RegExp(this.filterBy, "i")
            // console.log(this.books.filter((book) => regex.test(book.title)))
            return this.books.filter((book) => regex.test(book.title))

        },
    },
    mounted() {

    },
};