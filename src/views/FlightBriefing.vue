<template>
    <div>
        <div v-if="error" class="text-red-300 ml-2">{{error}}</div>
        <div>
            <input class="border rounded m-2" type="text" v-model="input">
            <button class="border rounded p-2 m-2 hover:bg-blue-300 hover:text-white" @click.prevent="getURL" >Submit</button>
            <button class="border rounded p-2 m-2 hover:bg-blue-300 hover:text-white" @click.prevent="clearForm">Clear Form</button>
        </div>
        <div v-if="url">
            <iframe v-bind:src=forceHTTPS height="600px" width="600px"></iframe>
        </div>

    </div>
</template>

<script>
    import Simbrief from '../classes/Simbrief.js';

    export default {
        name: 'FlightBriefing',
        data: function () {
            return {
                username: '',
                input: '',
                error: '',
                url: ''
            }
        },
        methods: {
            async getURL () {
                this.error = '';
                if (!this.input){
                    this.error = 'Please input a username';
                    return
                }
                await Simbrief.getURL(this.input)
                    .then((data) => {
                        if (data instanceof Error){
                            this.error = data.message;
                            return
                        }
                        this.url = data
                    });
            },
            clearForm(){
                this.error = '';
                this.username = '';
                this.input = '';
                this.url = '';
            }
        },
        computed: {
            forceHTTPS: function () {
                return this.url.replace(/^http:\/\//i, 'https://')
            }
        }
    }
</script>

<style scoped>

</style>
