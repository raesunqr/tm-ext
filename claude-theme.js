// Claude Background + Font + White Input Box
(function() {
  'use strict';
  
  const style = document.createElement('style');
  style.id = 'claude-theme-extension';
  
  style.textContent = `
    /* 背景色 */
    body {
      background-color: #F5F5F0 !important;
    }
    
    main, [class*="chat"], [class*="main-content"] {
      background-color: #F5F5F0 !important;
    }
    
    aside, nav, [class*="sidebar"] {
      background-color: #FFFFFF !important;
      border-right: 1px solid #E5E5E0 !important;
    }
    
    [class*="messages"], [class*="conversation"] {
      background-color: #F5F5F0 !important;
    }
    
    /* ===== 新增：输入框样式 ===== */
    
    /* 输入框容器 - 白色背景 + 边框 */
    [data-element-id="message-input"] {
      background-color: #FFFFFF !important;
      border: 1px solid #E5E5E0 !important;
      border-radius: 12px !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
    }
    
    /* 输入框文本域 */
    textarea[id*="input"],
    textarea[data-element-id*="textbox"] {
      background-color: #FFFFFF !important;
    }
    
    /* 输入框 focus 时的效果 */
    [data-element-id="message-input"]:focus-within {
      border-color: #CC7852 !important;
      box-shadow: 0 0 0 3px rgba(204, 120, 82, 0.1) !important;
    }
    
    /* ===== 字体 ===== */
    
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
  
  console.log('✨ Claude background + font + white input box');
})();
