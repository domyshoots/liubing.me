const e=JSON.parse('{"key":"v-253ac60c","path":"/article/baota/bt-deploy-waline.html","title":"宝塔面板独立部署 Waline 评论系统","lang":"zh-CN","frontmatter":{"date":"2023-01-14T00:00:00.000Z","category":["宝塔面板","Waline"],"tag":["宝塔面板","Waline"],"layout":"ArticleLayout","containerClass":"article-container","description":"宝塔面板独立部署 Waline 评论系统 由于近期将自己的博客由 WordPress 迁移到了 VuePress，刚开始使用的是Giscus评论系统，基于 Github 仓库的Discussions功能，鉴于 Github 在国内访问巨慢，从而改用另一个有名的评论系统Waline。官网快速上手教程中使用的是LeanCloud和Vercel进行部署，作为一名开发加上有自己的服务器还是比较喜欢自己去部署服务，好在官网也提供了独立部署的教程，通过文档及网络的教程记录下使用宝塔面板部署 Waline 服务。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/baota/bt-deploy-waline.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"宝塔面板独立部署 Waline 评论系统"}],["meta",{"property":"og:description","content":"宝塔面板独立部署 Waline 评论系统 由于近期将自己的博客由 WordPress 迁移到了 VuePress，刚开始使用的是Giscus评论系统，基于 Github 仓库的Discussions功能，鉴于 Github 在国内访问巨慢，从而改用另一个有名的评论系统Waline。官网快速上手教程中使用的是LeanCloud和Vercel进行部署，作为一名开发加上有自己的服务器还是比较喜欢自己去部署服务，好在官网也提供了独立部署的教程，通过文档及网络的教程记录下使用宝塔面板部署 Waline 服务。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-20T14:06:59.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"宝塔面板"}],["meta",{"property":"article:tag","content":"Waline"}],["meta",{"property":"article:published_time","content":"2023-01-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-20T14:06:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"宝塔面板独立部署 Waline 评论系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-20T14:06:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"宝塔面板添加站点","slug":"宝塔面板添加站点","link":"#宝塔面板添加站点","children":[]},{"level":2,"title":"初始化数据库","slug":"初始化数据库","link":"#初始化数据库","children":[]},{"level":2,"title":"添加域名解析","slug":"添加域名解析","link":"#添加域名解析","children":[]},{"level":2,"title":"部署 Waline","slug":"部署-waline","link":"#部署-waline","children":[{"level":3,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[]},{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":3,"title":"添加环境变量","slug":"添加环境变量","link":"#添加环境变量","children":[]},{"level":3,"title":"添加启动文件","slug":"添加启动文件","link":"#添加启动文件","children":[]},{"level":3,"title":"初始化仓库","slug":"初始化仓库","link":"#初始化仓库","children":[]},{"level":3,"title":"运行项目","slug":"运行项目","link":"#运行项目","children":[{"level":4,"title":"拉取代码及安装依赖","slug":"拉取代码及安装依赖","link":"#拉取代码及安装依赖","children":[]},{"level":4,"title":"PM2 运行项目","slug":"pm2-运行项目","link":"#pm2-运行项目","children":[]},{"level":4,"title":"反向代理配置","slug":"反向代理配置","link":"#反向代理配置","children":[]}]},{"level":3,"title":"验证","slug":"验证","link":"#验证","children":[]}]}],"git":{"createdTime":1673695032000,"updatedTime":1687270019000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":7}]},"readingTime":{"minutes":6.41,"words":1923},"filePathRelative":"article/baota/bt-deploy-waline.md","localizedDate":"2023年1月14日","excerpt":"<h1> 宝塔面板独立部署 Waline 评论系统</h1>\\n<p>由于近期将自己的博客由 <code>WordPress</code> 迁移到了 <code>VuePress</code>，刚开始使用的是<a href=\\"https://giscus.app/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Giscus</a>评论系统，基于 Github 仓库的<code>Discussions</code>功能，鉴于 Github 在国内访问巨慢，从而改用另一个有名的评论系统<a href=\\"https://waline.js.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Waline</a>。官网快速上手教程中使用的是<code>LeanCloud</code>和<code>Vercel</code>进行部署，作为一名开发加上有自己的服务器还是比较喜欢自己去部署服务，好在官网也提供了<a href=\\"https://waline.js.org/guide/deploy/vps.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">独立部署</a>的教程，通过文档及网络的教程记录下使用宝塔面板部署 Waline 服务。</p>\\n","autoDesc":true}');export{e as data};
