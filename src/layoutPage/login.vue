<template>
  <div class="container">
    <div class="box">
      <h1>{{ loginTitle }}</h1>
      <el-form class="form">
        <el-input
          v-model="form.name"
          placeholder="用户名"
          type="text"
          maxlength="50"
        >
          <template #prepend>
            <i class="sfont system-xingmingyonghumingnicheng"></i>
          </template>
        </el-input>
        <el-input
          ref="password"
          v-model="form.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          maxlength="50"
        >
          <template #prepend>
            <i class="sfont system-mima"></i>
          </template>
          <template #append>
            <i
              class="sfont password-icon"
              :class="passwordType ? 'system-yanjing-guan' : 'system-yanjing'"
              @click="passwordTypeChange"
            ></i>
          </template>
        </el-input>
        <el-button
          type="primary"
          @click="submit"
          class="submit-btn"
        >登录</el-button>
      </el-form>
    </div>
    <div class="nowTime"> {{ formatTime }} </div>
  </div>
</template>

<script>

// import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { useNow, useDateFormat } from '@vueuse/core'
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const loginTitle = '欢迎光临'
    const route = useRoute()
    const router = useRouter()

    const form = reactive({
      name: 'admin',
      password: '123456'
    })
    // const formatTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
    const formatTime = useDateFormat(useNow(), 'HH:mm:ss')
    const passwordType = ref('password')
    const passwordTypeChange = () => {
      passwordType.value === '' ? passwordType.value = 'password' : passwordType.value = ''
    }
    const submit = () => {
      router.push(route.query.redirect || '/')
    }
    return {
      form,
      submit,
      loginTitle,
      formatTime,
      passwordType,
      passwordTypeChange
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  user-select: none;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('@/assets/login/bg.png');
  .nowTime {
    position: fixed;
    left: 50%;
    bottom: 0px;
    font-size: 18rem;
    width: 100vw;
    z-index: 2;
    transform: translate(-50%, 0%);
    background: -webkit-linear-gradient(315deg, #bedaff 25%, #d0e5ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .decorator {
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .box {
    z-index: 10;
    left: 50%;
    top: 50%;
    width: 420px;
    height: 440px;
    margin-right: 8%;
    border-radius: 8px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 0.666667px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.75);

    h1 {
      margin-top: 80px;
      text-align: center;
      color: var(--system-primary-color);
    }

    .form {
      width: 80%;
      margin: 50px auto 15px;

      .el-input {
        margin-bottom: 20px;
      }

      .password-icon {
        cursor: pointer;
        color: var(--system-primary-color);
      }

      .submit-btn {
        width: 100%;
        padding-top: 12px;
      }
    }

    .fixed-top-right {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}

@media screen and (max-width: 750px) {
  .container .box {
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    margin-right: 0%;
    transform: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 0;
    }
  }
}
</style>
