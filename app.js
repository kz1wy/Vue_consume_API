new Vue({
    el:'#app',
    //thuoc tinh trong data
    //se phan ung khi gia tri thay doi
    data(){
        return{
            title: 'Countries in The World',
            countries: [],
            country:{},
            view_details:false
        }
    },

    methods:{
        fetchCountries: function(){
            var url = 'https://restcountries.com/v3.1/all';
            //get all data of countries
            axios.get(url).then(res=>{
                this.countries = res.data;
                console.log(this.countries);
            })
        },
        viewDetails: function(cca2){
            let allCountries = this.countries;
            let country = allCountries.filter(country=>country.cca2 == cca2);
            this.country = country;
            this.view_details = true;
        },
        goBack: function(){
            this.view_details = false;
        }
    },

    mounted(){
        this.fetchCountries()
    }
})