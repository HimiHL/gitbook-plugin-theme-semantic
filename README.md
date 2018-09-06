# SemanticUI 风格的Gitbook模板

#### 配置

> logo 代指Logo地址
> menus 指导航栏的菜单，建议不超过5个
> footer 页脚的信息，最多三个数组，每个数组最多4列数据

```
{
    "title": "文档中心",
    "description": "API文档",
    "language": "zh-hans",
    "gitbook": "3.2.3",
    "plugins": [
        "theme-semantic",
        "prism",
        "prism-themes",
        "-highlight",
        "-sharing",
        "-fontsettings"
    ],
    "pluginsConfig": {
        "prism": {
            "css": [
                "prism-themes/themes/prism-darcula.css"
            ]
        },
        "themeSemantic": {
            "logo": "/images/logo.png",
            "menus": [
                {
                    "name": "关于我们",
                    "url": "http://www.88hao.cn",
                    "target": "_blank"
                }
            ],
            "footer": [
                {
                    "name": "版权说明",
                    "value": "你好"
                },
                {
                    "name": "关于我们",
                    "list": [
                        {
                            "name": "关于我们",
                            "url": "http://www.88hao.cn",
                            "target": "_blank"
                        },
                        {
                            "name": "关于我们",
                            "url": "http://www.88hao.cn",
                            "target": "_blank"
                        },
                        {
                            "name": "关于我们",
                            "url": "http://www.88hao.cn",
                            "target": "_blank"
                        },
                        {
                            "name": "关于我们",
                            "url": "http://www.88hao.cn",
                            "target": "_blank"
                        }
                    ]
                },
                {
                    "name": "友情链接",
                    "list": [
                        {
                            "name": "关于我们",
                            "url": "http://www.88hao.cn",
                            "target": "_blank"
                        },
                        {
                            "name": "关于我们",
                            "url": "http://www.88hao.cn",
                            "target": "_blank"
                        },
                        {
                            "name": "关于我们",
                            "url": "http://www.88hao.cn",
                            "target": "_blank"
                        },
                        {
                            "name": "关于我们",
                            "url": "http://www.88hao.cn",
                            "target": "_blank"
                        }
                    ]
                }
            ]
        }
    }
}
```
