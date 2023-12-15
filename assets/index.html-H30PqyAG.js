import{_ as u}from"./vs_code_zh-ltEPcFYF.js";import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as v,f as m,a as e,d as s,b as l,w as n,e as b}from"./app-RP31lnfq.js";const h={},_=e("p",null,"本教程将指导您完成编译和运行 ZLMediaKit。",-1),k=e("h2",{id:"构建环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构建环境","aria-hidden":"true"},"#"),s(" 构建环境")],-1),g=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"新手提示"),e("p",null,"如果你是位新手，强烈建议使用 Ubuntu16 以上版本编译 ZLMediaKit，macOS 是次选推荐平台。不推荐使用 CentOS6.x 或 windows 构建与使用。")],-1),f={class:"hint-container info"},x=e("p",{class:"hint-container-title"},"vcpkg",-1),A=e("h3",{id:"支持-c-11-的编译器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#支持-c-11-的编译器","aria-hidden":"true"},"#"),s(" 支持 C++11 的编译器")],-1),S=e("p",null,"ZLMediaKit 采用了 C++11 的语法和库，要求编译器支持完整的 C++11 标准：",-1),w=e("ul",null,[e("li",null,"Linux: gcc >= 4.8 (4.7 应该也能支持)"),e("li",null,"macOS: Clang >= ??? (我也不知道，估计大部分不会遇到这个问题)"),e("li",null,"Windows: Visual Studio >= 2015 (vs2013 某些版本也能编译通过，如果怕麻烦建议直接 vs2017)")],-1),L=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(` build-essential
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),M=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token parameter variable"},"-y"),s(),e("span",{class:"token function"},"install"),s(` gcc
`),e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token parameter variable"},"-y"),s(),e("span",{class:"token function"},"install"),s(` gcc-c++
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),O=e("p",null,"需要手动切换到高版本 gcc。",-1),K=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token function"},"install"),s(" centos-release-scl "),e("span",{class:"token parameter variable"},"-y"),s(`
`),e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token function"},"install"),s(" devtoolset-4-toolchain "),e("span",{class:"token parameter variable"},"-y"),s(`
`),e("span",{class:"token comment"},"# 切换到高版本 gcc"),s(`
scl `),e("span",{class:"token builtin class-name"},"enable"),s(" devtoolset-4 "),e("span",{class:"token function"},"bash"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C={href:"https://developer.apple.com/cn/xcode/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://visualstudio.microsoft.com/zh-hans/vs/community/",target:"_blank",rel:"noopener noreferrer"},y=e("strong",null,"勾选 C++ 开发环境",-1),D=e("h3",{id:"cmake",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cmake","aria-hidden":"true"},"#"),s(" CMake")],-1),z=e("p",null,"ZLMediaKit 采用 CMake 来构建项目，所以编译需要 CMake。",-1),W=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(` cmake
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token parameter variable"},"-y"),s(),e("span",{class:"token function"},"install"),s(` cmake
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=e("p",null,"需要手动切换到高版本 CMake。",-1),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"wget"),s(` https://github.com/Kitware/CMake/releases/download/v3.17.0-rc3/cmake-3.17.0-rc3.tar.gz
`),e("span",{class:"token function"},"tar"),s(),e("span",{class:"token parameter variable"},"-xvf"),s(` cmake-3.17.0-rc3.tar.gz
`),e("span",{class:"token builtin class-name"},"cd"),s(` cmake-3.17.0-rc3
./configure
`),e("span",{class:"token function"},"make"),s(),e("span",{class:"token parameter variable"},"-j4"),s(`
`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"make"),s(),e("span",{class:"token function"},"install"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("brew "),e("span",{class:"token function"},"install"),s(` cmake
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("li",null,[e("p",null,"若使用 vs2017+，vs 已包含 cmake，你只需在安装时勾选。")],-1),V={href:"https://github.com/Kitware/CMake/releases/download/",target:"_blank",rel:"noopener noreferrer"},U=b(`<h2 id="获取代码" tabindex="-1"><a class="header-anchor" href="#获取代码" aria-hidden="true">#</a> 获取代码</h2><p>使用 Git 克隆 ZLMediaKit 的代码并初始化子模块：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 国内用户推荐从 Gitee 下载</span>
<span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://gitee.com/xia-chu/ZLMediaKit
<span class="token builtin class-name">cd</span> ZLMediaKit
<span class="token comment"># 初始化子模块 （必须执行）</span>
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不能通过下载 zip 包的方式下载源码。因为 ZLMediaKit 依赖于第三方代码并通过 Git 子模块的方式管理。</p></div><h3 id="安装依赖库" tabindex="-1"><a class="header-anchor" href="#安装依赖库" aria-hidden="true">#</a> 安装依赖库</h3><p>ZLMediaKit 依赖一些可选的第三方库。构建时，CMake 将在 path 中查找这些库，并根据检测情况决定是否开启相关特性。</p><ul><li><p>openssl</p><p>你需要在编译前安装 openssl 库以使用相关功能。</p><ul><li>flash player 播放 rtmp</li><li>https/rtsps/webrtc 相关功能。</li></ul></li><li><p>ffmpeg</p><p>ZLMediaKit 可以通过 fork ffmpeg 进程的方式实现多种协议的拉流，编译时不需要安装 FFmpeg。</p></li><li><p>sdl、avcodec、avutil</p><p>这 3 个库供 ZLMediaKit 的 test_player 测试程序使用，你通常不需要安装这 3 个库。</p></li></ul>`,7),j=e("p",null,"除了 openssl，其他都是可选的:",-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(` libssl-dev
`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(` libsdl-dev
`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(` libavcodec-dev
`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(` libavutil-dev
`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt"),s(),e("span",{class:"token function"},"install"),s(` ffmpeg
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),F=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token function"},"install"),s(` libssl-dev
`),e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token function"},"install"),s(` libsdl-dev
`),e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token function"},"install"),s(` libavcodec-dev
`),e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token function"},"install"),s(` libavutil-dev
`),e("span",{class:"token function"},"sudo"),s(" yum "),e("span",{class:"token function"},"install"),s(` ffmpeg
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G={href:"https://blog.51cto.com/mengix/2452395",target:"_blank",rel:"noopener noreferrer"},P=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),s(" brew "),e("span",{class:"token function"},"install"),s(` libssl-dev
`),e("span",{class:"token function"},"sudo"),s(" brew "),e("span",{class:"token function"},"install"),s(` libsdl-dev
`),e("span",{class:"token function"},"sudo"),s(" brew "),e("span",{class:"token function"},"install"),s(` libavcodec-dev
`),e("span",{class:"token function"},"sudo"),s(" brew "),e("span",{class:"token function"},"install"),s(` libavutil-dev
`),e("span",{class:"token function"},"sudo"),s(" brew "),e("span",{class:"token function"},"install"),s(` ffmpeg
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),X={href:"https://slproweb.com/products/Win32OpenSSL.html",target:"_blank",rel:"noopener noreferrer"},H=e("h2",{id:"构建与编译-zlmediakit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构建与编译-zlmediakit","aria-hidden":"true"},"#"),s(" 构建与编译 ZLMediaKit")],-1),q={class:"hint-container info"},J=e("p",{class:"hint-container-title"},"webrtc",-1),Q=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"cd"),s(` ZLMediaKit
`),e("span",{class:"token function"},"mkdir"),s(` build
`),e("span",{class:"token builtin class-name"},"cd"),s(` build
cmake `),e("span",{class:"token punctuation"},".."),s(`
`),e("span",{class:"token function"},"make"),s(),e("span",{class:"token parameter variable"},"-j4"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"cd"),s(` ZLMediaKit
`),e("span",{class:"token function"},"mkdir"),s(` build
`),e("span",{class:"token builtin class-name"},"cd"),s(` build
`),e("span",{class:"token comment"},"# 将 DOPENSSL_ROOT_DIR 指向你的 openssl 路径"),s(`
cmake `),e("span",{class:"token punctuation"},".."),s(),e("span",{class:"token parameter variable"},"-DOPENSSL_ROOT_DIR"),e("span",{class:"token operator"},"="),s(`/usr/local/Cellar/openssl/1.0.2j/
`),e("span",{class:"token function"},"make"),s(),e("span",{class:"token parameter variable"},"-j4"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),$=e("ul",null,[e("li",null,[e("p",null,[s("若使用 vs2017+，可直接在菜单栏中通过 "),e("code",null,"文件"),s(" -> "),e("code",null,"打开"),s(" -> "),e("code",null,"文件夹"),s(" -> "),e("code",null,"选择 ZLMediaKit 代码根目录并打开"),s(" 打开项目文件夹。")]),e("figure",null,[e("img",{src:u,alt:"image",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image")])]),e("li",null,[e("p",null,"否则，你应该:"),e("ol",null,[e("li",null,"使用 cmake-gui 打开工程并生成 vs 工程文件。"),e("li",null,"找到工程文件 (ZLMediaKit.sln) 并用使用 Visual Studio 打开。"),e("li",null,"选择编译 Release 版本。"),e("li",null,"找到目标文件并运行测试用例。")])])],-1),ee=e("p",null,"在 Android Studio 中打开 Android 目录。",-1),se={href:"https://www.jianshu.com/p/44c21296add5",target:"_blank",rel:"noopener noreferrer"},ne=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"cd"),s(` ZLMediaKit
`),e("span",{class:"token function"},"mkdir"),s(),e("span",{class:"token parameter variable"},"-p"),s(` build
`),e("span",{class:"token builtin class-name"},"cd"),s(` build
`),e("span",{class:"token comment"},"# 生成 XCode 工程，工程文件在 build 目录下"),s(`
cmake `),e("span",{class:"token punctuation"},".."),s(),e("span",{class:"token parameter variable"},"-G"),s(" Xcode "),e("span",{class:"token parameter variable"},"-DCMAKE_TOOLCHAIN_FILE"),e("span",{class:"token operator"},"="),e("span",{class:"token punctuation"},".."),s("/cmake/ios.toolchain.cmake  "),e("span",{class:"token parameter variable"},"-DPLATFORM"),e("span",{class:"token operator"},"="),s(`OS64COMBINED
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ae=e("h2",{id:"运行-zlmediakit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#运行-zlmediakit","aria-hidden":"true"},"#"),s(" 运行 ZLMediaKit")],-1),ie=e("p",null,"ZLMediaKit 工程主要生成 3 种二进制目标文件，他们的生成的路径在 release 目录下。",-1),le=e("h3",{id:"mediaserver-进程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mediaserver-进程","aria-hidden":"true"},"#"),s(" MediaServer 进程")],-1),te=e("p",null,"这是 ZLMediaKit 作为服务器的主进程，该进程可以在免去开发的情况下直接作为测试流媒体服务器使用。",-1),ce=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"cd"),s(` ZLMediaKit/release/linux/Debug
`),e("span",{class:"token comment"},"# 通过 -h 可以了解启动参数"),s(`
./MediaServer `),e("span",{class:"token parameter variable"},"-h"),s(`
`),e("span",{class:"token comment"},"# 以守护进程模式启动"),s(`
./MediaServer `),e("span",{class:"token parameter variable"},"-d"),s(),e("span",{class:"token operator"},"&"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),de=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"cd"),s(` ZLMediaKit/release/mac/Debug
`),e("span",{class:"token comment"},"# 通过 -h 可以了解启动参数"),s(`
./MediaServer `),e("span",{class:"token parameter variable"},"-h"),s(`
`),e("span",{class:"token comment"},"# 以守护进程模式启动"),s(`
./MediaServer `),e("span",{class:"token parameter variable"},"-d"),s(),e("span",{class:"token operator"},"&"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),oe=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"cd"),s(` ZLMediaKit/release/windows/Debug
`),e("span",{class:"token comment"},"# 通过 -h 可以了解启动参数"),s(`
./MediaServer.exe `),e("span",{class:"token parameter variable"},"-h"),s(`
`),e("span",{class:"token comment"},"# 以守护进程模式启动"),s(`
./MediaServer.exe `),e("span",{class:"token parameter variable"},"-d"),s(),e("span",{class:"token operator"},"&"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ue=e("h3",{id:"c-接口的-sdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#c-接口的-sdk","aria-hidden":"true"},"#"),s(" C 接口的 SDK")],-1),re=e("p",null,"ZLMediaKit 同时提供 C 接口的 SDK 库。",-1),pe=e("p",null,[s("头文件位于 "),e("code",null,"ZLMediaKit/api/include"),s("，有详细的注释，一般足够二次开发使用。")],-1),ve=e("p",null,"库文件为:",-1),me=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`ZLMediaKit/release/linux/Debug/libmk_api.so
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),be=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`ZLMediaKit/release/linux/mac/libmk_api.dylib
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),he=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`ZLMediaKit/release/windows/Debug/mk_api.dll
ZLMediaKit/release/windows/Debug/mk_api.lib
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_e=e("h3",{id:"以-test-开头的测试程序",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#以-test-开头的测试程序","aria-hidden":"true"},"#"),s(" 以 "),e("code",null,"test_"),s(" 开头的测试程序")],-1),ke=e("p",null,[s("相关代码在 "),e("code",null,"ZLMediaKit/tests"),s(" 目录下，你可以对照代码启动测试进程。")],-1),ge=e("h2",{id:"推流测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推流测试","aria-hidden":"true"},"#"),s(" 推流测试")],-1);function fe(xe,Ae){const t=o("RouterLink"),c=o("ExternalLinkIcon"),d=o("Tabs");return p(),v("div",null,[_,m(" more "),k,g,e("div",f,[x,e("p",null,[s("ZLMediaKit 已上架 vcpkg，便捷安装请参考 "),l(t,{to:"/zh/guide/install/install_zlmediakit_using_vcpkg.html"},{default:n(()=>[s("vcpkg 安装 ZLMediaKit")]),_:1}),s("。")])]),A,S,w,l(d,{id:"40",data:[{id:"Debian 系 (包括 Ubuntu)"},{id:"CentOS7+"},{id:"CentOS 6.x"},{id:"macOS"},{id:"Windows"}],"tab-id":"env"},{title0:n(({value:a,isActive:i})=>[s("Debian 系 (包括 Ubuntu)")]),title1:n(({value:a,isActive:i})=>[s("CentOS7+")]),title2:n(({value:a,isActive:i})=>[s("CentOS 6.x")]),title3:n(({value:a,isActive:i})=>[s("macOS")]),title4:n(({value:a,isActive:i})=>[s("Windows")]),tab0:n(({value:a,isActive:i})=>[L]),tab1:n(({value:a,isActive:i})=>[M]),tab2:n(({value:a,isActive:i})=>[O,K]),tab3:n(({value:a,isActive:i})=>[e("p",null,[e("a",C,[s("安装最新的 Xcode"),l(c)]),s("。")])]),tab4:n(({value:a,isActive:i})=>[e("p",null,[e("a",Z,[s("安装最新的 Visual Studio Community"),l(c)]),s(" 并"),y,s("。")])]),_:1},8,["data"]),D,z,l(d,{id:"70",data:[{id:"Debian 系 (包括 Ubuntu)"},{id:"CentOS7+"},{id:"CentOS 6.x"},{id:"macOS"},{id:"Windows"}],"tab-id":"env"},{title0:n(({value:a,isActive:i})=>[s("Debian 系 (包括 Ubuntu)")]),title1:n(({value:a,isActive:i})=>[s("CentOS7+")]),title2:n(({value:a,isActive:i})=>[s("CentOS 6.x")]),title3:n(({value:a,isActive:i})=>[s("macOS")]),title4:n(({value:a,isActive:i})=>[s("Windows")]),tab0:n(({value:a,isActive:i})=>[W]),tab1:n(({value:a,isActive:i})=>[E]),tab2:n(({value:a,isActive:i})=>[N,R]),tab3:n(({value:a,isActive:i})=>[I]),tab4:n(({value:a,isActive:i})=>[e("ul",null,[T,e("li",null,[e("p",null,[s("否则你需要 "),e("a",V,[s("下载并安装 cmake-gui"),l(c)]),s("。")])])])]),_:1},8,["data"]),U,l(d,{id:"157",data:[{id:"Debian 系 (包括 Ubuntu)"},{id:"CentOS7+"},{id:"CentOS 6.x"},{id:"macOS"},{id:"Windows"}],"tab-id":"env"},{title0:n(({value:a,isActive:i})=>[s("Debian 系 (包括 Ubuntu)")]),title1:n(({value:a,isActive:i})=>[s("CentOS7+")]),title2:n(({value:a,isActive:i})=>[s("CentOS 6.x")]),title3:n(({value:a,isActive:i})=>[s("macOS")]),title4:n(({value:a,isActive:i})=>[s("Windows")]),tab0:n(({value:a,isActive:i})=>[j,B]),tab1:n(({value:a,isActive:i})=>[F]),tab2:n(({value:a,isActive:i})=>[e("p",null,[s("请 "),e("a",G,[s("参考此博文"),l(c)]),s("。")])]),tab3:n(({value:a,isActive:i})=>[P]),tab4:n(({value:a,isActive:i})=>[e("p",null,[e("a",X,[s("下载并安装 openssl"),l(c)]),s("。")])]),_:1},8,["data"]),H,e("div",q,[J,e("p",null,[s("由于功能复杂，默认情况下不开启编译 webrtc，可参考 "),l(t,{to:"/zh/guide/protocol/webrtc/webrtc_compilation_and_use.html"},{default:n(()=>[s("编译与使用 webrtc")]),_:1})])]),l(d,{id:"189",data:[{id:"Linux"},{id:"macOS"},{id:"Windows"},{id:"Android"},{id:"iOS"}],"tab-id":"env"},{title0:n(({value:a,isActive:i})=>[s("Linux")]),title1:n(({value:a,isActive:i})=>[s("macOS")]),title2:n(({value:a,isActive:i})=>[s("Windows")]),title3:n(({value:a,isActive:i})=>[s("Android")]),title4:n(({value:a,isActive:i})=>[s("iOS")]),tab0:n(({value:a,isActive:i})=>[Q]),tab1:n(({value:a,isActive:i})=>[Y]),tab2:n(({value:a,isActive:i})=>[$,e("p",null,[s("有关 Windows 编译可参考 "),l(t,{to:"/zh/guide/install/compilation_instructions_for_windows_version.html"},{default:n(()=>[s("Windows 编译说明")]),_:1})])]),tab3:n(({value:a,isActive:i})=>[ee]),tab4:n(({value:a,isActive:i})=>[e("p",null,[s("可参考 "),e("a",se,[s("此博文"),l(c)]),s(" 生成 XCode 工程然后编译 c api 的静态库:")]),ne]),_:1}),ae,ie,le,te,e("p",null,[s("如果你需要更复杂的业务逻辑，可以通过 "),l(t,{to:"/zh/guide/media_server/web_hook_api.html"},{default:n(()=>[s("Web HOOK")]),_:1}),s("和 "),l(t,{to:"/zh/guide/media_server/restful_api.html"},{default:n(()=>[s("RESTful API")]),_:1}),s("实现。你可以通过 "),l(t,{to:"/zh/guide/media_server/config_file.html"},{default:n(()=>[s("配置文件")]),_:1}),s(" 控制其参数。")]),l(d,{id:"265",data:[{id:"Linux"},{id:"macOS"},{id:"Windows"}],"tab-id":"env"},{title0:n(({value:a,isActive:i})=>[s("Linux")]),title1:n(({value:a,isActive:i})=>[s("macOS")]),title2:n(({value:a,isActive:i})=>[s("Windows")]),tab0:n(({value:a,isActive:i})=>[ce]),tab1:n(({value:a,isActive:i})=>[de]),tab2:n(({value:a,isActive:i})=>[oe]),_:1}),ue,re,pe,ve,l(d,{id:"288",data:[{id:"Linux"},{id:"macOS"},{id:"Windows"}],"tab-id":"env"},{title0:n(({value:a,isActive:i})=>[s("Linux")]),title1:n(({value:a,isActive:i})=>[s("macOS")]),title2:n(({value:a,isActive:i})=>[s("Windows")]),tab0:n(({value:a,isActive:i})=>[me]),tab1:n(({value:a,isActive:i})=>[be]),tab2:n(({value:a,isActive:i})=>[he]),_:1}),_e,ke,ge,e("p",null,[s("请参考 "),l(t,{to:"/zh/guide/media_server/push_test.html"},{default:n(()=>[s("推流播放测试")]),_:1}),s("。")])])}const Me=r(h,[["render",fe],["__file","index.html.vue"]]);export{Me as default};
