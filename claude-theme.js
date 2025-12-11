// Claude-style UI Theme for TypingMind
(function() {
  'use strict';
  
  const style = document.createElement('style');
  style.id = 'claude-theme-extension';
  
  style.textContent = `
    /* ===== 全局字体 ===== */
    * {
      font-family: "optimistic_displayregular", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
      letter-spacing: -0.01em !important;
    }
    
    /* ===== Claude 配色变量 ===== */
    :root {
      --claude-orange: #CC7852;
      --claude-bg-main: #F5F5F0;
      --claude-bg-sidebar: #FFFFFF;
      --claude-text: #2C2823;
      --claude-text-light: #5C5955;
      --claude-border: #E5E5E0;
      --claude-message-bg: #FFFFFF;
    }
    
    /* ===== 整体背景 - 浅米色 ===== */
    body {
      background-color: var(--claude-bg-main) !important;
    }
    
    /* ===== 主聊天区域背景 ===== */
    [class*="main"],
    [class*="chat-area"],
    main {
      background-color: var(--claude-bg-main) !important;
    }
    
    /* ===== 侧边栏 - 纯白 ===== */
    aside,
    [class*="sidebar"],
    nav {
      background-color: var(--claude-bg-sidebar) !important;
      border-right: 1px solid var(--claude-border) !important;
    }
    
    /* ===== 所有文字颜色 ===== */
    body, p, span, div, li, label {
      color: var(--claude-text) !important;
    }
    
    /* ===== 聊天消息框 - 纯白，无背景色 ===== */
    [class*="message"],
    [data-message-role] {
      background-color: transparent !important;
      border: none !important;
      padding: 20px 0 !important;
    }
    
    /* AI 消息 */
    [class*="assistant"],
    [data-message-role="assistant"] {
      background-color: transparent !important;
    }
    
    /* 用户消息 */
    [class*="user"],
    [data-message-role="user"] {
      background-color: transparent !important;
    }
    
    /* ===== 输入框样式 ===== */
    textarea,
    input[type="text"] {
      background-color: white !important;
      border: 1px solid var(--claude-border) !important;
      border-radius: 12px !important;
      color: var(--claude-text) !important;
      font-size: 15px !important;
      padding: 14px 16px !important;
    }
    
    textarea:focus,
    input[type="text"]:focus {
      border-color: var(--claude-orange) !important;
      box-shadow: 0 0 0 3px rgba(204, 120, 82, 0.08) !important;
      outline: none !important;
    }
    
    /* ===== 按钮 - 只有主要按钮用橙色 ===== */
    button {
      border-radius: 8px !important;
      font-weight: 500 !important;
      transition: all 0.15s ease !important;
    }
    
    /* 发送按钮 - 橙色 */
    button[type="submit"],
    button[class*="send"],
    button[aria-label*="Send"] {
      background-color: var(--claude-orange) !important;
      color: white !important;
      border: none !important;
    }
    
    button[type="submit"]:hover,
    button[class*="send"]:hover {
      background-color: #B86B47 !important;
    }
    
    /* New Chat 按钮 - 保持橙色 */
    button[class*="new-chat"],
    [data-element-id*="new-chat"] {
      background-color: var(--claude-orange) !important;
      color: white !important;
    }
    
    /* 其他普通按钮 - 浅灰色 */
    button:not([type="submit"]):not([class*="send"]):not([class*="new-chat"]) {
      background-color: #F5F5F0 !important;
      color: var(--claude-text) !important;
      border: 1px solid var(--claude-border) !important;
    }
    
    button:not([type="submit"]):not([class*="send"]):not([class*="new-chat"]):hover {
      background-color: #EBEBEB !important;
    }
    
    /* ===== 代码块 ===== */
    pre {
      background-color: #F8F8F6 !important;
      border: 1px solid var(--claude-border) !important;
      border-radius: 8px !important;
    }
    
    code {
      background-color: #F8F8F6 !important;
      color: var(--claude-text) !important;
      padding: 2px 6px !important;
      border-radius: 4px !important;
    }
    
    /* ===== 链接 ===== */
    a {
      color: var(--claude-orange) !important;
      text-decoration: none !important;
    }
    
    a:hover {
      text-decoration: underline !important;
    }
    
    /* ===== 滚动条 ===== */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
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
    
    /* ===== 选中文本 ===== */
    ::selection {
      background-color: rgba(204, 120, 82, 0.15) !important;
    }
    
    /* ===== 分隔线 ===== */
    hr {
      border-color: var(--claude-border) !important;
    }
    
    /* ===== 卡片/面板 ===== */
    [class*="card"],
    [class*="panel"] {
      background-color: white !important;
      border: 1px solid var(--claude-border) !important;
      border-radius: 12px !important;
    }
  `;
  
  document.head.appendChild(style);
  
  console.log('✨ Claude theme loaded (accurate version)');
})();
