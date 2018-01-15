

export default {
    name: 'home',
    components: {},
    props: ['text'],
    data () {
        return {
            inputText: this.text
        }
    },
    computed: {  
    },
    mounted () {
    },
    methods: {
        setInputText: _.debounce(function () {
            this.emitTextUpdate()
        }, 200),
        resetInputText: function () {
            this.inputText = ''
            this.emitTextUpdate()
        },
        emitTextUpdate: function () {
            this.$emit('textUpdated', this.inputText)
        }
    }
}
