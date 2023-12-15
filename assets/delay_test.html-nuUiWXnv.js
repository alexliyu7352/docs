import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,e as l}from"./app-RP31lnfq.js";const c={},d=l('<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>此测试时间比较早，部分内容已失效；其中<code>ultraLowDelay</code>配置项已经删除；合并写延时改成 0 时(默认为 0)即为最低延时模式； 大家测试延时时，可以使用 webrtc 播放来测试。</p><h2 id="网络环境" tabindex="-1"><a class="header-anchor" href="#网络环境" aria-hidden="true">#</a> 网络环境</h2><ul><li><code>localhost</code></li></ul><h2 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统</h2><ul><li><code>macOS</code></li></ul><h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h2><ul><li><code>MediaServer</code>,启动参数 <code>-t 1</code> ,单线程启动</li><li>配置文件打开<code>ultraLowDelay</code>模式</li></ul><h2 id="推流器" tabindex="-1"><a class="header-anchor" href="#推流器" aria-hidden="true">#</a> 推流器</h2><ul><li><code>obs</code> rtmp 推流到 localhost</li><li><code>速率控制</code>：<code>CBR</code></li><li><code>比特率</code>: 2500</li><li><code>自定义缓存大小</code>: 100</li><li><code>关键帧将</code>：2 秒</li><li><code>CPU使用预设</code>: <code>ultrafast</code></li><li><code>profile</code>: <code>baseline</code></li><li><code>Tune</code>: <code>zerolatency</code></li><li><code>分辨率</code>: 1280x720</li><li><code>fps</code>: 30 <img src="https://user-images.githubusercontent.com/11495632/64311220-daf53f00-cfd5-11e9-8d1f-c39d95c335c4.png" alt="image" loading="lazy"></li></ul><h2 id="播放器" tabindex="-1"><a class="header-anchor" href="#播放器" aria-hidden="true">#</a> 播放器</h2><ul><li>内置 test_player</li><li>localhost 播放 rtsp(udp、tcp 模式都测试)或 rtmp</li></ul><h2 id="测试方法" tabindex="-1"><a class="header-anchor" href="#测试方法" aria-hidden="true">#</a> 测试方法</h2><ul><li>打开浏览器，打开在线秒表网页 https://miaobiao.51240.com/</li><li>设置 OBS，截取浏览器秒表部分图像，开始推流给 MediaServer</li><li>打开 test_player，播放对应的 rtsp 或 rtmp url</li><li>使用截图工具，定格画面，并对比网页与 test_player 播放器画面在线秒表时间差</li></ul><h2 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h2><ul><li><p>播放 rtmp,延时 200ms ~ 400ms <img src="https://user-images.githubusercontent.com/11495632/64311009-0af01280-cfd5-11e9-9117-2f520db0b70f.png" alt="image" loading="lazy"><img src="https://user-images.githubusercontent.com/11495632/64311040-2b1fd180-cfd5-11e9-8526-675d5d40d746.png" alt="image" loading="lazy"></p></li><li><p>播放 rtsp(tcp 模式),延时 200ms ~ 400ms <img src="https://user-images.githubusercontent.com/11495632/64311126-76d27b00-cfd5-11e9-89e4-59e9cb15b8bc.png" alt="image" loading="lazy"><img src="https://user-images.githubusercontent.com/11495632/64311161-9b2e5780-cfd5-11e9-96dd-5ab7eecc83ca.png" alt="image" loading="lazy"></p></li><li><p>播放 rtsp(udp 模式),延时 200ms ~ 400ms <img src="https://user-images.githubusercontent.com/11495632/64311179-b600cc00-cfd5-11e9-953f-07e73c377df1.png" alt="image" loading="lazy"><img src="https://user-images.githubusercontent.com/11495632/64311187-c022ca80-cfd5-11e9-89b4-a015d614706e.png" alt="image" loading="lazy"></p></li></ul><h2 id="测试结论" tabindex="-1"><a class="header-anchor" href="#测试结论" aria-hidden="true">#</a> 测试结论</h2><ul><li>在单线程下，播放器和推流器在同一个线程，没有跨线程切换问题，延时稍微稳定并低点</li><li>开启 TCP_NODELAY 关闭 MSG_MORE 在本轮测试中对优化延时效果不大</li><li>多次截图平均下来有 300ms 左右的延时，最低 200ms 左右，最高有 400+ms</li><li>17 年我自己写推流器(很遗憾没保存下 exe 文件)的情况下，最低延时能达到 120ms 左右，目前根本达不到，怀疑 obs 推流延时还是较高</li><li>推流时建议关闭音频再测试，像 AAC 这种编码格式，编码延时能达到 100ms 以上</li><li>本次测试都是再 macOS 下测试的，理想情况下，服务器是 linux，推流器 windows，播放器渲染自己做的话延时可能还能更低</li><li>感兴趣的朋友们可以在 windows 下测试下，17 年我是在局域网中测试的，推流器、服务器、播放器都不是同一台主机，延时尚且低至 120ms，如果 localhost 应该能更低。</li></ul>',18),t=[d];function o(r,s){return i(),a("div",null,t)}const u=e(c,[["render",o],["__file","delay_test.html.vue"]]);export{u as default};
