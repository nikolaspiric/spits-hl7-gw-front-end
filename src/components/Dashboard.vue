<template>
  <div>
  <div>
  <MySidebar></MySidebar>
</div>
<div class="main">
       <div class="card-body text-center">
    <h4 class="display-4">Configurations Dashboard</h4>
  </div>

       <table class="table table-striped table-bordered ">
  <thead class="thead-dark">
    <tr>
      <th scope="col"><p align="center">ID</p></th>
      <th scope="col"><p align="center">Name</p></th>
      <th scope="col"><p align="center">IP address</p></th>
      <th scope="col"><p align="center">Port</p></th>
      <th scope="col"><p align="center">HL7 protocol version</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
   
	</div>
  </div>
</template>

<script>

import MySidebar from '@/components/MySidebar'

export default{
data(){
return{
  }
},
components: {
MySidebar
}
}

</script>

<style>


.main {
  margin-left: 15%;
  margin-right: 5%;
}

</style>
