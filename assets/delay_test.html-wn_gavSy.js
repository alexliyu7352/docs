import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,e as i}from"./app-RP31lnfq.js";const o={},l=i('<div class="hint-container note"><p class="hint-container-title">Note</p><p>This test was conducted earlier, and some content may have become outdated. The <code>ultraLowDelay</code> configuration option has been removed. To achieve the lowest delay mode, set the combined write delay to 0 (default is 0). When testing the delay, you can use WebRTC playback.</p></div><h2 id="network-environment" tabindex="-1"><a class="header-anchor" href="#network-environment" aria-hidden="true">#</a> Network Environment</h2><ul><li><code>localhost</code></li></ul><h2 id="operating-system" tabindex="-1"><a class="header-anchor" href="#operating-system" aria-hidden="true">#</a> Operating System</h2><ul><li><code>macOS</code></li></ul><h2 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h2><ul><li><code>MediaServer</code>, startup parameter <code>-t 1</code>, single-threaded startup</li><li>Open the configuration file and enable <code>ultraLowDelay</code> mode</li></ul><h2 id="streaming-software" tabindex="-1"><a class="header-anchor" href="#streaming-software" aria-hidden="true">#</a> Streaming Software</h2><ul><li><code>obs</code>, RTMP streaming to localhost</li><li><code>Rate Control</code>: <code>CBR</code></li><li><code>Bitrate</code>: 2500</li><li><code>Custom Buffer Size</code>: 100</li><li><code>Keyframe Interval</code>: 2 seconds</li><li><code>CPU Usage Preset</code>: <code>ultrafast</code></li><li><code>Profile</code>: <code>baseline</code></li><li><code>Tune</code>: <code>zerolatency</code></li><li><code>Resolution</code>: 1280x720</li><li><code>FPS</code>: 30 <img src="https://user-images.githubusercontent.com/11495632/64311220-daf53f00-cfd5-11e9-8d1f-c39d95c335c4.png" alt="image" loading="lazy"></li></ul><h2 id="player" tabindex="-1"><a class="header-anchor" href="#player" aria-hidden="true">#</a> Player</h2><ul><li>Built-in <code>test_player</code></li><li>Play RTSP (test both UDP and TCP modes) or RTMP on localhost</li></ul><h2 id="testing-method" tabindex="-1"><a class="header-anchor" href="#testing-method" aria-hidden="true">#</a> Testing Method</h2><ul><li>Open a browser and go to the online stopwatch webpage https://miaobiao.51240.com/</li><li>Configure OBS to capture the stopwatch section of the browser image and start streaming to MediaServer</li><li>Open the test_player and play the corresponding RTSP or RTMP URL</li><li>Use a screenshot tool to capture the frames and compare the time difference between the online stopwatch webpage and the test_player</li></ul><h2 id="test-results" tabindex="-1"><a class="header-anchor" href="#test-results" aria-hidden="true">#</a> Test Results</h2><ul><li><p>RTMP playback, delay of 200ms to 400ms <img src="https://user-images.githubusercontent.com/11495632/64311009-0af01280-cfd5-11e9-9117-2f520db0b70f.png" alt="image" loading="lazy"><img src="https://user-images.githubusercontent.com/11495632/64311040-2b1fd180-cfd5-11e9-8526-675d5d40d746.png" alt="image" loading="lazy"></p></li><li><p>RTSP playback (TCP mode), delay of 200ms to 400ms <img src="https://user-images.githubusercontent.com/11495632/64311126-76d27b00-cfd5-11e9-89e4-59e9cb15b8bc.png" alt="image" loading="lazy"><img src="https://user-images.githubusercontent.com/11495632/64311161-9b2e5780-cfd5-11e9-96dd-5ab7eecc83ca.png" alt="image" loading="lazy"></p></li><li><p>RTSP playback (UDP mode), delay of 200ms to 400ms <img src="https://user-images.githubusercontent.com/11495632/64311179-b600cc00-cfd5-11e9-953f-07e73c377df1.png" alt="image" loading="lazy"><img src="https://user-images.githubusercontent.com/11495632/64311187-c022ca80-cfd5-11e9-89b4-a015d614706e.png" alt="image" loading="lazy"></p></li></ul><h2 id="test-conclusion" tabindex="-1"><a class="header-anchor" href="#test-conclusion" aria-hidden="true">#</a> Test Conclusion</h2><ul><li>In the single-threaded mode, where the player and streaming software are in the same thread without any thread switching, the delay is slightly more stable and lower.</li><li>Enabling TCP_NODELAY and disabling MSG_MORE did not significantly optimize the delay in this test.</li><li>The average delay from multiple screenshots is around 300ms, with a minimum of around 200ms and a maximum of over 400ms.</li><li>Back in 2017, when I developed my own streaming software (unfortunately, I didn&#39;t save the .exe file), I was able to achieve a minimum delay of around 120ms, which is currently not achievable. It is suspected that OBS still has relatively high streaming delay.</li><li>It is recommended to disable audio during streaming tests. For encoding formats like AAC, the encoding delay can exceed 100ms.</li><li>This test was conducted on macOS. Ideally, the server would be Linux, the streaming software would be on Windows, and if the player rendering is done independently, the delay could be even lower.</li><li>Those interested can conduct tests on Windows. In 2017, when I tested it on a local network, with the streaming software, server, and player not on the same host, the delay was as low as 120ms. It should be even lower with localhost.</li></ul>',17),n=[l];function s(d,r){return t(),a("div",null,n)}const m=e(o,[["render",s],["__file","delay_test.html.vue"]]);export{m as default};
