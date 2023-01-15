<template>
  <div class="sidebar">
    <ul class="side-menu">
        <li><router-link :to="{ name: 'employee'}">Employee</router-link></li>
        <li><router-link :to="{ name: 'employeecreate'}">Add Employee</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
    name : 'sidebar'
}
</script>

<style>

</style>