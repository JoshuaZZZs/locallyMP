[TOC]

# 本地生活(微信小程序)

## 前言

声明:该小程序所有数据和信息仅作为学习使用,不涉及任何商业行为，若需转载请标明出处

技术栈:微信开发者工具+MINA(微信原生框架)+WeUI(微信UI框架)+Promise

## 功能描述

- #### 首页

  - 首页轮播图:用户可以看到最近的一些活动或信息的照片，并且能够通过点击的方式进入相应详情页
  - 功能菜单：展示当前应用可用的全部细分功能模块，用户可点击模块进入对应商铺列表
  - 导航栏:用户通过此切换对应功能页面，由于只是作为第一个熟悉小程序的项目，所以只完成了首页的功能
  - 详情展示(当前测试机型为iphone7/8p，但采用了响应式布局且经过测试后其他机型依旧适配)：
    ![](/readmeImage/home.jpg)
  - 

- #### 列表页

  - 搜索框:根据用户输入的关键字筛选出对应的商铺信息

  - 商铺列表:用于展示相应的商铺信息，同时加入了下拉刷新和上拉加载更多的功能

  - 主界面:
  
  - ![](/readmeImage/list.jpg)

  - 搜索:
  
   - ![](/readmeImage/search.jpg)

    

  - 下拉刷新和上拉加载更多:
  
  - ![](/readmeImage/refresh.jpg)
  	
  	
  	

  - ![](/readmeImage/loading.jpg)

- #### 详情页

  - 轮播图：用于展示商铺的相关图片
  
  - 详情:标注了商铺的各类详细信息
  
	- 评论:用于展示商铺的评论信息
  
	- 主界面:
   	- ![](/readmeImage/detail.jpg)
	
	  
	
	- 评论:
	- ![](/readmeImage/comments.jpg)
	
	  
	
	- 查看评论图片:
	- ![](/readmeImage/comments_image.jpg)
	

## 项目结构

> 此处仅展示该项目用到的结构
>

assets:存放项目静态资源目录

min..._npm:存放WeUI的对应组件

pages:项目代码目录

pages->detail:商铺详情目录

pages->index:首页目录

pages->list:列表目录

utils:存放项目所需的工具

utils->fetch:封装的请求函数

![](/readmeImage/object.jpg)

