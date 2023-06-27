const e=JSON.parse('{"key":"v-45058396","path":"/article/vue/vue-gaode-map-questions.html","title":"vue+高德地图开发采坑持续记录[2019-06-25]","lang":"zh-CN","frontmatter":{"date":"2019-05-17T00:00:00.000Z","category":["Vue","Web"],"tag":["Vue","地图","高德地图"],"layout":"ArticleLayout","containerClass":"article-container","description":"vue+高德地图开发采坑持续记录[2019-06-25] 整理了下日常地图开发过程中遇到的问题及解决方法，供大家参考，文章将会持续更新。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/vue/vue-gaode-map-questions.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"vue+高德地图开发采坑持续记录[2019-06-25]"}],["meta",{"property":"og:description","content":"vue+高德地图开发采坑持续记录[2019-06-25] 整理了下日常地图开发过程中遇到的问题及解决方法，供大家参考，文章将会持续更新。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-20T14:06:59.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"地图"}],["meta",{"property":"article:tag","content":"高德地图"}],["meta",{"property":"article:published_time","content":"2019-05-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-20T14:06:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue+高德地图开发采坑持续记录[2019-06-25]\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-05-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-20T14:06:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"1、地图引入问题","slug":"_1、地图引入问题","link":"#_1、地图引入问题","children":[{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"完整代码","slug":"完整代码","link":"#完整代码","children":[]},{"level":3,"title":"预览","slug":"预览","link":"#预览","children":[]}]},{"level":2,"title":"2、获取多边形编辑的点的问题","slug":"_2、获取多边形编辑的点的问题","link":"#_2、获取多边形编辑的点的问题","children":[{"level":3,"title":"核心代码","slug":"核心代码","link":"#核心代码","children":[]},{"level":3,"title":"完整代码","slug":"完整代码-1","link":"#完整代码-1","children":[]},{"level":3,"title":"效果图","slug":"效果图","link":"#效果图","children":[]}]},{"level":2,"title":"3、信息窗口使用问题","slug":"_3、信息窗口使用问题","link":"#_3、信息窗口使用问题","children":[{"level":3,"title":"简单的信息窗口组件","slug":"简单的信息窗口组件","link":"#简单的信息窗口组件","children":[]},{"level":3,"title":"组件代码","slug":"组件代码","link":"#组件代码","children":[]},{"level":3,"title":"窗口位置","slug":"窗口位置","link":"#窗口位置","children":[{"level":4,"title":"相关代码","slug":"相关代码","link":"#相关代码","children":[]},{"level":4,"title":"预览","slug":"预览-1","link":"#预览-1","children":[]}]},{"level":3,"title":"代码完善","slug":"代码完善","link":"#代码完善","children":[{"level":4,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":4,"title":"信息窗口组件","slug":"信息窗口组件","link":"#信息窗口组件","children":[]}]},{"level":3,"title":"最终预览","slug":"最终预览","link":"#最终预览","children":[]}]},{"level":2,"title":"4、多边形绘制边缘自动吸附","slug":"_4、多边形绘制边缘自动吸附","link":"#_4、多边形绘制边缘自动吸附","children":[{"level":3,"title":"自定义多边形绘制","slug":"自定义多边形绘制","link":"#自定义多边形绘制","children":[{"level":4,"title":"定义数据","slug":"定义数据","link":"#定义数据","children":[]},{"level":4,"title":"点击地图生成圆点","slug":"点击地图生成圆点","link":"#点击地图生成圆点","children":[]},{"level":4,"title":"生成绘制过程中的鼠标移动位置的折线","slug":"生成绘制过程中的鼠标移动位置的折线","link":"#生成绘制过程中的鼠标移动位置的折线","children":[]},{"level":4,"title":"连接圆点形成实时多边形","slug":"连接圆点形成实时多边形","link":"#连接圆点形成实时多边形","children":[]},{"level":4,"title":"双击绘制完成","slug":"双击绘制完成","link":"#双击绘制完成","children":[]}]},{"level":3,"title":"现有问题","slug":"现有问题","link":"#现有问题","children":[]},{"level":3,"title":"线边缘自动吸附","slug":"线边缘自动吸附","link":"#线边缘自动吸附","children":[]},{"level":3,"title":"最终效果图","slug":"最终效果图","link":"#最终效果图","children":[]},{"level":3,"title":"在线预览","slug":"在线预览","link":"#在线预览","children":[]}]}],"git":{"createdTime":1671435588000,"updatedTime":1687270019000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":6}]},"readingTime":{"minutes":16.83,"words":5049},"filePathRelative":"article/vue/vue-gaode-map-questions.md","localizedDate":"2019年5月17日","excerpt":"<h1> vue+高德地图开发采坑持续记录[2019-06-25]</h1>\\n<p>整理了下日常地图开发过程中遇到的问题及解决方法，供大家参考，文章将会持续更新。</p>\\n","autoDesc":true}');export{e as data};
