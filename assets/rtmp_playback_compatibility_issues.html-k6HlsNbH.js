import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c,e}from"./app-RP31lnfq.js";const a={},o=e("<p>一般来说 rtmp 的规范是 先发送 metadata ，然后发送 config 帧，然后发送关键帧 然后是普通帧</p><p>config 帧收到后就能初始化解码器了</p><p>但是有些流不太一样，并没有收到视频的 config 帧就收到其他帧了</p><p>这个时候视频 Track 并没创建和初始化</p><p>初步怀疑是 nginx 的 rtmp 服务器兼容性不好</p><p>zlm 的推流器会严格按照先发送 metadata ，然后发送 config 帧，然后发送关键帧 然后是普通帧的流程来做</p><p>也会缓存所有的 config 帧</p><p>ffplay 能播放成功是因为它是根据数据量和时间来判断播放成功</p><p>只要数据量达到一定量或者时间达到一定时间 就会触发播放成功的事件</p><p>这样做的好处是 播放成功率高 坏处是打开视频时间长</p>",10),i=[o];function _(n,s){return t(),c("div",null,i)}const f=p(a,[["render",_],["__file","rtmp_playback_compatibility_issues.html.vue"]]);export{f as default};
