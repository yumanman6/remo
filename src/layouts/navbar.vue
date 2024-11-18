<template>
  <Navbar
      expand="lg"
      background-color="body-tertiary"
  >
    <Container type="fluid" class="px-4">
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarBrand>
          <img src="@/assets/images/logo.png" alt="">
        </NavbarBrand>
        <NavbarNavList margin="e-auto b-2 b-lg-0">
          <NavItem>
            <NavLink active>
              關於我們
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>債務一筆清</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>樓宇按揭</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>私人貸款</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>常見問題</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>博客</NavLink>
          </NavItem>
          <NavItem>
            <a href="#"><img src="@/assets/images/btn.png" alt=""></a>
          </NavItem>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
<script setup lang="ts">
</script>

<style scoped>
/* 确保导航栏内容两边有间隔 */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: 15px; /* 控制菜单项之间的间隔 */
}
.navbar-nav a {
  padding-left: 15px;
  padding-right: 15px;
}
</style>