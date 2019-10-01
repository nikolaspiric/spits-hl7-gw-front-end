<template>
  <div class="main">
    <div>
     <MySidebar></MySidebar>
    </div>
  <div>
   <Navbar></Navbar>
  </div>
<div class="dashboard">
  <div class="card-body text-center">
    <h4 class="display-4">Configurations Dashboard</h4>
  </div>
  <br>
 <nav class="nav">
  <a class="nav-link disabled" href="#">Add new: </a>
  <button type="button" class="btn btn-outline-success">Add</button>
  <a class="nav-link disabled" href="#">Edit:</a>
  <button type="button" class="btn btn-outline-secondary">Edit</button>
  <a class="nav-link disabled" href="#">Delete:</a>
  <button type="button" class="btn btn-outline-danger">Delete</button>
</nav>
<br>
<br>
       <table class="table table-striped table-bordered ">
  <thead class="thead-light">
    <tr>
      <th scope="col"><p class="lead" align="center">ID</p></th>
      <th scope="col"><p class="lead" align="center">Name</p></th>
      <th scope="col"><p class="lead" align="center">IP address</p></th>
      <th scope="col"><p class="lead" align="center">Port</p></th>
      <th scope="col"><p class="lead" align="center">HL7 protocol version</p></th>
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

.dashboard {
  margin-left: 15%;
  margin-right: 5%;
}

</style>
