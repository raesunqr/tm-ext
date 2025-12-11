// Claude Background + Font
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
    
    /* 字体 - 超强制版 */
    *, *::before, *::after {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif !important;
      letter-spacing: -0.01em !important;
    }
    
    /* 调整字重，让文字更轻盈 */
    body, p, div, span, li {
      font-weight: 400 !important;
    }
    
    /* 标题稍微重一点 */
    h1, h2, h3, h4, h5, h6, strong, b {
      font-weight: 500 !important;
    }
  `;
  
  document.head.appendChild(style);
  
  console.log('✨ Claude background + font applied');
})();
