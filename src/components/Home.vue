<template>
<div>
  <div>
    <MySidebar></MySidebar>
  </div>
  <div>
   <Navbar></Navbar>
  </div>
<div class="card-body text-center">
    <h4 class="display-4">Home screen</h4>
</div>
</div>
</template>

<script>
import MySidebar from '@/components/MySidebar'
import Navbar from '@/components/Navbar'

export default{
data(){
return{
  }
},
components: {
MySidebar,
Navbar

}
}
</script>

<style>

</style>
