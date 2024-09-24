<template>
  <el-header class="navbar">
    <div class="navbar-left" v-show="!isMobile">
      <el-menu mode="horizontal" text-color="#333" active-text-color="#409EFF" @select="handleSelect" class="menu">
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

    <div class="navbar-right" v-show="!isMobile">
      <el-menu mode="horizontal" text-color="#333" active-text-color="#409EFF" @select="handleSelect" class="menu">
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

    <!-- Hamburger Menu for Mobile -->
    <div class="navbar-hamburger" v-show="isMobile" @click="toggleMobileMenu">
      <el-icon><Menu /></el-icon>
    </div>

    <!-- Mobile Menu Dropdown -->
    <el-drawer title="Menu" v-model="drawerVisible" direction="rtl" size="80%">
      <el-menu default-active="1" class="mobile-menu" @select="handleSelect">
        <el-menu-item index="1">Unser Portfolio</el-menu-item>
        <el-menu-item index="2">So arbeiten wir</el-menu-item>
        <el-sub-menu index="3">
          <template #title>Kundenstimmen</template>
          <el-menu-item index="3-1">Item 1</el-menu-item>
          <el-menu-item index="3-2">Item 2</el-menu-item>
        </el-sub-menu>
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
    </el-drawer>
  </el-header>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu } from '@element-plus/icons-vue'; // Ensure this is correctly imported

export default {
  setup() {
    const isMobile = ref(false);
    const drawerVisible = ref(false);

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    const toggleMobileMenu = () => {
      drawerVisible.value = !drawerVisible.value;
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkMobile);
    });

    return {
      isMobile,
      drawerVisible,
      toggleMobileMenu,
      Menu, // Return the Menu icon
    };
  },
};
</script>

<style>
/* Main Navigation Bar */
.navbar {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 50px;
  border-bottom: 1px solid #ddd;
  cursor: url('@/assets/cursor.png'), auto;
  background-color: white;
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

.el-menu-item,
.el-sub-menu__title {
  font-family: 'Montserrat', sans-serif;
  padding: 0 15px;
}

/* Hamburger Icon */
.navbar-hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 20px;
  z-index: 101;
}

/* Mobile View Settings */
@media (max-width: 768px) {
  .navbar-left,
  .navbar-right {
    display: none;
  }

  .navbar-hamburger {
    display: block;
  }

  .logo {
    height: 35px;
  }

  .mobile-menu {
    width: 100%;
  }
}
</style>
