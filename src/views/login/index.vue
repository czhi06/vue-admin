<template>
  <div class="login-container">
    <el-card class="login-card" shadow="always">
      <h2 class="login-title">后台管理系统</h2>
      <el-form :model="form" ref="formRef" label-position="top" @submit.native.prevent="handleLogin(formRef)">
        <el-form-item label="用户名" prop="username" :rules="usernameRules">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="passwordRules">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" class="login-button">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RuleItem } from 'element-plus/es/components/form/src/form.type';
import { login } from '@/api/api';
import { FormInstance } from 'element-plus';


const formRef = ref<FormInstance>()
const form = ref({
  username: '',
  password: '',
});

const usernameRules: RuleItem[] = [
  { required: true, message: '用户名是必填项', trigger: 'blur' },
];

const passwordRules: RuleItem[] = [
  { required: true, message: '密码是必填项', trigger: 'blur' },
];

const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      login({ username: form.value.username, password: form.value.password }).then((result: { token: string }) => {
        localStorage.setItem('token', result.token)
      }).catch((err: Error) => {
      });
    } else {
    }
  })

};

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  height: 100vh;
  /* 使容器高度为视口高度 */
  width: auto;
}

.login-card {
  padding: 20px;
  width: 400px;
  /* 固定宽度的登录框 */
  border-radius: 8px;
  /* 圆角效果 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* 添加阴影效果 */
}

.login-title {
  text-align: center;
  /* 标题居中 */
  margin-bottom: 20px;
  /* 标题和输入框之间的间距 */
  font-size: 24px;
  /* 标题字体大小 */
  color: #409EFF;
  /* 标题颜色 */
}

.login-button {
  width: 100%;
  /* 按钮宽度填满输入框 */
}
</style>