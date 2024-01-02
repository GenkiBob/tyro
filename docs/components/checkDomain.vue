<script setup>
//     // 获取当前页面的 URL
    var url = window.location.href;

    // 解析 URL，并获取查询参数
    var urlParams = new URL(url);
    var queryParams = {};
    var path = ''; // 初始化 path 为空字符串
    var timer;

    // 遍历所有查询参数并放入对象中
    urlParams.searchParams.forEach(function (value, key) {
      if (key === "path") {
        // 如果查询参数名是 "path"，将其赋值给一个变量
        path = value;
      } else {
        // 否则，将其他查询参数放入对象中
        queryParams[key] = value;
      }
    });

    function joinUrlAndPath(url, path) {
      // 移除 URL 和路径末尾的斜杠
      url = url.replace(/\/+$/, ''); // 移除 URL 末尾的斜杠
      path = path.replace(/^\/+/, ''); // 移除路径开头的斜杠

      // 使用 "/" 将 URL 和路径连接在一起
      var joinedUrl = url + '/' + path;

      return joinedUrl;
    }

    fetch("./data.json?t=" + Date.now())
      .then((res) => res.json())
      .then((data) => {
        checkDomain(data); // 立即执行一次
        timer && clearInterval(timer);
        // retry every 3 seconds
        timer = setInterval(() => {
          checkDomain(data)
        }, 3000);
        setTimeout(() => {
          // 超时 10 秒禁止循环，弹出提示联系站长
          clearInterval(timer);
          timer = null;
          const text = "无法跳转可用站点，请点击 IP地址 进入网站。";
          alert(text);
        //   document.getElementById('info').innerText = text;
        }, 10000)
      });

    function checkDomain(hosts) {
      for (var i = 0; i < hosts.length; i++) {
        const currentUrl = hosts[i];
        fetch(currentUrl).then((res) => {
          if (res.ok && res.status === 200) {
            window.location.href = joinUrlAndPath(currentUrl, path) + location.search;
          }
        });
      }
    }

// 文字说明
// const say = "若页面未跳转，请点击："
</script>

<template>
    <!-- <h3 class="hi">{{say}}=</h3> -->

</template>

<style>
/* .hi {
    text-align: center;
} */
</style>


    