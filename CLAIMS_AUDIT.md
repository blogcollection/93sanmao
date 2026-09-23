# CLAIMS_AUDIT.md — 产品能力声明与真实性审核清单

本报告对全站代码、组件及博客文章中所有涉及产品能力、技术参数及服务标准的描述进行了逐一核查。凡未经正式商业数据确认的，均已重构为中性技术解说或标明 Demo / Pending 状态。

---

## 01｜能力声明分类清单 (Product Claims Manifest)

| 描述/能力声明 | 所在文件位置 | 真实性状态 (Status) | 界面/代码处理方案 |
| :--- | :--- | :--- | :--- |
| **覆盖地区数 (如 60+)** | `src/data/site.ts`, `src/components/Metrics.astro` | `Demo / Example Data` | 界面明确标明 `Example Data / 示例节点` |
| **高规格服务器数量** | `src/data/site.ts`, `src/components/Metrics.astro` | `UI Demonstration` | 界面标明 `UI Demonstration / 网络调度架构` |
| **99.9% 服务可用性 SLA** | `src/data/site.ts`, `src/components/Performance.astro` | `Pending Product Verification` | 标明 `SLA 目标规划 / Demo Benchmark` |
| **24/7 技术支持** | `src/data/site.ts`, `src/pages/support.astro` | `Pending Product Verification` | 移除 2 小时回复承诺，改标 `Contact information pending` |
| **系统运行状态** | `src/pages/support.astro` | `Pending Product Verification` | 移除 Operational 虚假状态，显示 `Status integration pending` |
| **Singapore 节点 28ms 延迟** | `src/components/Hero.astro`, `src/data/servers.ts` | `Demo Visualization` | 显式标注 `UI Demonstration / 客户端界面演示` |
| **智能选路 (Smart Connect)** | `src/components/SmartConnection.astro` | `UI Demonstration` | 按钮标明 `UI Demonstration / 客户端 UI 演示` 且设为 disabled |
| **AES-256 加密/协议** | `src/data/features.ts`, `src/components/Security.astro` | `Pending Product Verification` | 标注 `Pending Product Verification 待第三方审计` |
| **Kill Switch 断网保护** | `src/data/features.ts`, `src/components/Security.astro` | `Pending Product Verification` | 标注 `Pending Product Verification 待第三方审计` |
| **DNS Leak 防护** | `src/data/features.ts`, `src/components/Security.astro` | `Pending Product Verification` | 标注 `Pending Product Verification 待第三方审计` |
| **No-Logs 无日志政策** | `src/data/faq.ts`, `src/pages/privacy.astro` | `Pending Product Verification` | 标明 `Content Pending / 法务与安全部门审核中` |
| **订阅套餐价格 (RM ---)** | `src/data/pricing.ts`, `src/components/Pricing.astro` | `Pricing to be confirmed` | 页面显示 `RM ---`，按钮显示 `Pricing to be confirmed` 且禁用 |
| **退款保障规则** | `src/data/pricing.ts`, `src/components/Pricing.astro` | `Pending Verification` | 标注 `Pending Verification / 上线前统一更新` |
| **流媒体 4K/8K 播放** | `src/components/UseCases.astro` | `UI Demonstration` | 标注 `UI Demonstration / 流媒体加速示意` |
| **游戏 0.1% 丢包率与低延迟** | `src/components/UseCases.astro` | `UI Demonstration` | 标注 `UI Demonstration / UDP 加速示意` |
| **博客中 VPN 技术的表述** | `src/content/blog/*.md` | `Neutral Educational` | 统一重构为“VPN 技术通常可以……”等通用技术科普 |

---

## 02｜审核结论

- **0 项** 未标记的虚假商业能力宣传；
- **0 项** 未经验证的自动化性能声明；
- **100%** 的 Demo 展示均带有清晰可见的说明标签。
