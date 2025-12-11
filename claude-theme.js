// Claude Theme - 最终精确版
(function() {
  'use strict';
  
  const style = document.createElement('style');
  style.id = 'claude-theme-extension';
  
  style.textContent = `
    /* ===== 背景色设置 ===== */
    
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
    
    /* 对话内容容器 - 白色卡片 */
    .dynamic-chat-content-container {
      background-color: #FFFFFF !important;
      border-radius: 16px !important;
      border: 1px solid #E5E5E0 !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
    }
    
    /* 输入框区域 - 保持原样或稍微调整 */
    [data-element-id="message-input"] {
      background-color: transparent !important;
    }
    
    /* 侧边栏 - 白色 */
    [data-element-id="nav-handler"],
    aside, nav {
      background-color: #FFFFFF !important;
      border-right: 1px solid #E5E5E0 !important;
    }
    
    /* ===== 字体设置 ===== */
    
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
    
    /* ===== 其他优化 ===== */
    
    /* 滚动条 */
    ::-webkit-scrollbar {
      width: 6px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #D0D0CC;
      border-radius: 3px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #B8B8B4;
    }
  `;
  
  document.head.appendChild(style);
  
  console.log('✨ Claude theme loaded - final version');
})();
