// Claude Background - 精确版本
(function() {
  'use strict';
  
  const style = document.createElement('style');
  style.id = 'claude-theme-extension';
  
  style.textContent = `
    /* 最外层背景 - 米色 */
    body {
      background-color: #F5F5F0 !important;
    }
    
    /* 主内容区域背景 - 米色 */
    [data-element-id="main-content-area"],
    .main-content-area {
      background-color: #F5F5F0 !important;
    }
    
    /* 对话内容容器 - 白色卡片效果 */
    .dynamic-chat-content-container {
      background-color: #FFFFFF !important;
      border-radius: 16px !important;
      border: 1px solid #E5E5E0 !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
      margin: 20px !important;
    }
    
    /* 侧边栏 - 白色 */
    [data-element-id="nav-handler"],
    aside, nav {
      background-color: #FFFFFF !important;
      border-right: 1px solid #E5E5E0 !important;
    }
    
    /* 字体 */
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
  
  console.log('✨ Claude theme with accurate selectors');
})();
