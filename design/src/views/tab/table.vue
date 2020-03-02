<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <!-- <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        {{item.label}}
      </el-tab-pane> -->
      <el-tab-pane label="开发环境" name="0">
        <el-form ref="form" :model="form" label-width="80px">
          
          <el-form-item label="数据库名称">
            <el-input v-model="form.database"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
           <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
           <el-form-item label="host">
            <el-input v-model="form.host"></el-input>
          </el-form-item>         
          <!-- <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item> -->
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="测试环境" name="1">
        <el-form ref="form1" :model="form1" label-width="80px">
          <el-form-item label="数据库名称">
            <el-input v-model="form1.database"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form1.username"></el-input>
          </el-form-item>
           <el-form-item label="密码">
            <el-input v-model="form1.password"></el-input>
          </el-form-item>
           <el-form-item label="host">
            <el-input v-model="form1.host"></el-input>
          </el-form-item>         
          <!-- <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item> -->
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="生产环境" name="2">
        <el-form ref="form2" :model="form2" label-width="100px">
          <el-form-item label="数据库名称">
            <el-input v-model="form2.database"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form2.username"></el-input>
          </el-form-item>
           <el-form-item label="密码">
            <el-input v-model="form2.password"></el-input>
          </el-form-item>
           <el-form-item label="host">
            <el-input v-model="form2.host"></el-input>
          </el-form-item>         
          <!-- <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item> -->
        </el-form>
      </el-tab-pane>
      
    </el-tabs>

     
    <el-row style="margin-top:50px;">
       <el-button type="primary" @click="onSubmit">立即创建</el-button>
         
    </el-row>

    <el-row>
      {{message}}
    </el-row>
         
  </div>
</template>

<script>
import tabPane from './components/TabPane'
import request from '@/utils/request'
let configExt = {"dialect": "mysql",
    "pool":{
        "max": 5,
        "min": 0,
        "idle": 10000
    },
    "timezone": "+08:00",
    "define":{
      "charset": "utf8",
      "dialectOptions":{
          "collate": "utf8_general_ci"
      }
    }}
export default {
  name: 'Tab',
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '开发环境', key: '0' },
        { label: '测试环境', key: '1' },
        { label: '生产环境', key: '2' },
      ],
      activeName: '0',
      createdTimes: 0,
      form: {
          database:'test',
          username: 'root',
          password: 'Zou285733@',
          host: '39.108.179.65',
         
        },
      form1: {
          database:'test',
          username: 'root',
          password: '123456',
          host: '127.0.0.1',
        },
      form2: {
          database:'test',
          username: 'root',
          password: '123456',
          host: '127.0.0.1',
        },
        message:''
    }
  },
  watch: {
    activeName(val) {
      //this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    },
    onSubmit() {
      let config = {
        "development": Object.assign(this.form,configExt),
        "test" : Object.assign(this.form1,configExt),
        "production": Object.assign(this.form2,configExt), //39.108.179.65
      }
   
      // 调用接口
      request({
        url: '/design/create_connect',
        method: 'post',
        data:config
      }).then((res) => {
        this.message = res.message
        this.$message({
          message: '数据库创建成功！',
          type: 'success'
        });
        console.log(res)
      })
      
      
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
</style>
