<script setup>
  // 获取当前页面的 URL

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

  function joinUrlAndPath (url, path) {
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
        const text = "无法跳转可用站点，请点击下列‘立即前往’。";
        alert(text);
        //   document.getElementById('info').innerText = text;
      }, 10000)
    });

  function checkDomain (hosts) {
    for (var i = 0; i < hosts.length; i++) {
      const currentUrl = hosts[i];
      fetch(currentUrl).then((res) => {
        if (res.ok && res.status === 200) {
          window.location.href = joinUrlAndPath(currentUrl, path) + location.search;
        }
      });
    }
  }


  // IP跳转

  function loadJSON (callback) {
    fetch('ip.json').then(function (response) {
      return response.json();
    })
      .then(function (data) {
        // callback(data);
        window.location.href = data[0];
      });
  }
</script>

<template>
  <div class="checkMain">
    <div class="loader">
      <div class="loading-2">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
    <h3>正在检测有效地址</h3>

    <div style="margin-top: 30px;">
      <br>
      <br>
      <span>
        若5秒内未跳转，请点击
      </span>
      <button @click="loadJSON">立即前往</button>

    </div>
  </div>
</template>

<style>
  .checkMain {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .checkMain button {
    font-weight: bold;
    font-size: 1rem;
    margin-top: 1rem;
    border-bottom: 1px dashed #000;
    /* border: 1px solid #333; */
    /* border-radius: 6px; */
    padding: 4px 16px;
  }

  /*  */
  .loader {
    /* width: 30%; */
    /* height: 200px; */
    margin-bottom: 20px;
    /* float: left; */
    margin-left: 3%;
    /* border: 1px solid #ccc; */
    border: 0px;
    box-sizing: border-box;
    display: flex;
    /*多轮布局*/
    align-items: center;
    /*垂直*/
    justify-content: center;
    /*水平*/
  }

  @-webkit-keyframes loading-2 {
    0% {
      transform: scaleY(1);
      -moz-transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }

    50% {
      transform: scaleY(.4);
      -moz-transform: scaleY(.4);
      -webkit-transform: scaleY(.4);
    }

    100% {
      transform: scaleY(1);
      -moz-transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }

  .loading-2 i {
    display: inline-block;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    background: #333;
    margin: 0 2px;
  }

  .loading-2 i:nth-child(1) {
    -webkit-animation: loading-2 1s ease-in .1s infinite;
    -moz-animation: loading-2 1s ease-in .1s infinite;
    animation: loading-2 1s ease-in .1s infinite;
  }

  .loading-2 i:nth-child(2) {
    -webkit-animation: loading-2 1s ease-in .2s infinite;
    -moz-animation: loading-2 1s ease-in .2s infinite;
    animation: loading-2 1s ease-in .2s infinite;
  }

  .loading-2 i:nth-child(3) {
    -webkit-animation: loading-2 1s ease-in .3s infinite;
    -moz-animation: loading-2 1s ease-in .3s infinite;
    animation: loading-2 1s ease-in .3s infinite;
  }

  .loading-2 i:nth-child(4) {
    -webkit-animation: loading-2 1s ease-in .4s infinite;
    -moz-animation: loading-2 1s ease-in .4s infinite;
    animation: loading-2 1s ease-in .4s infinite;
  }

  .loading-2 i:nth-child(5) {
    -webkit-animation: loading-2 1s ease-in .5s infinite;
    -moz-animation: loading-2 1s ease-in .5s infinite;
    animation: loading-2 1s ease-in .5s infinite;
  }
</style>