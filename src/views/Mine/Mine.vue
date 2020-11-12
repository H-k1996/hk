<template>
  <div id="main">
    <Header title="我的神影"></Header>
    <div id="content">
      <Login></Login>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from "../../components/Header/Header";
import TabBar from "../../components/TabBar/TabBar";
import Login from "../../components/Login/Login";
export default {
  components: {
    Header,
    TabBar,
    Login
  },
};
</script>