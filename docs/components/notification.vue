<script lang="ts">
  import { ElNotification } from 'element-plus';

  export default {
    mounted () {
      ElNotification.success({
        title: 'GPT Plus自助充值',
        message: '<a href="https://bestok.cc" target="_blank">点击查看详情</a>',
        dangerouslyUseHTMLString: true,
        offset: 100,
        duration: 5000,
      })
    }
  }
</script>