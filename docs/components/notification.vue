<script lang="ts">
  import { ElNotification } from 'element-plus';

  export default {
    mounted () {
      ElNotification.success({
        title: '重要通知！',
        message: '请 更新 苹果手机、iPad Digilink APP，其他设备请 断开连接，卸载 原Digilink 软件，在官网下载安装新版客户端！使用第三方客户端的用户请切换至官方客户端。',
        dangerouslyUseHTMLString: true,
        offset: 100,
        duration: 20000,
      })
    }
  }
</script>