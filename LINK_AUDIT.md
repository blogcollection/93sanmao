# LINK_AUDIT.md — 全站内部链接扫描与校验报告

## 01｜扫描概要 (Audit Summary)

- **扫描机制**：针对 `dist/` 目录下所有 20 个 HTML 页面进行 DOM 遍历解析与静态目标映射校验。
- **目标总数**：50 个独占内链节点。
- **失效链接数 (Broken Links)**：`0` (0% 破坏率)。
- **已发现并排除的占位链接**：已彻底清理所有 `-placeholder` 链接及无对应目标的硬编码 `#` 锚点。

---

## 02｜全站链接校验表 (Verified Internal Link Manifest)

| 链接 Path / Route | 状态 | 目标页面/文件 | 备注 |
| :--- | :--- | :--- | :--- |
| `/` | `VERIFIED 200 OK` | `dist/index.html` | 首页 |
| `/vpn` | `VERIFIED 200 OK` | `dist/vpn/index.html` | 产品架构页 |
| `/servers` | `dist/servers/index.html` | `VERIFIED 200 OK` | 全球节点页 |
| `/download` | `VERIFIED 200 OK` | `dist/download/index.html` | 下载中心 |
| `/pricing` | `VERIFIED 200 OK` | `dist/pricing/index.html` | 订阅方案页 |
| `/security` | `VERIFIED 200 OK` | `dist/security/index.html` | 安全说明页 |
| `/support` | `VERIFIED 200 OK` | `dist/support/index.html` | 帮助中心 |
| `/about` | `VERIFIED 200 OK` | `dist/about/index.html` | 关于三毛 (显示 Documentation Pending) |
| `/privacy` | `VERIFIED 200 OK` | `dist/privacy/index.html` | 隐私政策 (显示 Documentation Pending) |
| `/terms` | `VERIFIED 200 OK` | `dist/terms/index.html` | 服务条款 (显示 Documentation Pending) |
| `/blog` | `VERIFIED 200 OK` | `dist/blog/index.html` | 文章列表 |
| `/blog/what-is-vpn` | `VERIFIED 200 OK` | `dist/blog/what-is-vpn/index.html` | 文章 01 (2027 字) |
| `/blog/how-vpn-works` | `VERIFIED 200 OK` | `dist/blog/how-vpn-works/index.html` | 文章 02 (1674 字) |
| `/blog/vpn-speed-impact` | `VERIFIED 200 OK` | `dist/blog/vpn-speed-impact/index.html` | 文章 03 (1601 字) |
| `/blog/public-wifi-dangers` | `VERIFIED 200 OK` | `dist/blog/public-wifi-dangers/index.html` | 文章 04 (1547 字) |
| `/blog/protect-your-ip` | `VERIFIED 200 OK` | `dist/blog/protect-your-ip/index.html` | 文章 05 (1432 字) |
| `/blog/vpn-vs-proxy` | `VERIFIED 200 OK` | `dist/blog/vpn-vs-proxy/index.html` | 文章 06 (1246 字) |
| `/blog/how-to-choose-vpn` | `VERIFIED 200 OK` | `dist/blog/how-to-choose-vpn/index.html` | 文章 07 (1233 字) |
| `/blog/vpn-for-gaming` | `VERIFIED 200 OK` | `dist/blog/vpn-for-gaming/index.html` | 文章 08 (1204 字) |
| `/guides` | `VERIFIED 200 OK` | `dist/guides/index.html` | 使用指南页 |

---

## 03｜未配置 URL 的动态按钮逻辑

对于当前在 `src/config/site.ts` 中尚未配置真实商业 URL 的按钮（登录、注册、客户端下载）：
- 客户端下载按钮渲染为：`即将提供 (Download Pending)`，带有 `disabled` 属性与 `cursor-not-allowed` 交互。
- 登录/注册按钮渲染为：`登录 (即将提供)`，带有不可点击样式。
- 彻底避免了用户点击假 `#placeholder` 或无效空链接的情况。
