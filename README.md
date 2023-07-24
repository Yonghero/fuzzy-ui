<div style="width: 100%;text-align: center;margin-top: 20px">
    <img alt="fuzzy-ui"
         width="30"
         src="./docs/public/logo.png"/>
</div>
<div>
    <div style="width: 100%;text-align: center;font-weight: 200;font-size: 1rem;display: flex;justify-content: center;align-items: center;">
        <div>Fuzzy-UI</div>
        <span style="background: #3a4a5a;color: white;font-size: .8rem;padding: 0 .4rem;border-radius: 1px;margin-left: 12px">beat</span>
    </div>
     <div style="width: 100%;text-align: center;font-size: .7rem;margin-top: .2rem;color: gray">@1.0.0</div>
</div>

### 介绍
#### 前端团队的起步工程
基于``` element-plus ``` 的定制化组件库

### 快速开始

本项目使用pnpm + monorepo的形式搭建
 
> 项目结构介绍
 
```bash
├─ packages
    ## 该目录为组件开发的src目录, 后续扩展组件请参照button文件夹开发
    ├─ components 
      ├─ button    
      ├─ input
      ├─ ...
      ├─ index.js

## 组件描述文档, 采用vitepress搭建的静态服务
├─ docs
    ├─ components ## 组件描述的markdown
      ├─ button.md
    ├─ examples
      ├─ button/basic.vue ## 组件示例用法的vue文件
      
## 测试packages/components里组件的服务
├─ playground 
    ├─ components/button-test.vue 
    ├─ App.vue 
```

#### 项目安装
```
pnpm install
```

#### 启动 playground （测试组件服务）
```
cd ./playgournd && pnpm run dev
```

#### 启动 docs （组件描述文档服务）
```
cd ./docs && pnpm run dev
```

#### 进入组件开发文件夹
``` sh
## 例如 pnpm gen button
## 会自动创建 packages/components/button 文件夹 包含符合组件库规范的文件内容
## 并会自动导出组件内容至packages/components/index.js文件

让你专心开发组件的内容

pnpm gen component-name

cd ./packages/components

start youer coding......
```
<div style="width: 100%;text-align: center;margin-top:1rem;margin-bottom:1rem">
    <span style="user-select: none;background: #3a5aff;font-weight: 200;padding: .3rem 1.8rem;cursor: pointer;color: white">你可以开始了</span>
</div>
