// Claude Background - 正确版本
(function() {
  'use strict';
  
  const style = document.createElement('style');
  style.id = 'claude-theme-extension';
  
  style.textContent = `
    /* 最外层背景 - 米色 */
    body {
      background-color: #F5F5F0 !important;
    }
    
    /* 侧边栏 - 白色 */
    aside,
    nav,
    [class*="sidebar"] {
      background-color: #FFFFFF !important;
      border-right: 1px solid #E5E5E0 !important;
    }
    
    /* 主对话区域容器 - 米色 */
    main {
      background-color: #F5F5F0 !important;
    }
    
    /* 对话消息容器 - 白色 */
    [class*="messages"],
    [class*="conversation"],
    [class*="chat-container"] {
      background-color: #FFFFFF !important;
      border-radius: 12px !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
    }
    
    /* 每条消息 - 保持白色背景 */
    [class*="message"],
    [data-message-role] {
      background-color: transparent !important;
    }
    
    /* 输入框区域 - 白色 */
    [class*="input-container"],
    [class*="composer"] {
      background-color: #FFFFFF !important;
    }
    
    /* 字体 */
    *, *::before, *::after {
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
  
  console.log('✨ Claude background with white chat area');
})();
