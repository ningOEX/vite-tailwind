<template>
  <div>
    <el-container>
      <el-header class="min-h-12 border-b">
        <nav-list></nav-list>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer class="min-h-96 border"></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import navList from "./navList.vue";
</script>
