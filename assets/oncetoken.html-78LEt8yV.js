import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-RP31lnfq.js";const p={},o=t(`<p>ZLMediaKit 里面大量用到了一个名叫<code>onceToken</code>对象, 很多小伙伴对这个工具类不明就里，下面我在此解释下其作用： onceToken 主要使用 C/C++的 RAII 思想，确保在变量构造和析构时执行自定义代码；主要应用场景有如下：</p><ul><li>1、作为全局变量用，在程序加载时执行特定代码，例如生成默认配置文件：</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">////////////HLS相关配置///////////</span>
<span class="token keyword">namespace</span> Hls <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">HLS_FIELD</span> <span class="token string">&quot;hls.&quot;</span></span>
<span class="token comment">//HLS切片时长,单位秒</span>
<span class="token keyword">const</span> string kSegmentDuration <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;segDur&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//HLS切片个数</span>
<span class="token keyword">const</span> string kSegmentNum <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;segNum&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//HLS切片从m3u8文件中移除后，继续保留在磁盘上的个数</span>
<span class="token keyword">const</span> string kSegmentRetain <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;segRetain&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//HLS文件写缓存大小</span>
<span class="token keyword">const</span> string kFileBufSize <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;fileBufSize&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//录制文件路径</span>
<span class="token keyword">const</span> string kFilePath <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;filePath&quot;</span><span class="token punctuation">;</span>

onceToken <span class="token function">token</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kSegmentDuration<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kSegmentNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kSegmentRetain<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kFileBufSize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">64</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
  mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kFilePath<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;./www&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">//namespace Hls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2、作为 static 变量，确保代码只执行一次：</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int64_t</span> <span class="token class-name">HttpSession</span><span class="token double-colon punctuation">::</span><span class="token function">onRecvHeader</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>header<span class="token punctuation">,</span><span class="token keyword">uint64_t</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">typedef</span> <span class="token keyword">void</span> <span class="token punctuation">(</span>HttpSession<span class="token double-colon punctuation">::</span><span class="token operator">*</span>HttpCMDHandle<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int64_t</span> <span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> unordered_map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> HttpCMDHandle<span class="token operator">&gt;</span> s_func_map<span class="token punctuation">;</span>
  <span class="token keyword">static</span> onceToken <span class="token function">token</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s_func_map<span class="token punctuation">.</span><span class="token function">emplace</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>HttpSession<span class="token double-colon punctuation">::</span>Handle_Req_GET<span class="token punctuation">)</span><span class="token punctuation">;</span>
    s_func_map<span class="token punctuation">.</span><span class="token function">emplace</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>HttpSession<span class="token double-colon punctuation">::</span>Handle_Req_POST<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//后续代码省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、作为局部变量，确保函数退出前做一些清理工作，例如释放锁：</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    <span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>ArgsType<span class="token operator">&gt;</span>
    <span class="token keyword">bool</span> <span class="token function">emitEvent</span><span class="token punctuation">(</span><span class="token keyword">const</span> string <span class="token operator">&amp;</span>strEvent<span class="token punctuation">,</span>ArgsType <span class="token operator">&amp;&amp;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    onceToken <span class="token function">token</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
      <span class="token comment">//上锁，记录锁定线程id</span>
      _mtxListener<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>_lock_depth<span class="token operator">++</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        _lock_thread <span class="token operator">=</span> this_thread<span class="token double-colon punctuation">::</span><span class="token function">get_id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//释放锁，取消锁定线程id</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">--</span>_lock_depth <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        _lock_thread <span class="token operator">=</span> thread<span class="token double-colon punctuation">::</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>_map_moved<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">//还原_mapListener</span>
          _map_moved <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
          _mapListener <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">move</span><span class="token punctuation">(</span>_mapListenerTemp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      _mtxListener<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//后续代码省略</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4、这个对象取名源自 pthread_once 以及 ios 下的 dispatch_once。</li></ul>`,8),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","oncetoken.html.vue"]]);export{r as default};
