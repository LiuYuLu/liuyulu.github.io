"use strict";(self.webpackChunkistr_wiki_vuepress=self.webpackChunkistr_wiki_vuepress||[]).push([[681],{8049:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-071231ef",path:"/design-patterns/14%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F.html",title:"原型模式（Prototype Pattern）",lang:"zh-CN",frontmatter:{title:"原型模式（Prototype Pattern）"},excerpt:"",headers:[{level:3,title:"自我总结",slug:"自我总结",children:[]},{level:3,title:"使用场景",slug:"使用场景",children:[]},{level:3,title:"优缺点",slug:"优缺点",children:[]},{level:3,title:"变化点&稳定块描述",slug:"变化点-稳定块描述",children:[]},{level:3,title:"数据结构",slug:"数据结构",children:[]},{level:3,title:"代码示例",slug:"代码示例",children:[]}],filePathRelative:"design-patterns/14原型模式.md",git:{updatedTime:1618581176e3,contributors:[{name:"刘玉路",email:"lyl07583@ly.com",commits:1}]}}},7122:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h3 id="自我总结" tabindex="-1"><a class="header-anchor" href="#自我总结" aria-hidden="true">#</a> 自我总结</h3><p>原型模式是一种创建型设计模式，使你能够复制已有对象，而又无需使代码依赖它们所属的类。</p><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><ul><li>将一个类作为原型，然后复制出来另一个类。</li></ul><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3><p><strong>优点</strong></p><ul><li>减少了子类的构造。原型模式是Clone一个原型而不是请求工厂方法创建一个，所以它不需要一个与具体产品类平行的Creator类层次；</li></ul><p><strong>缺点</strong></p><ul><li>每个类必须配备一个克隆方法，而且这个Clone方法需要对类的功能进行通盘考虑。这对全新的类来说不是很难，但对已有的类进行改造时，不一定是容易的事。</li></ul><h3 id="变化点-稳定块描述" tabindex="-1"><a class="header-anchor" href="#变化点-稳定块描述" aria-hidden="true">#</a> 变化点&amp;稳定块描述</h3><p>原型针对的是复杂类的创建，变化或者不变，都是类内部的。</p><h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h3><p>类继承<code>ICloneable</code>接口并实现Clone方法</p><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><p>深浅复制：https://www.cnblogs.com/chenwolong/p/MemberwiseClone.html 浅复制：在C#中调用 MemberwiseClone() 方法即为浅复制。如果字段是值类型的，则对字段执行逐位复制，如果字段是引用类型的，则复制对象的引用，而不复制对象，因此：原始对象和其副本引用同一个对象！</p><p>深复制：如果字段是值类型的，则对字段执行逐位复制，如果字段是引用类型的，则把引用类型的对象指向一个全新的对象！</p><p>代码例子</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Color</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICloneable</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Red <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Green <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Blue <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">Person</span> Person <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> red<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> green<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> blue<span class="token punctuation">,</span> <span class="token class-name">Person</span> person<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Red <span class="token operator">=</span> red<span class="token punctuation">;</span>\n        Green <span class="token operator">=</span> green<span class="token punctuation">;</span>\n        Blue <span class="token operator">=</span> blue<span class="token punctuation">;</span>\n        Person <span class="token operator">=</span> person<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// 浅复制</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">MemberwiseClone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">Color</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 深复制1</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> color <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">MemberwiseClone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">Color</span><span class="token punctuation">;</span>\n        color<span class="token punctuation">.</span>Person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;bb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> color<span class="token punctuation">;</span>\n\n        <span class="token comment">// 深复制2</span>\n        <span class="token class-name">MemoryStream</span> memoryStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">BinaryFormatter</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BinaryFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        formatter<span class="token punctuation">.</span><span class="token function">Serialize</span><span class="token punctuation">(</span>memoryStream<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        memoryStream<span class="token punctuation">.</span>Position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>Color<span class="token punctuation">)</span> formatter<span class="token punctuation">.</span><span class="token function">Deserialize</span><span class="token punctuation">(</span>memoryStream<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n<span class="token doc-comment comment">/// 通用的深复制方法,继承该类和ICloneable</span>\n<span class="token doc-comment comment">/// 类需要定义[Serializable]</span>\n<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeparam</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>T<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeparam</span><span class="token punctuation">&gt;</span></span></span>\n<span class="token punctuation">[</span>Serializable<span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseClone<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICloneable</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name">MemoryStream</span> memoryStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">BinaryFormatter</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BinaryFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        formatter<span class="token punctuation">.</span><span class="token function">Serialize</span><span class="token punctuation">(</span>memoryStream<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        memoryStream<span class="token punctuation">.</span>Position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>T<span class="token punctuation">)</span> formatter<span class="token punctuation">.</span><span class="token function">Deserialize</span><span class="token punctuation">(</span>memoryStream<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>https://mp.weixin.qq.com/s/otF145cpGuNA655BRD5ceQ</p>',19),e={render:function(n,s){return p}}}}]);