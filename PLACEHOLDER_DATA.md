# PLACEHOLDER_DATA.md — 待补充真实商业资料清单

根据 Production Readiness 规范，所有未经提供的商业信息已全面抽象至配置中心 `src/config/site.ts` 及数据存储层 `src/data/*.ts`，且前端页面均已标注明确的 `Demo / Pending` 状态。正式商业上线前，请提供并填入以下真实数据：

---

## 01｜域名与服务配置 (`src/config/site.ts`)

| 配置变量名 | 默认值 | 需要填入的真实上线数据 |
| :--- | :--- | :--- |
| `SITE_URL` | `""` | 正式绑定的独立域名 URL (如 `https://sanmao.com`) |
| `SUPPORT_EMAIL` | `""` | 官方技术客服邮箱 (如 `support@sanmao.com`) |
| `LOGIN_URL` | `""` | 用户登录 / 控制面板入口 URL |
| `REGISTER_URL` | `""` | 用户注册 / 订阅入口 URL |
| `DOWNLOAD_URLS.windows` | `""` | Windows 安装包下载 URL |
| `DOWNLOAD_URLS.mac` | `""` | macOS 安装包下载 URL |
| `DOWNLOAD_URLS.ios` | `""` | iOS App Store 下载链接 |
| `DOWNLOAD_URLS.android` | `""` | Android 应用商店/APK 下载链接 |
| `DOWNLOAD_URLS.linux` | `""` | Linux 安装包或终端脚本链接 |

---

## 02｜商业价格与套餐定义 (`src/data/pricing.ts`)

| 数据项 | 当前页面显示状态 | 真实上线需填入的数据 |
| :--- | :--- | :--- |
| **月付套餐价格** | `RM ---` (Pricing to be confirmed) | 1个月套餐的真实标价与结算货币 |
| **6个月套餐价格** | `RM ---` (Pricing to be confirmed) | 6个月套餐的总价与月均价格 |
| **12个月套餐价格** | `RM ---` (Pricing to be confirmed) | 12个月套餐的总价与优惠折扣 |
| **设备限制数** | `Pending Verification` | 单个账号允许同时在线连接的实际台数 |
| **退款保障规则** | `Pending Verification` | 商业法务确定的实际无条件退款保障天数 |

---

## 03｜服务器节点与监控接口 (`src/data/servers.ts`)

| 数据项 | 当前页面显示状态 | 真实上线需填入的数据 |
| :--- | :--- | :--- |
| **覆盖机房与城市** | Demo 节点列表 (新加坡、东京、香港等) | 实际部署上线的真实服务器机房列表 |
| **实时网络延迟** | Demo Ping 值 (28ms) | 后台实测延迟 API 或测速点数据 |
| **系统运行状态** | `Status integration pending` | 接入真实 Server Status 监控接口 |

---

## 04｜法务与合规文件

| 数据项 | 当前页面显示状态 | 真实上线需填入的数据 |
| :--- | :--- | :--- |
| **关于我们 (`/about`)** | `Documentation Pending` | 品牌介绍与团队主体信息 |
| **隐私政策 (`/privacy`)** | `Documentation Pending` | 法务部门审核通过的隐私保护文件 |
| **服务条款 (`/terms`)** | `Documentation Pending` | 法律合规服务条款文本 |
| **无日志政策 (`/privacy#nologs`)** | `Pending Verification` | 独立第三方机构出具的无日志审计报告 |
