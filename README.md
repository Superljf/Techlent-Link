# Techlent-Link
Google Add-on: contains common addresses within the company

# npm install -g create-react-app

# npx create-react-app react-extension-demo

当开发基于 React 的谷歌浏览器扩展时，需要设置好 React 的开发环境，并集成谷歌扩展所需的文件和配置。以下是一个简单的示例，展示如何使用 React 和基本的谷歌扩展结构来创建一个 demo：

### 步骤一：创建 React 应用

1. **使用 `create-react-app` 创建新的 React 应用**

   如果你还没有安装 `create-react-app`，可以使用以下命令全局安装：

   ```bash
   npm install -g create-react-app
   ```

   然后创建一个新的 React 应用：

   ```bash
   npx create-react-app react-extension-demo
   ```

   这将创建一个名为 `react-extension-demo` 的新目录，并生成一个基本的 React 应用结构。

2. **安装 Ant Design**

   在 React 应用的根目录中安装 Ant Design 和其依赖：

   ```bash
   cd react-extension-demo
   npm install antd @ant-design/icons
   ```

### 步骤二：配置谷歌扩展结构

1. **创建谷歌扩展文件**

   在 React 应用的根目录下创建谷歌扩展所需的文件和目录结构：

   - `public` 文件夹中创建 `popup.html`：

     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="UTF-8">
       <title>React Extension Popup</title>
     </head>
     <body>
       <div id="root"></div>
       <script src="popup.js"></script>
     </body>
     </html>
     ```

   - `src` 文件夹中创建 `popup.js` 作为入口文件：

     ```javascript
     // popup.js
     import React from 'react';
     import ReactDOM from 'react-dom';
     import Popup from './Popup';

     ReactDOM.render(
       <React.StrictMode>
         <Popup />
       </React.StrictMode>,
       document.getElementById('root')
     );
     ```

   - 创建一个简单的 `Popup` 组件 `src/Popup.js`：

     ```jsx
     // Popup.js
     import React from 'react';
     import { Button } from 'antd';
     import 'antd/dist/antd.css';

     function Popup() {
       return (
         <div style={{ padding: '20px' }}>
           <h1>React Extension Popup</h1>
           <Button type="primary">Primary Button</Button>
         </div>
       );
     }

     export default Popup;
     ```

   - 在 `public` 文件夹中添加 `manifest.json`：

     ```json
     {
       "manifest_version": 2,
       "name": "React Extension Demo",
       "version": "1.0",
       "description": "A demo of Chrome extension using React and Ant Design",
       "browser_action": {
         "default_popup": "popup.html",
         "default_icon": "icon.png"
       },
       "permissions": [
         "activeTab"
       ]
     }
     ```

### 步骤三：打包和加载扩展

1. **打包 React 应用**

   在 React 应用的根目录中运行：

   ```bash
   npm run build
   ```

   这将在 `build` 文件夹中生成打包后的静态文件。

2. **加载扩展到谷歌浏览器**

   - 打开 Chrome 浏览器，在地址栏输入 `chrome://extensions/` 打开扩展管理页面。
   - 确保开启了开发者模式（Developer mode）。
   - 点击 "加载已解压的扩展"（Load unpacked），选择你的 React 应用根目录中的 `build` 文件夹。
   - 扩展图标会出现在 Chrome 浏览器的工具栏中，点击图标打开弹出窗口即可看到 React 应用的内容。


