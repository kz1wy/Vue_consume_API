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
            searchValue:null
        }
    },
     
    methods:{
        fetchCountries: function(){
            var url = 'https://restcountries.com/v3.1/all';
            //get all data of countries
            axios.get(url).then(res=>{
                this.countries = res.data;
                // console.log(this.countries);
            })
        },
        viewDetails: function(cca2){
            let allCountries = this.countries;
            let country = allCountries.filter(country=>country.cca2 == cca2);
            this.country = country;
            this.view_details = !this.view_details;
        },
        goBack: function(){
            this.view_details = !this.view_details;
        },
        search: function(){
            if(this.searchValue.length>0){
                this.countries = this.countries.filter((item)=> 
                item.name.common.toLowerCase().includes(this.searchValue.toLowerCase()))  
            }
        }
    },
    // computed:{
    //     resultQuery(){
    //         if(this.searchValue.length>0){
    //             this.countries = this.countries.filter((item)=> 
    //             item.name.common.toLowerCase().includes(this.searchValue.toLowerCase()))  
    //         }
    //     }
    // },

    mounted(){
        this.fetchCountries()
    }

})