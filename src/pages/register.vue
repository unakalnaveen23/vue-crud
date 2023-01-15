<template>
    <div class="main_container">
  <div class="container">
    <h1 id="login">REGISTER</h1>

    <h4 id="user">User Name</h4>
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Username"
      required
    />

    <h4 id="pwd">New Password</h4>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      required
    />
    <h4 id="pwd">Confirm Password</h4>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      required
    />

    <a href="/admin/employee"><button id="submit">Submit</button></a>
  </div>
</div>
</template>

<script>
export default {
    name: "login",
}
</script>

<style lang="css" scoped>
.main_container{
    margin-top: 40px;
}
.container {
  max-width: 350px;
  display: block;
  background-color: rgb(171, 231, 234);
  border: rgb(0, 14, 13) 5px solid;
  width: 100%;
  margin: auto;
  padding: 20px 40px;
}
#login {
  text-align: center;
  padding: 20px 20px;
  text-decoration: underline;
}
#user {
  padding: 10px 0;
}
#pwd {
  padding: 10px 0;
}
#submit {
  margin: 20px 10px;
}
</style>