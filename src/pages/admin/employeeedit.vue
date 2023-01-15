<template>
    <form @submit.prevent="submit" >
        <label>Employee Name</label>
      <input type="text" name="title" v-model="Emp_Name"  required              
      />
      <label>Employee Last Name</label>
      <input type="text" name="title" v-model="Emp_LastName"  required              
      />
      <label>Employee Phone No</label>
      <input type="text" name="title" v-model="Emp_phoneno"  required              
      />
      <label>Employee Desigination</label>
      <input type="text" name="image" v-model="Emp_Desigination" required
      />
      <button>Save</button>
  </form>
  <form >
    <button  class="btn"><a href="/admin/employee" style="text-decoration: none">Cancel</a></button>
  </form>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  export default {
      name: "employeeedit",
      props: ['id'],
      setup() {
         const Emp_Name = ref(''); 
         const Emp_LastName = ref('');
         const Emp_phoneno = ref('');
         const Emp_Desigination = ref('');
         const router = useRouter();
         const route = useRoute()
         onMounted(async() => {
             const res = await fetch(`http://localhost:3000/employee/${route.params.id}`);
             const employee = await res.json();
             Emp_Name.value = employee.Emp_Name;
             Emp_LastName.value = employee.Emp_LastName;
             Emp_phoneno.value = employee.Emp_phoneno;
             Emp_Desigination.value = employee.Emp_Desigination;
         })
  
         const submit = async () => {
             await fetch(`http://localhost:3000/employee/${route.params.id}`, {
                 method: 'PUT',
                 headers: {"Content-type": "application/json"},
                 body: JSON.stringify({ 
                    Emp_Name: Emp_Name.value,
                    Emp_LastName: Emp_LastName.value,
                    Emp_phoneno: Emp_phoneno.value,
                    Emp_Desigination: Emp_Desigination.value
                  })
             });
  
             await router.push('/admin/employee');
         }
         
         return {Emp_Name, Emp_LastName, Emp_phoneno, Emp_Desigination, submit}
      }
      
  }
  </script>

  <style>
        
</style>