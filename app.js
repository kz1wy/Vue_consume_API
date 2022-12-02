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
            search_value:null
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
        viewDetails: function(cca2){ //show country details base on its cca2 id
            let allCountries = this.countries;
            let country = allCountries.filter(country=>country.cca2 == cca2);
            this.country = country;
            this.view_details = !this.view_details;
        },
        goBack: function(){
            this.view_details = !this.view_details;
        },
        search: function(){
            if(this.search_value.length>0){
                this.countries = this.countries.filter((item)=> 
                item.name.common.toLowerCase().includes(this.search_value.toLowerCase()))
                this.search_value = '';
                if(this.countries.length == 0){
                    setTimeout(() => this.fetchCountries(), 1500);
                }
            }
            else{
                this.countries = this.fetchCountries();
            }
        }
    },
    // watch: {
    //     search: function(){
    //         if(this.search_value.length>0){
    //             this.countries = this.countries.filter((item)=> 
    //             item.name.common.toLowerCase().includes(this.search_value.toLowerCase()));
                
    //         }
            
    //     }
    // },
    // computed:{
    //     resultQuery(){
    //         if(this.search_value.length>0){
    //             this.countries = this.countries.filter((item)=> 
    //             item.name.common.toLowerCase().includes(this.search_value.toLowerCase()))  
    //         }
    //     }
    // },

    mounted(){
        this.fetchCountries()
        
    }

})
//trigger button with enter
var input = document.getElementById("userInput");
input.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("go").click();
    }
});
