import{_ as s,o as n,c as a,U as p}from"./chunks/framework.ffb49f95.js";const d=JSON.parse('{"title":"主题","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/advance.md","filePath":"guide/advance.md"}'),l={name:"guide/advance.md"},o=p(`<h1 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to &quot;主题&quot;">​</a></h1><h2 id="light-dark" tabindex="-1">Light / Dark <a class="header-anchor" href="#light-dark" aria-label="Permalink to &quot;Light / Dark&quot;">​</a></h2><p>直接采用<code>element plus</code>现有的主题更换方案</p><blockquote><p><a href="https://element-plus.org/zh-CN/guide/theming.html" target="_blank" rel="noreferrer">https://element-plus.org/zh-CN/guide/theming.html</a></p></blockquote><h3 id="采用scss变量的方式" tabindex="-1">采用scss变量的方式 <a class="header-anchor" href="#采用scss变量的方式" aria-label="Permalink to &quot;采用scss变量的方式&quot;">​</a></h3><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 新建 light.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@forward</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-plus/theme-chalk/src/common/var.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">with</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">$--colors</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;primary&#39;</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;base&#39;</span><span style="color:#E1E4E8;">: #</span><span style="color:#B392F0;">00599D</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ),</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">$button-padding-vertical</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;large&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">13</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">9</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;small&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">6</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;dark.scss&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新建 dark.scss </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@</span><span style="color:#FFAB70;">forward</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-plus/theme-chalk/src/dark/var.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">with</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">$colors</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$--colors</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新建 index.scss </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-plus/theme-chalk/src/dark/css-vars.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;element-plus/theme-chalk/src/index.scss&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 新建 light.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@forward</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-plus/theme-chalk/src/common/var.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">with</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">$--colors</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;primary&#39;</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;base&#39;</span><span style="color:#24292E;">: #</span><span style="color:#6F42C1;">00599D</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    ),</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">$button-padding-vertical</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;large&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">13</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;default&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">9</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;small&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">6</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ),</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;dark.scss&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新建 dark.scss </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@</span><span style="color:#E36209;">forward</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-plus/theme-chalk/src/dark/var.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">with</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">$colors</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$--colors</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 新建 index.scss </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-plus/theme-chalk/src/dark/css-vars.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;element-plus/theme-chalk/src/index.scss&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 项目入口文件引入scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> FuzzyUI </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@hitotek/fuzzy-ui&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@hitotek/fuzzy-ui/style&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// UI 样式</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./index.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 引入scss文件！！！</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(FuzzyUI)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打包配置文件</span></span>
<span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;"> css: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    preprocessorOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      scss: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        additionalData: </span><span style="color:#9ECBFF;">&#39;@use &quot;@/styles/element.scss&quot; as *;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 项目入口文件引入scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> FuzzyUI </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@hitotek/fuzzy-ui&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@hitotek/fuzzy-ui/style&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// UI 样式</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./index.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 引入scss文件！！！</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(FuzzyUI)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打包配置文件</span></span>
<span class="line"><span style="color:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> css: {</span></span>
<span class="line"><span style="color:#24292E;">    preprocessorOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      scss: {</span></span>
<span class="line"><span style="color:#24292E;">        additionalData: </span><span style="color:#032F62;">&#39;@use &quot;@/styles/element.scss&quot; as *;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="通过-css-变量设置" tabindex="-1">通过 CSS 变量设置 <a class="header-anchor" href="#通过-css-变量设置" aria-label="Permalink to &quot;通过 CSS 变量设置&quot;">​</a></h3><p>就像这样</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--el-color-primary</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">green</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--el-color-primary</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">green</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,10),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const h=s(l,[["render",c]]);export{d as __pageData,h as default};
