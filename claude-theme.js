// Claude-style UI Theme for TypingMind
(function() {
  'use strict';
  
  // 创建样式元素
  const style = document.createElement('style');
  style.id = 'claude-theme-extension';
  
  style.textContent = `
    /* ===== 全局字体 ===== */
    * {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif !important;
    }
    
    /* ===== 主色调：Claude的暖橙色 ===== */
    :root {
      --claude-orange: #CC7852;
      --claude-orange-light: #E89B7A;
      --claude-orange-dark: #B86B47;
      --claude-bg: #F5F5F0;
      --claude-sidebar: #FFFFFF;
      --claude-text: #2C2C2C;
      --claude-text-light: #666666;
    }
    
    /* ===== 整体背景 ===== */
    body {
      background-color: var(--claude-bg) !important;
    }
    
    /* ===== 侧边栏样式 ===== */
    [class*="sidebar"] {
      background-color: var(--claude-sidebar) !important;
      border-right: 1px solid #E5E5E0 !important;
    }
    
    /* ===== 按钮样式 - Claude的圆润风格 ===== */
    button, [role="button"] {
      border-radius: 8px !important;
      transition: all 0.2s ease !important;
    }
    
    /* 主要按钮（橙色） */
    button[data-element-id*="send"], 
    button[class*="primary"],
    [class*="button-primary"] {
      background-color: var(--claude-orange) !important;
      color: white !important;
      border: none !important;
    }
    
    button[data-element-id*="send"]:hover,
    button[class*="primary"]:hover {
      background-color: var(--claude-orange-light) !important;
    }
    
    /* New Chat 按钮 */
    [data-element-id="new-chat-button-in-side-bar"] {
      background-color: var(--claude-orange) !important;
      color: white !important;
      border-radius: 8px !important;
      font-weight: 500 !important;
    }
    
    [data-element-id="new-chat-button-in-side-bar"]:hover {
      background-color: var(--claude-orange-light) !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px rgba(204, 120, 82, 0.3) !important;
    }
    
    /* ===== 输入框样式 ===== */
    textarea, input[type="text"] {
      border-radius: 12px !important;
      border: 1px solid #E5E5E0 !important;
      background-color: white !important;
      color: var(--claude-text) !important;
      padding: 12px 16px !important;
    }
    
    textarea:focus, input[type="text"]:focus {
      border-color: var(--claude-orange) !important;
      box-shadow: 0 0 0 3px rgba(204, 120, 82, 0.1) !important;
      outline: none !important;
    }
    
    /* ===== 聊天消息样式 ===== */
    [class*="message"] {
      border-radius: 12px !important;
      padding: 16px !important;
      margin-bottom: 12px !important;
    }
    
    /* AI消息背景 */
    [class*="message"][class*="assistant"],
    [class*="ai-message"] {
      background-color: #FEFEFE !important;
      border: 1px solid #F0F0EA !important;
    }
    
    /* 用户消息背景 */
    [class*="message"][class*="user"],
    [class*="user-message"] {
      background-color: #FFF8F5 !important;
      border: 1px solid #FFE8DD !important;
    }
    
    /* ===== 加载动画 - Claude风格的旋转图标 ===== */
    [class*="loading"],
    [class*="spinner"] {
      color: var(--claude-orange) !important;
    }
    
    /* ===== 滚动条样式 ===== */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #D5D5D0;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: var(--claude-orange-light);
    }
    
    /* ===== 链接颜色 ===== */
    a {
      color: var(--claude-orange) !important;
      text-decoration: none !important;
    }
    
    a:hover {
      color: var(--claude-orange-dark) !important;
      text-decoration: underline !important;
    }
    
    /* ===== 选中文本颜色 ===== */
    ::selection {
      background-color: rgba(204, 120, 82, 0.2) !important;
      color: var(--claude-text) !important;
    }
    
    /* ===== 图标颜色 ===== */
    svg, [class*="icon"] {
      color: var(--claude-text-light) !important;
    }
    
    button:hover svg,
    [role="button"]:hover [class*="icon"] {
      color: var(--claude-orange) !important;
    }
    
    /* ===== 代码块样式 ===== */
    pre, code {
      background-color: #F8F8F6 !important;
      border-radius: 8px !important;
      border: 1px solid #E8E8E4 !important;
    }
    
    /* ===== 模型选择器样式 ===== */
    [class*="model-selector"],
    select {
      border-radius: 8px !important;
      border: 1px solid #E5E5E0 !important;
      background-color: white !important;
      color: var(--claude-text) !important;
    }
    
    /* ===== 头像/图标圆角 ===== */
    [class*="avatar"],
    img[class*="avatar"] {
      border-radius: 8px !important;
    }
  `;
  
  // 添加样式到页面
  document.head.appendChild(style);
  
  console.log('✨ Claude-style theme loaded successfully!');
})();
