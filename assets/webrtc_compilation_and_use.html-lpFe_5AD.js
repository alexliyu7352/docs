import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o,c as r,a as n,d as s,b as a,e as t}from"./app-RP31lnfq.js";const c={},p=t(`<h2 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> Environment</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>machine
centos <span class="token number">7.6</span>
gcc version <span class="token number">5.4</span>.0 <span class="token punctuation">(</span>GCC<span class="token punctuation">)</span>
cmake version <span class="token number">3.20</span>.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dependency-preparation" tabindex="-1"><a class="header-anchor" href="#dependency-preparation" aria-hidden="true">#</a> Dependency Preparation</h2>`,3),d=t(`<li><p>Install OpenSSL (version 1.1 or above)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://www.openssl.org/source/openssl-1.1.1k.tar.gz
$ <span class="token function">tar</span> <span class="token parameter variable">-xvzf</span> openssl-1.1.1k.tar.gz
$ yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zlib zlib-devel perl-CPAN
$ ./config shared <span class="token parameter variable">--openssldir</span><span class="token operator">=</span>/usr/local/openssl <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openssl
$ <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/lib64/&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/openssl/lib&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf
$ ldconfig
$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/openssl/bin/openssl  /usr/local/bin/openssl <span class="token comment"># 替换系统openssl，非必须</span>
$ openssl version <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),u=n("p",null,"Install libsrtp",-1),m={href:"https://codeload.github.com/cisco/libsrtp/tar.gz/refs/tags/v2.3.0",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">tar</span> <span class="token parameter variable">-xvzf</span> libsrtp-2.3.0.tar.gz
$ <span class="token builtin class-name">cd</span> libsrtp-2.3.0
$ ./configure --enable-openssl --with-openssl-dir<span class="token operator">=</span>/usr/local/openssl
$ <span class="token function">make</span> <span class="token parameter variable">-j8</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For some newer compilation environments (such as GCC 10+), there may be issues when compiling libsrtp-2.3.0. You can consider switching to version 2.5.0 as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://github.com/cisco/libsrtp/archive/refs/tags/v2.5.0.tar.gz
$ <span class="token function">tar</span> <span class="token parameter variable">-xvzf</span> libsrtp-2.5.0.tar.gz
$ <span class="token builtin class-name">cd</span> libsrtp-2.5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=t(`<h2 id="compilation" tabindex="-1"><a class="header-anchor" href="#compilation" aria-hidden="true">#</a> Compilation</h2><ul><li><p>Download ZLMediaKit source code</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Chinese users are recommended to download from the mirror site gitee</span>
<span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://gitee.com/xia-chu/ZLMediaKit
<span class="token builtin class-name">cd</span> ZLMediaKit
<span class="token comment"># Do not forget to execute this command</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Compilation</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> build
$ <span class="token builtin class-name">cd</span> build
$ cmake <span class="token punctuation">..</span> <span class="token parameter variable">-DENABLE_WEBRTC</span><span class="token operator">=</span>true  <span class="token parameter variable">-DOPENSSL_ROOT_DIR</span><span class="token operator">=</span>/usr/local/openssl  <span class="token parameter variable">-DOPENSSL_LIBRARIES</span><span class="token operator">=</span>/usr/local/openssl/lib
$ cmake <span class="token parameter variable">--build</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--target</span> MediaServer

<span class="token comment"># final result</span>
<span class="token punctuation">[</span> <span class="token number">96</span>%<span class="token punctuation">]</span> Built target test_rtcp_fci
<span class="token punctuation">[</span> <span class="token number">96</span>%<span class="token punctuation">]</span> Building CXX object tests/CMakeFiles/test_rtp.dir/test_rtp.cpp.o
<span class="token punctuation">[</span> <span class="token number">97</span>%<span class="token punctuation">]</span> Linking CXX executable <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/release/linux/Debug/test_rtp
<span class="token punctuation">[</span> <span class="token number">97</span>%<span class="token punctuation">]</span> Built target test_rtp
<span class="token punctuation">[</span> <span class="token number">97</span>%<span class="token punctuation">]</span> Building CXX object tests/CMakeFiles/test_wsServer.dir/test_wsServer.cpp.o
<span class="token punctuation">[</span> <span class="token number">97</span>%<span class="token punctuation">]</span> Linking CXX executable <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/release/linux/Debug/test_wsServer
<span class="token punctuation">[</span> <span class="token number">97</span>%<span class="token punctuation">]</span> Built target test_wsServer
<span class="token punctuation">[</span> <span class="token number">97</span>%<span class="token punctuation">]</span> Building CXX object tests/CMakeFiles/test_server.dir/test_server.cpp.o
<span class="token punctuation">[</span> <span class="token number">97</span>%<span class="token punctuation">]</span> Linking CXX executable <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/release/linux/Debug/test_server
<span class="token punctuation">[</span> <span class="token number">97</span>%<span class="token punctuation">]</span> Built target test_server
<span class="token punctuation">[</span> <span class="token number">98</span>%<span class="token punctuation">]</span> Built target jsoncpp
<span class="token punctuation">[</span> <span class="token number">98</span>%<span class="token punctuation">]</span> Linking CXX executable <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/release/linux/Debug/MediaServer
<span class="token punctuation">[</span><span class="token number">100</span>%<span class="token punctuation">]</span> Built target MediaServer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="modify-configuration-file" tabindex="-1"><a class="header-anchor" href="#modify-configuration-file" aria-hidden="true">#</a> Modify Configuration File</h2><p>Since WebRTC protocol requires informing the player of the server&#39;s IP address, if the IP address is not visible to the player, WebRTC communication will fail. Please modify the <code>rtc.externIP</code> configuration item in the configuration file to the visible IP address of the player. If this configuration item is not set, zlmediakit will retrieve the IP address of the network card (usually an internal IP address), which will prevent cross-domain NAT usage of WebRTC.</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">rtc</span><span class="token punctuation">]</span></span>
<span class="token comment"># Timeout for RTC streaming and playback</span>
<span class="token key attr-name">timeoutSec</span><span class="token punctuation">=</span><span class="token value attr-value">15</span>
<span class="token comment"># IP address visible to RTC clients on this machine, generally a public IP address when acting as a server, leave it blank to automatically retrieve the IP address of the network card</span>
<span class="token key attr-name">externIP</span><span class="token punctuation">=</span>
<span class="token comment"># UDP server listening port for RTC, all RTC clients will transmit stun/dtls/srtp/srtcp data through this port,</span>
<span class="token comment"># This port is multithreaded and supports connection migration caused by client network switching</span>
<span class="token comment"># Note that if the server is behind NAT and requires port mapping, the external mapped port must be consistent with this port</span>
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">8000</span>
<span class="token comment"># Set remb bitrate, closing twcc and enabling remb when non-zero. This setting is effective during RTC streaming and can control the streaming quality</span>
<span class="token key attr-name">rembBitRate</span><span class="token punctuation">=</span><span class="token value attr-value">1000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2>`,6),k=n("code",null,"default.pem",-1),h=n("code",null,"default.zlmediakit.com",-1),g=n("code",null,"127.0.0.1",-1),f={href:"https://default.zlmediakit.com/webrtc/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/ZLMediaKit/ZLMediaKit/issues/1277",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"troubleshooting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),s(" Troubleshooting")],-1),y=t(`<li><p>Error message: <code>gmake[3]: *** No rule to make target </code>/usr/lib64/libssl.so&#39;, needed by <code>../release/linux/Debug/MediaServer&#39;. Stop.</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/openssl/lib
<span class="token function">cp</span> <span class="token parameter variable">-r</span> ./* /usr/lib64/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),x={href:"https://blog.csdn.net/haysonzeng/article/details/116754065",target:"_blank",rel:"noopener noreferrer"},C=n("p",null,"Compilation on Windows",-1),T={href:"https://blog.csdn.net/byna11sina11/article/details/119786889",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/ZLMediaKit/ZLMediaKit/issues/1081#issuecomment-910141630",target:"_blank",rel:"noopener noreferrer"},P=t('<h2 id="q-a-playback-issues" tabindex="-1"><a class="header-anchor" href="#q-a-playback-issues" aria-hidden="true">#</a> Q&amp;A(Playback Issues) ?</h2><ul><li><p>OBS streaming and RTC playback stuttering?</p><p>WebRTC H.264 does not support B-frames, so B-frames need to be removed when using FFmpeg. You can add the <code>-bf 0</code> parameter or specify the H.264 profile as baseline.</p></li><li><p>RTSP streaming, unsuccessful RTC playback?</p><p>Set <code>directProxy</code> in the zlm configuration file to 0 for RTSP streaming.</p></li><li><p>WebRTC video or audio not playing?</p><p>WebRTC in the web client supports encoding formats such as H.264, opus/48000/2, pcma/8000, pcmu/8000. Check if the encoding format is correct. Usually, the audio is not supported, and you need to use the transcode branch for transcoding (video does not require transcoding).</p></li></ul>',2);function R(I,$){const e=l("ExternalLinkIcon");return o(),r("div",null,[p,n("ul",null,[d,n("li",null,[u,n("p",null,[s("Click "),n("a",m,[s("here"),a(e)]),s(" to download and install.")]),b])]),v,n("p",null,[s("The latest zlmediakit source code comes with a valid SSL certificate "),k,s(", corresponding to the domain name "),h,s(", which resolves to the IP address "),g,s(". To start testing, open "),n("a",f,[s("https://default.zlmediakit.com/webrtc/"),a(e)]),s(" in your browser. Please start streaming first before testing playback. If WebRTC playback is not working, please refer to this "),n("a",_,[s("issue"),a(e)]),s(".")]),w,n("ul",null,[y,n("li",null,[n("p",null,[s("Compilation on Ubuntu You can refer to this "),n("a",x,[s("blog post"),a(e)]),s(" written by a skilled user.")])]),n("li",null,[C,n("p",null,[s("You can refer to this "),n("a",T,[s("blog post"),a(e)]),s(" written by a skilled user.")]),n("p",null,[s("Also, refer to "),n("a",S,[s("this comment"),a(e)]),s(".")])])]),P])}const L=i(c,[["render",R],["__file","webrtc_compilation_and_use.html.vue"]]);export{L as default};
