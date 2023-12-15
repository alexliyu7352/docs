import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e}from"./app-RP31lnfq.js";const p={},t=e(`<h2 id="_1、注册" tabindex="-1"><a class="header-anchor" href="#_1、注册" aria-hidden="true">#</a> 1、注册</h2><ul><li>注册请求：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>REGISTER sip:130909115229300920@10.64.49.44:7100 SIP/2.0
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport;branch=z9hG4bK4162288924</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=382068091</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">143225205</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">1 REGISTER</span></span>
<span class="token header"><span class="token header-name keyword">Contact</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Max-Forwards</span><span class="token punctuation">:</span> <span class="token header-value">70</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Expires</span><span class="token punctuation">:</span> <span class="token header-value">7200</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回复 401：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>SIP/2.0 401 Unauthorized
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport=7100;branch=z9hG4bK4162288924</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=382068091</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=916944766</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">143225205</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">1 REGISTER</span></span>
<span class="token header"><span class="token header-name keyword">WWW-Authenticate</span><span class="token punctuation">:</span> <span class="token header-value">Digest realm=&quot;hik&quot;, nonce=&quot;a8afe6fcbee6331d89d3eb0d3d19ce39&quot;, opaque=&quot;a853e4f25298413f9bf3a9aa6767857d&quot;, algorithm=MD5</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Expires</span><span class="token punctuation">:</span> <span class="token header-value">7200</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>再次注册：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>REGISTER sip:130909115229300920@10.64.49.44:7100 SIP/2.0
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport;branch=z9hG4bK3997518011</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=382068091</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">143225205</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">2 REGISTER</span></span>
<span class="token header"><span class="token header-name keyword">Contact</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Digest username=&quot;admin&quot;, realm=&quot;hik&quot;, nonce=&quot;a8afe6fcbee6331d89d3eb0d3d19ce39&quot;, uri=&quot;sip:130909115229300920@10.64.49.44:7100&quot;, response=&quot;907ddb1bcc25174d7de4a96c947fb066&quot;, algorithm=MD5, opaque=&quot;a853e4f25298413f9bf3a9aa6767857d&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Max-Forwards</span><span class="token punctuation">:</span> <span class="token header-value">70</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Expires</span><span class="token punctuation">:</span> <span class="token header-value">7200</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注册成功：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>SIP/2.0 200 OK
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport=7100;branch=z9hG4bK3997518011</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=382068091</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=705514612</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">143225205</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">2 REGISTER</span></span>
<span class="token header"><span class="token header-name keyword">Contact</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">2013-09-10T16:01:51</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、注销" tabindex="-1"><a class="header-anchor" href="#_2、注销" aria-hidden="true">#</a> 2、注销</h2><ul><li>注销请求：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>REGISTER sip:130909115229300920@10.64.49.44:7100 SIP/2.0
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport;branch=z9hG4bK1670314216</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=1928169842</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">3187228566</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">1 REGISTER</span></span>
<span class="token header"><span class="token header-name keyword">Contact</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Max-Forwards</span><span class="token punctuation">:</span> <span class="token header-value">70</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Expires</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回复 401：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>SIP/2.0 401 Unauthorized
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport=7100;branch=z9hG4bK1670314216</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=1928169842</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=1002632848</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">3187228566</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">1 REGISTER</span></span>
<span class="token header"><span class="token header-name keyword">WWW-Authenticate</span><span class="token punctuation">:</span> <span class="token header-value">Digest realm=&quot;hik&quot;, nonce=&quot;42dc1acbe02b15743942c0af9314768b&quot;, opaque=&quot;8e3da4136ac9ab537de09a9932c2a9a3&quot;, algorithm=MD5</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Expires</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>再次注销:</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>REGISTER sip:130909115229300920@10.64.49.44:7100 SIP/2.0
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport;branch=z9hG4bK317693249</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=1928169842</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">3187228566</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">2 REGISTER</span></span>
<span class="token header"><span class="token header-name keyword">Contact</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Digest username=&quot;admin&quot;, realm=&quot;hik&quot;, nonce=&quot;42dc1acbe02b15743942c0af9314768b&quot;, uri=&quot;sip:130909115229300920@10.64.49.44:7100&quot;, response=&quot;7328353ed26e3f2edf3ff57e834d5665&quot;, algorithm=MD5, opaque=&quot;8e3da4136ac9ab537de09a9932c2a9a3&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Max-Forwards</span><span class="token punctuation">:</span> <span class="token header-value">70</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Expires</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注销成功：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>SIP/2.0 200 OK
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport=7100;branch=z9hG4bK317693249</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=1928169842</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=409851991</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">3187228566</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">2 REGISTER</span></span>
<span class="token header"><span class="token header-name keyword">Contact</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">2013-09-10T14:04:41</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、心跳" tabindex="-1"><a class="header-anchor" href="#_3、心跳" aria-hidden="true">#</a> 3、心跳</h2><ul><li>请求：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>MESSAGE sip:130909115229300920@10.64.49.44:7100 SIP/2.0
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport;branch=z9hG4bK2672759896</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=308835751</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909115229300920@10.64.49.44:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">63810466</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">20 MESSAGE</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">Application/MANSCDP+xml</span></span>
<span class="token header"><span class="token header-name keyword">Max-Forwards</span><span class="token punctuation">:</span> <span class="token header-value">70</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span>   <span class="token header-value">150</span></span>
<span class="token application-xml">
<span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Notify</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CmdType</span><span class="token punctuation">&gt;</span></span>Keepalive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CmdType</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SN</span><span class="token punctuation">&gt;</span></span>2749<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SN</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DeviceID</span><span class="token punctuation">&gt;</span></span>130909113319427420<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DeviceID</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Status</span><span class="token punctuation">&gt;</span></span>OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Status</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Notify</span><span class="token punctuation">&gt;</span></span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回复：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>SIP/2.0 200 OK
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.218:7100;rport=7100;branch=z9hG4bK2672759896</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=308835751</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909115229300920@10.64.49.44:7100&gt;;tag=1578583786</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">63810466</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">20 MESSAGE</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、目录检索" tabindex="-1"><a class="header-anchor" href="#_4、目录检索" aria-hidden="true">#</a> 4、目录检索</h2><ul><li>请求：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>MESSAGE sip:130909113319427420@10.64.49.218:7100 SIP/2.0
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.44:7100;rport;branch=z9hG4bK32925498</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909115229300920@10.64.49.44:7100&gt;;tag=1307626839</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">2367611040</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">20 MESSAGE</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">Application/MANSCDP+xml</span></span>
<span class="token header"><span class="token header-name keyword">Max-Forwards</span><span class="token punctuation">:</span> <span class="token header-value">70</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span>   <span class="token header-value">124</span></span>
<span class="token application-xml">
<span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Query</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CmdType</span><span class="token punctuation">&gt;</span></span>Catalog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CmdType</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SN</span><span class="token punctuation">&gt;</span></span>471<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SN</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DeviceID</span><span class="token punctuation">&gt;</span></span>130909113319427420<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DeviceID</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Query</span><span class="token punctuation">&gt;</span></span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回复：</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>SIP/2.0 200 OK
<span class="token header"><span class="token header-name keyword">Via</span><span class="token punctuation">:</span> <span class="token header-value">SIP/2.0/UDP 10.64.49.44:7100;rport=7100;branch=z9hG4bK32925498</span></span>
<span class="token header"><span class="token header-name keyword">From</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909115229300920@10.64.49.44:7100&gt;;tag=1307626839</span></span>
<span class="token header"><span class="token header-name keyword">To</span><span class="token punctuation">:</span> <span class="token header-value">&lt;sip:130909113319427420@10.64.49.218:7100&gt;;tag=1981225076</span></span>
<span class="token header"><span class="token header-name keyword">Call-ID</span><span class="token punctuation">:</span> <span class="token header-value">2367611040</span></span>
<span class="token header"><span class="token header-name keyword">CSeq</span><span class="token punctuation">:</span> <span class="token header-value">20 MESSAGE</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Hikvision</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),l=[t];function o(c,d){return n(),s("div",null,l)}const u=a(p,[["render",o],["__file","gb28181_sip_signaling_packet_capture.html.vue"]]);export{u as default};
