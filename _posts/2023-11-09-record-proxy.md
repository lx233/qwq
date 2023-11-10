---
layout: post
title: 在终端里，开启代理的方法
tags: mathjax
math: true
date: 2023-11-09 15:32 +0800
---
【在终端里，开启代理的方法】使用clashx
        V. 终端代理配置（方法2）

        代理软件开放端口请自行查阅（参阅本文：查看代理软件端口部分），本例仍以端口7890为例；
 
        打开终端，输入以下代码即可完成代理配置。

        cat > ~/.bash_profile << EOF
        function proxy_on() {
            export http_proxy=http://127.0.0.1:7890
            export https_proxy=\$http_proxy
            echo -e "终端代理已开启。"
        }

        function proxy_off(){
            unset http_proxy https_proxy
            echo -e "终端代理已关闭。"
        }
        EOF

        source ~/.bash_profile
        复制

        同方法1：启用则使用命令：

        proxy_on
        复制

        取消则使用：

        proxy_off