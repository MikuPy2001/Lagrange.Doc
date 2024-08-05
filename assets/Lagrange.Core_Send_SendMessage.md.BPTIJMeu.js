import{_ as s,c as a,o as e,a4 as i}from"./chunks/framework.DUCr4ECn.js";const _=JSON.parse('{"title":"发送消息","description":"","frontmatter":{},"headers":[],"relativePath":"Lagrange.Core/Send/SendMessage.md","filePath":"Lagrange.Core/Send/SendMessage.md","lastUpdated":1722846324000}'),n={name:"Lagrange.Core/Send/SendMessage.md"},t=i(`<h1 id="发送消息" tabindex="-1">发送消息 <a class="header-anchor" href="#发送消息" aria-label="Permalink to &quot;发送消息&quot;">​</a></h1><p>方法: <code>SendMessage(_messageChain)</code></p><p>参数: <code>MessageChain</code> <a href="/Lagrange.Doc/Lagrange.Core/MessageChain/MessageBuilder">构建消息导航</a></p><p>返回: <code>MessageResult</code> <a href="/Lagrange.Doc/Lagrange.Core/Send/MessageResult">消息结果导航</a></p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> messageChain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//假设之前已经构建好了消息链</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SendMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(messageChain.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">补充</p><p>发送消息成功后, 对应的 XXXMessageEvent 会被自己的消息触发, 可用于监听消息发送的状态</p></div>`,6),h=[t];function p(l,r,d,o,g,c){return e(),a("div",null,h)}const u=s(n,[["render",p]]);export{_ as __pageData,u as default};