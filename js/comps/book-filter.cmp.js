export const bookFilter = {

template:`
<section class="input">
    <input type="text" v-model="filterBy" 
    @input="filter"  placeholder="Search Book">
</section>
`,
data() {
    return {
        filterBy: '',
    }
},
created() { },
    methods: {
        filter(){
            this.$emit("filtered", this.filterBy)
        },
    },
    computed: {},
    unmounted() { },
};