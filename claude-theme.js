// Claude Theme - Final Version (Fixed Text Color)
(function() {
  'use strict';
  
  const style = document.createElement('style');
  style.id = 'claude-theme-extension';
  
  style.textContent = `
    /* ===== 背景色 ===== */
    
    body {
      background-color: #FAF9F5 !important;
    }
    
    main, [class*="chat"], [class*="main-content"] {
      background-color: #FAF9F5 !important;
    }
    
    aside, nav, [class*="sidebar"] {
      background-color: #FFFFFF !important;
      border-right: 1px solid #E5E5E0 !important;
    }
    
    [class*="messages"], [class*="conversation"] {
      background-color: #FAF9F5 !important;
    }
    
    /* ===== 消息气泡 ===== */
    
    /* 用户消息 - 浅灰色背景 + 深色文字 */
    [data-element-id="user-message"] {
      background-color: #F0EEE6 !important;
      border-radius: 12px !important;
      border: none !important;
      padding: 12px 16px !important;
      color: #2C2823 !important;
    }
    
    /* 用户消息内的所有文字都改成深色 */
    [data-element-id="user-message"] * {
      color: #141413 !important;
    }
    
    /* AI 消息 - 保持透明 */
    [data-element-id="assistant-message"] {
      background-color: transparent !important;
      border: none !important;
    }
    
    /* ===== 输入框 ===== */
    
    [data-element-id="message-input"] {
      background-color: #FFFFFF !important;
      border: 1px solid #F7F6F2 !important;
      border-radius: 12px !important;
      box-shadow: none !important;
    }
    
    textarea[id*="input"],
    textarea[data-element-id*="textbox"] {
      background-color: #FFFFFF !important;
      border: none !important;
    }
    
    [data-element-id="message-input"]:not(:focus-within) {
      border-color: #F7F6F2 !important;
    }
    
    [data-element-id="message-input"]:focus-within {
      border-color: #F4F3EF !important;
      box-shadow: none !important;
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
  
  console.log('✨ Claude theme - Text color fixed');
})();
