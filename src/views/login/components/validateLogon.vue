<template>
  <Form
    ref="formValidate"
    :model="formValidate"
    :rules="ruleValidate"
    label-position="top"
    class="formLogin"
  >
    <FormItem label="公子/小姐(您的雅名)" prop="username">
      <Input v-model="formValidate.username" placeholder="name" type="text"></Input>
    </FormItem>
    <FormItem label="您的守护密钥" prop="password">
      <Input v-model="formValidate.password" placeholder="password" type="password"></Input>
    </FormItem>
    <FormItem label="Gender" prop="gender">
      <RadioGroup v-model="formValidate.gender">
        <Radio label="male">Male</Radio>
        <Radio label="female">Female</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="Hobby" prop="interest">
      <CheckboxGroup v-model="formValidate.interest">
        <Checkbox label="Eat"></Checkbox>
        <Checkbox label="Sleep"></Checkbox>
        <Checkbox label="Run"></Checkbox>
        <Checkbox label="Movie"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="Desc" prop="desc">
      <Input
        v-model="formValidate.desc"
        type="textarea"
        :autosize="{minRows: 2,maxRows: 5}"
        placeholder="一些美妙的事情将在此发生..."
      ></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">登录</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<style  scoped>
.formLogin >>> .ivu-form-item-label {
  color: paleturquoise !important;
}
.formLogin >>> .ivu-input {
  border: 1px solid #2f6b88;
  background-color: transparent;
  color: aliceblue;
}
</style>

<script>
export default {
  data () {
    return {
      formValidate: {
        username: 'sanyl',
        password: '',
        gender: '',
        interest: [],
        desc: ''
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: '很遗憾无法识别您的私有身份，请注册再来',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '输入守护，燃尽光芒',
            trigger: 'blur'
          }
        ],
        gender: [
          {
            required: true,
            message: '单纯的就想知道会有多少可爱的小姐姐',
            trigger: 'change'
          }
        ],
        interest: [
          {
            required: true,
            type: 'array',
            min: 1,
            message: '我无法相信一个人类没有兴趣',
            trigger: 'change'
          },
          {
            type: 'array',
            max: 2,
            message: '看来您是一个兴趣广泛的有志之士啊',
            trigger: 'change'
          }
        ],
        desc: [
          {
            required: true,
            message: '花费一些时间，简单介绍一下您自己吧',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 10,
            message: '请尽量多说一点吧',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success! 在这里，您将开辟您的王国')
          this.$router.push({ path: '/about' })
        } else {
          this.$Message.error(
            'Fail! 很遗憾，您的vip余额不足，我们将依法将您驱逐出境'
          )
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
