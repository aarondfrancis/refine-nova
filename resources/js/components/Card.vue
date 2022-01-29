<template>
    <div>
        <query-builder @keydown.native.enter='submit' v-model='filter.blueprint' :conditions='filter.conditions' />
        <div class='text-right'>
            <button @click.prevent='submit' class='btn btn-default btn-primary'>Filter</button>
        </div>
    </div>
</template>

<script>
    import QueryBuilder from './tailwind/query-builder/query-builder';

    export default {
        props: [
            'card', 'resourceName'
        ],

        components: {
            QueryBuilder
        },

        data() {
            return {
                filter: _.toPlainObject(this.card.filter),
            }
        },

        mounted() {
            // When the page initially loads, we only want to update from
            // the stable ID if there is an ID. Otherwise we will just
            // show the blueprint that the backend has provided.
            let id = _.get(this, `$route.query.${this.refineParameterName}`)

            if (id) {
                this.updateFromStableId(id)
            }
        },

        computed: {
            refineParameterName() {
                return `${this.resourceName}_refine`;
            }
        },

        watch: {
            $route(to, from) {
                if (to.query[this.refineParameterName] !== from.query[this.refineParameterName]) {
                    this.updateFromStableId(to.query[this.refineParameterName], true);
                }
            },
        },

        methods: {
            updateFromStableId(id, refresh = false) {
                let promise;

                if (!id) {
                    this.filter.blueprint = [];
                    promise = Promise.resolve();
                } else {
                    promise = Nova.request()
                        .post('/nova-vendor/refine-nova/destabilize', {id})
                        .then(({data}) => {
                            this.filter.blueprint = data.blueprint;
                        });
                }

                if (refresh) {
                    promise.then(() => Nova.$emit('refresh-resources'));
                }
            },

            submit() {
                Nova.request()
                    .post('/nova-vendor/refine-nova/stabilize', {
                        type: this.filter.type,
                        blueprint: this.filter.blueprint,
                    })
                    .then(({data}) => {
                        this.updateQueryString({
                            // Reset to the first page, just like Nova does when
                            // a user changes a filter.
                            [`${this.resourceName}_page`]: 1,
                            [this.refineParameterName]: data.id
                        });

                        Nova.$emit('refresh-resources');
                    })
            },

            updateQueryString(value) {
                this.$router.push({query: _.defaults(value, this.$route.query)})
                    .catch(error => {
                        if (error.name != "NavigationDuplicated") {
                            throw error;
                        }
                    });
            }
        },

    }
</script>
