import{_ as o,r as p,o as t,c,f as i,a as s,b as n,d as l,e as a}from"./app-2c72f79b.js";const d={},r=a('<h1 id="优雅管理-vue-全局组件和插件" tabindex="-1"><a class="header-anchor" href="#优雅管理-vue-全局组件和插件" aria-hidden="true">#</a> 优雅管理 Vue 全局组件和插件</h1><p>随着项目的不断变大，可能有些人会把插件的引入和全局组件的注册都放到<code>main.js</code>中，导致后面<code>main.js</code>里面一大坨引入代码，看起来杂乱无比，也不利于后期进行维护，所以我们尽可能的让<code>main.js</code>看起来整洁些。此处就用到<code>webpack</code>的<code>require.context</code>功能，实现 Vue 自动注册全局组件及插件，方便全局组件和插件的管理。</p>',2),u=a(`<h2 id="全局插件管理" tabindex="-1"><a class="header-anchor" href="#全局插件管理" aria-hidden="true">#</a> 全局插件管理</h2><p>1、项目中新建<code>plugins</code>目录，和<code>components</code>目录保持同级。<br> 2、<code>plugins</code>目录中新建<code>index.js</code>，以引入<code>element-ui</code>为例：<br> 3、再<code>plugins</code>目录中新建<code>element.js</code>，写入官方的引用方法（暂不考虑按需引入问题）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Element <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-ui/lib/theme-chalk/index.css&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Element<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">&#39;small&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、<code>index.js</code>中引入<code>element.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./element&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、<code>main.js</code>中引入<code>plugins</code>中的<code>index.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token comment">// 引入插件，放在此处引用是为了下面的router和store中可能会用到某些插件的功能。</span>
<span class="token keyword">import</span> <span class="token string">&#39;./plugins/index&#39;</span>

<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样<code>main.js</code>看起来就清爽很多了，后面有新增的插件，只需要再 plugins 目录下新建相应的插件名称，然后在<code>index.js</code>中引入即可，再多的插件也可以很方便的进行维护。</p><h2 id="自动注册全局组件" tabindex="-1"><a class="header-anchor" href="#自动注册全局组件" aria-hidden="true">#</a> 自动注册全局组件</h2>`,9),k={href:"https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C",target:"_blank",rel:"noopener noreferrer"},m=s("br",null,null,-1),v=s("code",null,"lodash",-1),b=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install i lodash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、<code>components</code>目录中新建<code>globals</code>目录，后面需要全局注册的组件全部放这个里面<br> 3、、<code>plugins</code>目中新建<code>auto-regist.js</code>（文件名可随意），写入以下内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> upperFirst <span class="token keyword">from</span> <span class="token string">&#39;lodash/upperFirst&#39;</span>
<span class="token keyword">import</span> camelCase <span class="token keyword">from</span> <span class="token string">&#39;lodash/camelCase&#39;</span>

<span class="token keyword">const</span> requireComponent <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span>
  <span class="token comment">// 其组件目录的相对路径</span>
  <span class="token string">&#39;../components/globals&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否查询其子目录</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 匹配基础组件文件名的正则表达式</span>
  <span class="token operator">/</span>\\w<span class="token operator">+</span>\\<span class="token punctuation">.</span>vue$<span class="token operator">/</span>
<span class="token punctuation">)</span>

requireComponent<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fileName</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取组件配置</span>
  <span class="token keyword">const</span> componentConfig <span class="token operator">=</span> <span class="token function">requireComponent</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>

  <span class="token comment">// 获取组件的 PascalCase 命名</span>
  <span class="token keyword">const</span> componentName <span class="token operator">=</span> <span class="token function">upperFirst</span><span class="token punctuation">(</span>
    <span class="token function">camelCase</span><span class="token punctuation">(</span>
      <span class="token comment">// 获取和目录深度无关的文件名</span>
      fileName
        <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token comment">// 全局注册组件</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>
    componentName<span class="token punctuation">,</span>
    <span class="token comment">// 如果这个组件选项是通过 \`export default\` 导出的，</span>
    <span class="token comment">// 那么就会优先使用 \`.default\`，</span>
    <span class="token comment">// 否则回退到使用模块的根。</span>
    componentConfig<span class="token punctuation">.</span>default <span class="token operator">||</span> componentConfig
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、<code>plugins</code>中<code>index.js</code>引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./auto-regist&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./element&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后可以<code>components/globals</code>中放一个测试组件进行测试。</p><h2 id="更优雅加载插件" tabindex="-1"><a class="header-anchor" href="#更优雅加载插件" aria-hidden="true">#</a> 更优雅加载插件</h2><p>每次在<code>plugins</code>中新增了一个插件后都需要在<code>index.js</code>中引用，假如有 100 个这样的插件，我们就得写 100 个，这里需要的和全局组件一样，在<code>index.js</code>中自动引入<code>plugins</code>中的插件，原理和上面的<code>自动注册全局组件</code>类似。<br> 改造下<code>index.js</code>的代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> requirePlugin <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span>
  <span class="token comment">// 当前plugins目录</span>
  <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否查询其子目录</span>
  <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 匹配当前plugins目录下的js文件</span>
  <span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">+</span>\\<span class="token punctuation">.</span>js$<span class="token operator">/</span>
<span class="token punctuation">)</span>
requirePlugin<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fileName</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">requirePlugin</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就能自动加载引入<code>plugins</code>中的所有插件了。<br> 但是这样会存在一个插件引入顺序问题，因为 webpack 是根据你文件夹中文件的位置排序的，<br> 如有 A、B、C 三个插件，A 插件需要用到 B 插件提供的某个功能，这种情况下由于 A 插件被先引用，B 后引用，<br> 会导致 A 插件代码报错情况，这里用个取巧的方法，将 A、B 插件命名成以下形式：<br><code>a-2-A.js</code>、<code>a-1-B.js</code>，这样 B 插件就会排在前面优先加载。<br> 如果不存在依赖关系，可随意。</p><h2 id="目录结构图" tabindex="-1"><a class="header-anchor" href="#目录结构图" aria-hidden="true">#</a> 目录结构图</h2><figure><img src="https://user-images.githubusercontent.com/29849550/63434161-1da40c80-c457-11e9-8064-0b21efd79486.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>`,12);function g(f,h){const e=p("ExternalLinkIcon");return t(),c("div",null,[r,i(" more "),u,s("p",null,[n("官网文档参考："),s("a",k,[n("点击前往"),l(e)]),n("，"),m,n(" 1、先安装"),v]),b])}const x=o(d,[["render",g],["__file","vue-auto-regist-global-component-and-plugin.html.vue"]]);export{x as default};
