<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import IntroPage from "./components/IntroPage.svelte";
  import Register from "./components/Register.svelte";
  import Login from "./components/Login.svelte";
  import Dashboard from "./components/Dashboard.svelte";
</script>

<main>
  <Router>
    <Route path="/">
      <IntroPage />
    </Route>
    <Route path="register">
      <Register />
    </Route>
    <Route path="login">
      <Login />
    </Route>
    <Route path="dashboard">
      <Dashboard />
    </Route>
  </Router>
</main>
