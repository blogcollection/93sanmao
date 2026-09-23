import { SITE_URL, SUPPORT_EMAIL, LOGIN_URL, REGISTER_URL, DOWNLOAD_URLS } from '../config/site';

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  statusTag: 'Example Data' | 'UI Demonstration' | 'Pending Product Verification';
}

export const siteConfig = {
  brandName: '三毛',
  brandNameEn: 'SANMAO',
  tagline: '三毛 VPN。连接全球，更简单。',
  description: '三毛 VPN（SANMAO）提供简洁易用的全球网络连接服务。查看产品功能、网络节点、客户端下载、使用指南与套餐信息。',
  siteUrl: SITE_URL,
  supportEmail: SUPPORT_EMAIL,
  loginUrl: LOGIN_URL,
  registerUrl: REGISTER_URL,
  downloadUrls: DOWNLOAD_URLS,
  metrics: [
    {
      value: '示例节点',
      label: '覆盖地区演示',
      sublabel: '特定机房与节点接入示图',
      statusTag: 'Example Data',
    },
    {
      value: '智能选择',
      label: '线路匹配功能',
      sublabel: '自动推荐合适连接线路',
      statusTag: 'UI Demonstration',
    },
    {
      value: '连接保护',
      label: '服务可用性规划',
      sublabel: '网络连接保护机制',
      statusTag: 'Pending Product Verification',
    },
    {
      value: '问题解答',
      label: '客服响应状态',
      sublabel: '使用帮助与问题排查',
      statusTag: 'Pending Product Verification',
    },
  ] as MetricItem[],
};
