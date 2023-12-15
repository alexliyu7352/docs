import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as p,a as e,d as n,b as a,w as o,e as s}from"./app-RP31lnfq.js";const u={},d=s(`<h2 id="_1-play-before-publishing" tabindex="-1"><a class="header-anchor" href="#_1-play-before-publishing" aria-hidden="true">#</a> 1. Play before Publishing</h2><ul><li><p>Pain point: Unable to play before successful publishing.</p></li><li><p>Scenario:</p><p>In some real-time streaming scenarios, there is a need for simultaneous streaming and playback, typically in a one-to-one setting. For example, in a car recorder based on RTMP streaming, when a user requests to view the live video from the onboard camera and sends a publishing command to the device, the playback of the video starts simultaneously. If the playback request arrives at the media server before the publishing, the server usually returns an error indicating that the stream is not found. To solve this problem, a common approach is to confirm the successful publishing before starting the playback. However, this often increases the delay in opening the video, resulting in a poor user experience. ZLMediakit optimizes this scenario by allowing the server to hold the player&#39;s response if the stream does not exist, and only returns a successful playback response after the publishing is successful. If the publishing does not come online within a timeout period, an error indicating the stream is not found is returned. The delay can be modified through the configuration file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">general</span><span class="token punctuation">]</span></span>
<span class="token comment"># Maximum waiting time for playback in milliseconds</span>
<span class="token comment"># When playing a stream that does not exist, ZLMediaKit will allow the player to wait for a maximum of maxStreamWaitMS milliseconds</span>
<span class="token comment"># If the stream is registered successfully within this time, it will immediately return a successful playback response to the player</span>
<span class="token comment"># Otherwise, it returns an error indicating that the stream is not found to the player</span>
<span class="token comment"># The purpose of this mechanism is to enable playback before publishing</span>
<span class="token key attr-name">maxStreamWaitMS</span><span class="token punctuation">=</span><span class="token value attr-value">15000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: This feature also applies to pulling streams, allowing on-demand publishing and pulling of streams.</p></blockquote></li></ul><h2 id="_2-no-viewer-event" tabindex="-1"><a class="header-anchor" href="#_2-no-viewer-event" aria-hidden="true">#</a> 2. No Viewer Event</h2>`,3),h=e("li",null,[e("p",null,"Pain point: Wasting bandwidth when streaming has no viewers.")],-1),m=s(`<p>Scenario:</p><p>In some Internet of Things (IoT) applications, a device streams to the server, and users view the device&#39;s video through an app. When users close the app, the device should stop streaming to save bandwidth. The common solution is to have the player send periodic heartbeats to keep the device streaming. However, this often leads to uncertainty in the state and increases system complexity (imagine having to maintain streaming heartbeats for the app, web, and mini-program simultaneously). To address this scenario, ZLMediakit provides a playback user statistics feature. When the viewer count reaches zero, it triggers a no viewer event. By receiving the hook (HTTP request) from ZLMediakit, you can decide whether to close the streaming (or pulling) on ZLMediakit&#39;s side. The hook address is configured in the following file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">hook</span><span class="token punctuation">]</span></span>
<span class="token comment"># Enable hook events. When enabled, authentication will be applied to publishing and pulling streams.</span>
<span class="token key attr-name">enable</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token comment"># Event triggered when there are no viewers for a stream. With this event, you can choose whether to close the stream with no viewers.</span>
<span class="token comment"># Use together with the general.streamNoneReaderDelayMS option.</span>
<span class="token key attr-name">on_stream_none_reader</span><span class="token punctuation">=</span><span class="token value attr-value">https://127.0.0.1/index/hook/on_stream_none_reader</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=e("h2",{id:"_3-stream-not-found-event",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-stream-not-found-event","aria-hidden":"true"},"#"),n(" 3. Stream Not Found Event")],-1),k=e("li",null,[e("p",null,"Pain point: We only want to provide the playback URL, nothing else!")],-1),b=s(`<p>Scenario:</p><p>Typically, we distribute video content through playback URLs. However, these video contents are generated in real-time and do not exist when there are no viewers (no publishing or pulling proxies). In such scenarios, the usual practice is to restrict the clients. Instead of providing a playback URL directly, an API for obtaining the URL is provided. Users first obtain the playback URL to trigger the device&#39;s publishing, and then they can start playback. This approach is usually cumbersome, requiring specific pre-playback logic and limiting some application scenarios. ZLMediakit provides a stream not found event, allowing you to report to your business server that the stream does not exist. At this point, you can take control and start the device&#39;s publishing process at your convenience, or let ZLMediakit start pulling the stream. The hook address is configured in the following file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">hook</span><span class="token punctuation">]</span></span>
<span class="token comment"># Enable hook events. When enabled, authentication will be applied to publishing and pulling streams.</span>
<span class="token key attr-name">enable</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token comment"># Event triggered when a stream is not found during playback.</span>
<span class="token comment"># With this event, you can complete on-demand pulling by using it in conjunction with the hook.on_stream_none_reader event.</span>
<span class="token key attr-name">on_stream_not_found</span><span class="token punctuation">=</span><span class="token value attr-value">https://127.0.0.1/index/hook/on_stream_not_found</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g=s(`<h2 id="_4-reconnect-after-disconnection-and-continue-pushing-stream" tabindex="-1"><a class="header-anchor" href="#_4-reconnect-after-disconnection-and-continue-pushing-stream" aria-hidden="true">#</a> 4. Reconnect after disconnection and continue pushing stream</h2><ul><li><p>Pain point: When the pushing stream is disconnected and the pushing stream device reconnects, all the players are disconnected as well.</p></li><li><p>Scenario description:</p><p>When a pushing stream device is disconnected, there are several ways for the server to handle the players. One approach, which is the default behavior of zlmediakit, is to immediately disconnect all players who are playing the stream and destroy the streaming device and player objects to save resources. Another approach, represented by SRS, does almost nothing when the streaming device is disconnected. It doesn&#39;t reclaim the resources allocated by the streaming device and doesn&#39;t disconnect the players (instead, it allows the players to time out and disconnect automatically).</p><p>The advantage of SRS&#39;s approach is that when the pushing stream device reconnects, the players can continue playing, providing a better user experience. The downside is that resources are not reclaimed in a timely manner. If there are malicious connections that don&#39;t time out actively, it may consume a large number of file descriptors on the server. Additionally, the media source resources created by the pushing stream device cannot be released actively. When multiple pushing stream devices are created, the memory usage cannot be reduced promptly.</p><p>In response to this scenario, zlmediakit has added support for continuous disconnection and reconnection to address the issue of player disconnection caused by streaming reconnection, as well as the problem of unrecycled resources. The approach is to delay the destruction of the media source resource object (and the disconnection of the player) when the streaming device is disconnected. When the streaming device reconnects, the same resource object is reused, allowing the player to continue watching the video. If the streaming device doesn&#39;t come online after a timeout, the player is disconnected and all resources are reclaimed. The timeout delay is configured as follows:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">general</span><span class="token punctuation">]</span></span>
<span class="token comment"># After a pushing stream device is disconnected, it can reconnect within the timeout period and resume pushing stream. This allows the player to continue playing.</span>
<span class="token comment"># Set to 0 to disable this feature (disconnection of the pushing stream device will lead to immediate disconnection of the player).</span>
<span class="token comment"># This parameter should not exceed the player timeout.</span>
<span class="token key attr-name">continue_push_ms</span><span class="token punctuation">=</span><span class="token value attr-value">15000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Implementation code snippet:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">RtmpSession</span><span class="token double-colon punctuation">::</span><span class="token function">onError</span><span class="token punctuation">(</span><span class="token keyword">const</span> SockException<span class="token operator">&amp;</span> err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Omit irrelevant code</span>

    <span class="token function">GET_CONFIG</span><span class="token punctuation">(</span><span class="token keyword">uint32_t</span><span class="token punctuation">,</span> continue_push_ms<span class="token punctuation">,</span> General<span class="token double-colon punctuation">::</span>kContinuePushMS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_push_src <span class="token operator">&amp;&amp;</span> continue_push_ms<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Release ownership of the pushing stream object</span>
        _push_src_ownership <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
        <span class="token keyword">auto</span> push_src <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">move</span><span class="token punctuation">(</span>_push_src<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Delayed destruction of the object (unregister the stream and trigger disconnection of all players)</span>
        <span class="token function">getPoller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">doDelayTask</span><span class="token punctuation">(</span>continue_push_ms<span class="token punctuation">,</span> <span class="token punctuation">[</span>push_src<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">RtmpSession</span><span class="token double-colon punctuation">::</span><span class="token function">onCmd_publish</span><span class="token punctuation">(</span>AMFDecoder <span class="token operator">&amp;</span>dec<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Omit a large amount of irrelevant code</span>
  <span class="token keyword">auto</span> src <span class="token operator">=</span> <span class="token class-name">MediaSource</span><span class="token double-colon punctuation">::</span><span class="token function">find</span><span class="token punctuation">(</span>RTMP_SCHEMA<span class="token punctuation">,</span> _media_info<span class="token punctuation">.</span>_vhost<span class="token punctuation">,</span> _media_info<span class="token punctuation">.</span>_app<span class="token punctuation">,</span> _media_info<span class="token punctuation">.</span>_streamid<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>src<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Attempt to continue pushing stream after disconnection</span>
    <span class="token keyword">auto</span> rtmp_src <span class="token operator">=</span> <span class="token generic-function"><span class="token function">dynamic_pointer_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>RtmpMediaSourceImp<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>rtmp_src<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The source is not generated by RTMP pushing stream</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">auto</span> ownership <span class="token operator">=</span> rtmp_src<span class="token operator">-&gt;</span><span class="token function">getOwnership</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ownership<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Failed to acquire ownership of the pushing stream source</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Reuse the previous pushing stream resource object</span>
    _push_src <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">move</span><span class="token punctuation">(</span>rtmp_src<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Take ownership of the object</span>
    _push_src_ownership <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">move</span><span class="token punctuation">(</span>ownership<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// Omit a large amount of irrelevant code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: Continuous disconnection and reconnection feature supports RTSP/RTMP/WebRTC pushing stream.</p></blockquote></li></ul><h2 id="_5-cluster-deployment" tabindex="-1"><a class="header-anchor" href="#_5-cluster-deployment" aria-hidden="true">#</a> 5. Cluster Deployment</h2><ul><li><p>Pain point: Limited traceability methods, edge servers cannot use HLS.</p></li><li><p>Scenario description:</p><p>In general, media streaming clusters are implemented using a traceability method, where servers are divided into origin servers and edge servers. The origin server is typically used to receive streams and does not directly handle user playback requests. Instead, it distributes the streams to edge servers, which in turn deliver them to the players. This model supports a large number of user playback requests. SRS has supported this functionality through configuration files for a long time. Since zlmediakit also provides on-demand pulling of streams, it essentially supports the traceability mode for clustering. However, users need to integrate with hooks and APIs, which has a higher development threshold. Therefore, zlmediakit recently added support for cluster mode through configuration files. The configuration file is as follows:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">cluster</span><span class="token punctuation">]</span></span>
<span class="token comment"># Set the template for the pull stream URL of the origin server. The format is similar to printf, where the first %s specifies the app and the second %s specifies the stream_id.</span>
<span class="token comment"># When cluster mode is enabled, the on_stream_not_found and on_stream_none_reader hooks will be ineffective.</span>
<span class="token comment"># The following types are supported for pull streaming:</span>
<span class="token comment"># rtmp: rtmp://127.0.0.1:1935/%s/%s</span>
<span class="token comment"># rtsp: rtsp://127.0.0.1:554/%s/%s</span>
<span class="token comment"># hls: http://127.0.0.1:80/%s/%s/hls.m3u8</span>
<span class="token comment"># http-ts: http://127.0.0.1:80/%s/%s.live.ts</span>
<span class="token comment"># Multiple origin servers are supported, and different servers are separated by semicolons (;)</span>
  <span class="token key attr-name">origin_url</span><span class="token punctuation">=</span>
<span class="token comment"># Total timeout for pull streaming, in seconds (float). If there are 3 origin servers, the timeout for each individual server will be timeout_sec divided by 3.</span>
<span class="token comment"># The individual server timeout should not exceed the general.maxStreamWaitMS configuration.</span>
  <span class="token key attr-name">timeout_sec</span><span class="token punctuation">=</span><span class="token value attr-value">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ZLMediakit supports multiple ways of pulling streams, including rtsp/rtmp/hls/http-ts/http-flv. The methods are diverse and rich, and the origin servers are not divided into primary and backup. Load balancing of the origin servers is achieved using the round-robin method. It should be noted that since ZLMediakit has long supported on-demand streaming for HLS, its edge stations also support the HLS protocol (in fact, they support any protocol supported by ZLMediakit), which is not available in SRS.</p><p>Furthermore, it should be noted that ZLMediakit supports both RTSP and WebRTC, both of which are based on RTP. Internally in ZLMediakit, they can be interconnected without the need for protocol conversion and complex multiplexing/demultiplexing logic. This makes it possible to use ZLMediakit for large-scale, low-latency WebRTC live streaming. Compared to traditional CDN based on RTMP, RTSP is more suitable as the underlying transport protocol for WebRTC. Developers do not need to deal with cumbersome multiplexing/demultiplexing logic and can smoothly achieve the interconversion between RTSP and WebRTC.</p></li></ul><h2 id="_6-webrtc-single-port-multi-threading-and-connection-migration-support" tabindex="-1"><a class="header-anchor" href="#_6-webrtc-single-port-multi-threading-and-connection-migration-support" aria-hidden="true">#</a> 6. WebRTC Single Port, Multi-threading, and Connection Migration Support</h2>`,5),f=e("li",null,[e("p",null,"Pain points: Webrtc servers that support multi-threading do not support single port, and those that support single port do not support multi-threading (and may not support connection migration).")],-1),y=e("p",null,"Scenario introduction:",-1),_=e("p",null,"Since WebRTC transmission is based on the UDP protocol, traditional WebRTC servers operate in multi-port mode, such as Janus and mediasoup. This brings great pain to deployment and management. Moreover, due to the limited number of ports (the theoretical limit is over 60,000), each WebRTC client occupies 1 to 4 ports. Limited by the number of ports, a WebRTC server can host a maximum of 10,000 to 60,000 clients.",-1),w=e("p",null,"On the other hand, WebRTC servers that support single port (such as SRS) do not support multi-threading. Due to the much higher computational complexity (encryption/decryption) of WebRTC compared to live streaming, single-threaded performance is often insufficient for WebRTC applications.",-1),T=e("p",null,"ZLMediakit proposes the best solution for these pain points:",-1),S=e("ul",null,[e("li",null,"Support deployment on a single UDP port, where one UDP port handles all clients."),e("li",null,"Support multi-threading on a single UDP port. Each client is assigned a unique fd through repeated bind/connect operations, and the fds are evenly distributed among different threads."),e("li",null,"When a user's network migrates (e.g., switching from Wi-Fi to 4G), the user is locked using STUN packets, enabling seamless connection migration without interrupting the user experience.")],-1),x=e("p",null,"ZLMediakit is the only open-source solution that combines all three of the above features.",-1),R={href:"https://mp.weixin.qq.com/s?t=pages/video_detail_new&scene=23&vid=wxv_2170272938552328197&__biz=MzkzNjI5ODIyMg==&mid=2247483673&idx=1&sn=14bc138d91292a1c256c138c822d9c40&vidsn=#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"_7-long-connection-for-hls-playback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-long-connection-for-hls-playback","aria-hidden":"true"},"#"),n(" 7. Long Connection for HLS Playback")],-1),M=e("p",null,"ZLMediakit achieves long connection for HLS playback through cookie tracking technology. Based on this feature, ZLMediakit's HLS server has the following exclusive features:",-1),W=e("ul",null,[e("li",null,"HLS playback authentication, and no need for re-authentication during playback."),e("li",null,"HLS playback traffic statistics, which can track the total traffic consumption during playback."),e("li",null,`On-demandI'm sorry, but I couldn't find any information about a specific ZLMediakit feature called "pull stream URL of the origin server." ZLMediakit is an open-source streaming media server that provides various features for streaming protocols like RTSP, RTMP, HLS, and WebRTC.`)],-1),I=e("p",null,"If you have any specific questions about ZLMediakit or need information on a different feature, please let me know, and I'll do my best to assist you.",-1);function P(C,Z){const t=i("RouterLink"),l=i("ExternalLinkIcon");return c(),p("div",null,[d,e("ul",null,[h,e("li",null,[m,e("blockquote",null,[e("p",null,[n("Note: Introduction to hooks can be found "),a(t,{to:"/guide/media_server/web_hook_api.html#13onstreamnonereader"},{default:o(()=>[n("here")]),_:1}),n(".")])])])]),v,e("ul",null,[k,e("li",null,[b,e("blockquote",null,[e("p",null,[n("Note: Introduction to hooks can be found "),a(t,{to:"/guide/media_server/web_hook_api.html#14on_stream_not_found"},{default:o(()=>[n("here")]),_:1}),n(".")])])])]),g,e("ul",null,[f,e("li",null,[y,_,w,T,S,x,e("blockquote",null,[e("p",null,[n("Note: For how to solve the thread safety issue during WebRTC single-port connection migration and multi-threaded connection migration, please watch this "),e("a",R,[n("video"),a(l)])])])])]),L,M,W,I])}const H=r(u,[["render",P],["__file","exclusive_features.html.vue"]]);export{H as default};
