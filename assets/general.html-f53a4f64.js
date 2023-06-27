import{_ as d,r as l,o as s,c as a,a as n,F as e,g as t,b as o,d as r,e as i}from"./app-2c72f79b.js";const u={},v=i(`<h1 id="通用-css" tabindex="-1"><a class="header-anchor" href="#通用-css" aria-hidden="true">#</a> 通用 CSS</h1><h2 id="设置小于-12px-字体" tabindex="-1"><a class="header-anchor" href="#设置小于-12px-字体" aria-hidden="true">#</a> 设置小于 12px 字体</h2><p>如设置 <code>10px</code> 的字体大小，由于浏览器限制最小字体为 <code>12px</code>，可以先将字体设置成 <code>20px</code>，然后利用<code>transform</code>的<code>scale</code>属性缩小一半即 <code>0.5</code> 即可，由于缩小后位置会发生偏移，通过<code>transform-origin</code>重新设置元素的原点。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.font-size-10</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👇👇👇👇 显示效果如下:</p><div class="demo-font-size-10">我是 10px 大小的文字</div><div class="demo-font-size-12">我是 12px 大小的文字</div><h2 id="元素等比宽高" tabindex="-1"><a class="header-anchor" href="#元素等比宽高" aria-hidden="true">#</a> 元素等比宽高</h2><h3 id="width-padding-大法" tabindex="-1"><a class="header-anchor" href="#width-padding-大法" aria-hidden="true">#</a> width padding 大法</h3><p>将 <code>width</code> 和 <code>padding-top</code> 设置成同一个值，宽高会成 1:1 比例，高度会有<code>padding-top</code>撑起来。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.demo-box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token comment">/* width: 100px; */</span>
  <span class="token comment">/* padding-top: 100px; */</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo-box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token comment">/* width: 100px; */</span>
  <span class="token comment">/* padding-top: 50px; */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果预览 👇 可以改变窗口试试！</p>`,12),m={class:"demo-list-1"},h={class:"demo-box"},_={class:"demo-list-2"},k={class:"demo-box"},b=n("h3",{id:"aspect-ratio-大法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#aspect-ratio-大法","aria-hidden":"true"},"#"),o(" aspect-ratio 大法")],-1),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.demo-box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token comment">/* width: 100px; */</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 1 / 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo-box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token comment">/* width: 100px; */</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 2 / 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果预览 👇 可以改变窗口试试！</p>`,2),f={class:"demo-list-3"},y={class:"demo-box"},w={class:"demo-list-4"},z={class:"demo-box"};function C(N,S){const p=l("ExternalLinkIcon");return s(),a("div",null,[v,n("div",m,[(s(),a(e,null,t(3,c=>n("div",h)),64))]),n("div",_,[(s(),a(e,null,t(3,c=>n("div",k)),64))]),b,n("p",null,[o("使用 Css 的属性"),n("a",x,[o("aspect-ratio"),r(p)]),o("，设置相应的比例。")]),g,n("div",f,[(s(),a(e,null,t(3,c=>n("div",y)),64))]),n("div",w,[(s(),a(e,null,t(3,c=>n("div",z)),64))])])}const B=d(u,[["render",C],["__file","general.html.vue"]]);export{B as default};
