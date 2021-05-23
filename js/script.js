const app = new Vue({

    el: "#app",
    data: {

        mail: 0,

    },

    mounted() {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(resp => {
                console.log(resp.data.response);
                this.mail = resp.data.response;
            })
            .catch(err => {
                console.log(err);
            })
    }
});