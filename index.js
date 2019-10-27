/*
作者:D.Young
主页：https://yyv.me/
github：https://github.com/5iux/sou
日期：2019-07-11
版权所有，请勿删除
*/
window.onload = function() {
  //判断窗口大小，添加输入框自动完成
  var wid = $("body").width();
  if (wid < 640) {
    $(".wd").attr("autocomplete", "off");
  } else {
    $(".wd").focus();
  }

  function sub() {
    var nm = $(".wd").attr("name");
    if (nm == "q") {
      $("form").attr("action", "https://www.google.com/search?hl=zh");
      $("form").submit();
    } else {
      $("form").attr("action", "https://www.baidu.com/s?ie=utf-8");
      $("form").submit();
    }
  }
  //按钮
  $(".sou i").click(function() {
    var dt = $(this).attr("data-s");
    if (dt == "google") {
      $(".wd").attr("name", "q");
      sub();
    } else {
      $(".wd").attr("name", "wd");
      sub();
    }
  });
  //菜单点击
  $("#menu").click(function(event) {
    $(this).toggleClass("on");
    $(".list").toggleClass("closed");
    $(".mywth").toggleClass("hidden");
  });
  $("#content").click(function(event) {
    $(".on").removeClass("on");
    $(".list").addClass("closed");
    $(".mywth").removeClass("hidden");
  });
}

/*天气插件开始
天气插件api请地址：www.tianqiapi.com
*/
/*天气插件开始*/
const indexs = {
  comf: "舒适度",
  drsg: "穿衣",
  flu: "感冒",
  sport: "运动",
  trav: "旅游",
  uv: "紫外线",
  cw: "洗车",
  air: "空气"
};

Promise.all(
  ["now", "forecast", "lifestyle"].map(weatherType =>
    fetch(
      `https://free-api.heweather.net/s6/weather/${weatherType}?key=2ed27772494e4b038f6214779e7ff9aa&location=auto_ip`
    ).then(res => res.json())
  )
)
  .then(res => ({
    ...res[0].HeWeather6[0],
    ...res[1].HeWeather6[0],
    ...res[2].HeWeather6[0]
  }))
  .then(res => {
    const { update, basic, daily_forecast, now, lifestyle } = res;
    $(".wea_hover").css(
      "background-image",
      `url(/weather/bg/${now.cond_code}d.png)`
    );
    $(".mywth").append(
      `${basic.location} <img class="wea" src="./weather/${now.cond_code}d.png"> ${now.cond_txt} ${now.tmp}/${now.vis}℃ ${now.wind_dir}`
    );
    //今日天气
    $(".wea_top").append(
      `<span class="city"><b>${basic.location}</b> ${update.utc}更新</span><span class="img" style="background:url(/weather/${now.cond_code}d.png) no-repeat center/contain;"></span> <span class="tem"><b>${now.tmp}</b>${now.cond_txt}
        </span><span class="air">能见度：${now.vis}公里<br>相对湿度：${now.hum}%<br>${now.wind_dir}：${now.wind_sc}级</span><span class="air_tips">${lifestyle[Math.floor(Math.random() * lifestyle.length)].txt}</span>
        `
    );
    //今日指数
    $(".wea_con ul").append(
      lifestyle.map(
        life => `
            <li>${indexs[life.type]}<br><b>${life.brf}</b><br><i>${
          life.txt
        }</i></li>
        `
      )
    );
    //未来三天天气
    $(".wea_foot ul").append(
      daily_forecast.map(
        day => `
            <li>${day.date}<br><img src="/weather/${day.cond_code_d}d.png" /><br><b>
            ${day.cond_txt_d}</b><br><i>
            ${day.tmp_min}°/${day.tmp_max}°
            </i></b></li>
        `
      )
    );
  });
/*天气插件结束*/
