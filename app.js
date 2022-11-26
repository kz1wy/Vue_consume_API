new Vue({
    el:'#app',
    //thuoc tinh trong data
    //se phan ung khi gia tri thay doi
    data(){
        return{
            title: 'Countries in The World',
            countries: [],
            country:{},
            view_details:false,
            searchValue:''
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
        },
        // search: function(cn){
        //     cn = searchValue;
        //     if(cn.length > 0){
        //         this.countries = countries.filter(country => country.name.common.toLowerCase().includes
        //         (cn.toLowerCase().trim()))
        //     }
        // }
    },
    mounted(){
        this.fetchCountries()
    }

})