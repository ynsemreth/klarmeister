<template>
  <el-header class="navbar">
    <div class="navbar-left">
      <el-menu
        mode="horizontal"
        background-color="#fff"
        text-color="#333"
        active-text-color="#409EFF"
        @select="handleSelect"
        class="menu"
      >
        <el-menu-item index="1">Unser Portfolio</el-menu-item>
        <el-menu-item index="2">So arbeiten wir</el-menu-item>
        <el-sub-menu index="3">
          <template #title>Kundenstimmen</template>
          <el-menu-item index="3-1">Item 1</el-menu-item>
          <el-menu-item index="3-2">Item 2</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    
    <div class="navbar-center">
      <img src="@/assets/logo.png" alt="Logo" class="logo" /> 
    </div>
    
    <div class="navbar-right">
      <el-menu
        mode="horizontal"
        background-color="#fff"
        text-color="#333"
        active-text-color="#409EFF"
        @select="handleSelect"
        class="menu"
      >
        <el-sub-menu index="4">
          <template #title>Team & Karriere</template>
          <el-menu-item index="4-1">Item 1</el-menu-item>
          <el-menu-item index="4-2">Item 2</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="5">Klarmeister</el-menu-item>
        <el-sub-menu index="6">
          <template #title>Weitere Links</template>
          <el-menu-item index="6-1">Item 1</el-menu-item>
          <el-menu-item index="6-2">Item 2</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </el-header>
</template>

<script>

export default {
  setup() {
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      handleSelect,
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@600&display=swap');

.navbar {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 10px; 
  height: 80px;
  border-bottom: 1px solid #ddd;
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
  flex: 1; 
}

.navbar-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}

.logo {
  height: 45px; 
}

.menu {
  flex-grow: 1;
  justify-content: center; 
}

.el-menu-item, .el-sub-menu__title {
  font-family: 'Montserrat', sans-serif;
  padding: 0 15px;
}
</style>
