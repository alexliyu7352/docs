import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-RP31lnfq.js";const p={},e=t(`<p>Within ZLMediaKit, there is extensive use of an object called <code>onceToken</code>. Many developers are unfamiliar with this utility class, so I will explain its purpose below: The <code>onceToken</code> primarily applies the RAII (Resource Acquisition Is Initialization) concept from C/C++, ensuring the execution of custom code during variable construction and destruction. It is mainly used in the following scenarios:</p><ol><li><p>Used as a global variable to execute specific code during program loading, such as generating default configuration files:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">////////////HLS-related configurations///////////</span>
<span class="token keyword">namespace</span> Hls <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">HLS_FIELD</span> <span class="token string">&quot;hls.&quot;</span></span>
<span class="token comment">//HLS segment duration in seconds</span>
<span class="token keyword">const</span> string kSegmentDuration <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;segDur&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//Number of HLS segments</span>
<span class="token keyword">const</span> string kSegmentNum <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;segNum&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//Number of HLS segments retained on disk after removal from m3u8 file</span>
<span class="token keyword">const</span> string kSegmentRetain <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;segRetain&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//HLS file write buffer size</span>
<span class="token keyword">const</span> string kFileBufSize <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;fileBufSize&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//Recording file path</span>
<span class="token keyword">const</span> string kFilePath <span class="token operator">=</span> HLS_FIELD<span class="token string">&quot;filePath&quot;</span><span class="token punctuation">;</span>

onceToken <span class="token function">token</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kSegmentDuration<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kSegmentNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kSegmentRetain<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kFileBufSize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">64</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
    mINI<span class="token double-colon punctuation">::</span><span class="token function">Instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>kFilePath<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;./www&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">//namespace Hls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Used as a static variable to ensure code execution only once:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int64_t</span> <span class="token class-name">HttpSession</span><span class="token double-colon punctuation">::</span><span class="token function">onRecvHeader</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>header<span class="token punctuation">,</span><span class="token keyword">uint64_t</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">typedef</span> <span class="token keyword">void</span> <span class="token punctuation">(</span>HttpSession<span class="token double-colon punctuation">::</span><span class="token operator">*</span>HttpCMDHandle<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int64_t</span> <span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> unordered_map<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> HttpCMDHandle<span class="token operator">&gt;</span> s_func_map<span class="token punctuation">;</span>
    <span class="token keyword">static</span> onceToken <span class="token function">token</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        s_func_map<span class="token punctuation">.</span><span class="token function">emplace</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>HttpSession<span class="token double-colon punctuation">::</span>Handle_Req_GET<span class="token punctuation">)</span><span class="token punctuation">;</span>
        s_func_map<span class="token punctuation">.</span><span class="token function">emplace</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>HttpSession<span class="token double-colon punctuation">::</span>Handle_Req_POST<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Omitted subsequent code</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Used as a local variable to ensure some cleanup work before a function exits, such as releasing a lock:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    <span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>ArgsType<span class="token operator">&gt;</span>
    <span class="token keyword">bool</span> <span class="token function">emitEvent</span><span class="token punctuation">(</span><span class="token keyword">const</span> string <span class="token operator">&amp;</span>strEvent<span class="token punctuation">,</span>ArgsType <span class="token operator">&amp;&amp;</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        onceToken <span class="token function">token</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
            <span class="token comment">//Lock and record the locked thread ID</span>
            _mtxListener<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>_lock_depth<span class="token operator">++</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                _lock_thread <span class="token operator">=</span> this_thread<span class="token double-colon punctuation">::</span><span class="token function">get_id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//Release the lock and clear the locked thread ID</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">--</span>_lock_depth <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                _lock_thread <span class="token operator">=</span> thread<span class="token double-colon punctuation">::</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>_map_moved<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">//Restore _mapListener</span>
                    _map_moved <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    _mapListener <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">move</span><span class="token punctuation">(</span>_mapListenerTemp<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            _mtxListener<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//Omitted subsequent code</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The name of this object is derived from <code>pthread_once</code> and <code>dispatch_once</code> in iOS.</p></li></ol>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","oncetoken.html.vue"]]);export{r as default};
