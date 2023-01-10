<template>
    <router-link :to="{ name: 'employeecreate'}" class="btn">Add Employee</router-link>
      <table>
        <thead>
          <tr>
            <th>Emp_id</th>
            <th>Emp_Name</th>
            <th>Emp_LastName</th>
            <th>Emp_Phone No</th>
            <th>Emp_Desigination</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employee" :key="employee.id">
            <td>{{employee.id}}</td>
            <td>{{employee.Emp_Name}}</td>
            <td>{{employee.Emp_LastName}}</td>
            <td>{{employee.Emp_phoneno}}</td>
            <td>{{employee.Emp_Desigination}}</td>
            <td>
              <router-link :to="{ name: 'employeeedit', params: { id: employee.id }}" class="btn">Edit</router-link>
              <button @click="del(employee.id)" class="btn btn-del">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    
    <script>
    import {onMounted, ref} from 'vue';
    
    export default {
      name: 'employee',
      setup() {
        const employee = ref([]);
    
        onMounted( async () => {
          const res = await fetch('http://localhost:3000/employee');
    
          employee.value = await res.json();
        })
    
        const del = async (id) => {
          await fetch(`http://localhost:3000/employee/${id}`, {
            method: 'DELETE'
          })
    
          employee.value = employee.value.filter(p => p.id !== id);
        }
    
        return { employee, del }
      }
    }
    </script>