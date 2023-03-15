import { isEqual, toPlainObject, defaults } from 'lodash'

export default {
  props: {
    condition: {
      required: true,
      type: Object,
    },
    clause: {
      required: true,
      type: Object,
    },
    input: {
      required: true,
      type: Object,
    },
  },

  emits: ['update:input'],

  watch: {
    input: {
      deep: true,
      immediate: true,
      handler(val) {
        this.prepareInput(val)
      },
    },
    'input.clause': {
      handler() {
        this.onClauseChange()
      },
    },
  },

  methods: {
    prepareInput(val) {
      let modified = defaults(toPlainObject(val), this.defaults())
      modified = this.modifyInput(val)

      if (!isEqual(this.input, modified)) {
        this.$emit('update:input', modified)
      }
    },

    meta(key, def) {
      return this.clause.meta?.hasOwnProperty(key) ? this.clause.meta[key] : def
    },

    onClauseChange() {
      //
    },

    modifyInput(val) {
      return val
    },

    defaults() {
      return {
        // If an input component requires any keys,
        // it should implement this method with
        // key value pairs of defaults.
      }
    },

    changeInput(key, value) {
      this.$emit('update:input', {
        ...this.input,
        [key]: value,
      })
    },
  },
}
