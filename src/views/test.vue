<template>
    <div>
       
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
      return{

      }
    },
  mounted() {
    this.getList()
  },
    methods:{
          getList() {
      axios
          .get("https://saswrafod.ge/json/")
          .then((response) => {
            console.log(response);
            //console.log(response.data.data);

          })
          .catch((error) => {
            console.log(error);
          });
    },
    }
}
</script>