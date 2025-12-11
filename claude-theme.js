// Claude Theme - 按你的要求
(function() {
  'use strict';
  
  const style = document.createElement('style');
  style.id = 'claude-theme-extension';
  
  style.textContent = `
    /* ===== 背景色 ===== */
    
    /* 整体背景 - 米色 */
    body {
      background-color: #F5F5F0 !important;
    }
    
    /* 主内容区 - 米色 */
    [data-element-id="main-content-area"] {
      background-color: #F5F5F0 !important;
    }
    
    /* 聊天空间 - 米色 */
    [data-element-id="chat-space"] {
      background-color: #F5F5F0 !important;
    }
    
    /* 对话内容区域 - 米色背景，无边框 */
    .dynamic-chat-content-container {
      background-color: #F5F5F0 !important;
      border: none !important;
      box-shadow: none !important;
    }
    
    /* 输入框容器 - 白色 + 边框 */
    [data-element-id="message-input"],
    [data-element-id="chat-input-textbox-container"] {
      background-color: #FFFFFF !important;
      border: 1px solid #E5E5E0 !important;
      border-radius: 12px !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
    }
    
    /* 输入框本身 - 白色背景 */
    textarea#chat-input-textbox,
    [data-element-id="chat-input-textbox"] {
      background-color: #FFFFFF !important;
      border: none !important;
    }
    
    /* 输入框 focus 状态 */
    textarea#chat-input-textbox:focus,
    [data-element-id="chat-input-textbox"]:focus {
      outline: none !important;
      box-shadow: 0 0 0 2px rgba(204, 120, 82, 0.1) !important;
    }
    
    /* 侧边栏 - 白色 */
    [data-element-id="nav-handler"],
    aside, nav {
      background-color: #FFFFFF !important;
      border-right: 1px solid #E5E5E0 !important;
    }
    
    /* ===== 字体 ===== */
    
    * {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif !important;
      letter-spacing: -0.01em !important;
    }
    
    body, p, div, span, li {
      font-weight: 400 !important;
    }
    
    h1, h2, h3, h4, h5, h6, strong, b {
      font-weight: 500 !important;
    }
  `;
  
  document.head.appendChild(style);
  
  console.log('✨ Claude theme - beige chat + white input box');
})();
