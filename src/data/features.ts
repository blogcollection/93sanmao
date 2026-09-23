export interface SecurityFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  statusTag?: string;
  isVerified: boolean;
}

export const securityFeatures: SecurityFeature[] = [
  {
    id: 'encrypted',
    title: 'Encrypted',
    subtitle: '网络隧道加密传输',
    description: '采用高规格数据传输协议，在您的设备与服务器之间建立加密通道，防止传输中途的数据窥探与篡改。',
    statusTag: 'Pending Product Verification',
    isVerified: false,
  },
  {
    id: 'private',
    title: 'Private',
    subtitle: '减少真实 IP 暴露',
    description: '通过经过优化的转发节点，遮蔽真实网络位置，有效隔绝网络广告追踪与跨站点数据收集。',
    statusTag: 'Pending Product Verification',
    isVerified: false,
  },
  {
    id: 'protected',
    title: 'Protected',
    subtitle: '公共 Wi-Fi 保护',
    description: '在机场、咖啡厅或酒店等未受信任的公共网络环境中自动生效，保障敏感信息传输的绝对隔离。',
    statusTag: 'Pending Product Verification',
    isVerified: false,
  },
];

export interface DetailedSecurityItem {
  name: string;
  enName: string;
  description: string;
  verificationStatus: string;
}

export const detailedSecurityItems: DetailedSecurityItem[] = [
  {
    name: '加密隧道协议',
    enName: 'Encrypted Tunnel',
    description: '通过底层轻量隧道架构提供低延迟数据封装。',
    verificationStatus: 'Pending Product Verification',
  },
  {
    name: '断网保护回路',
    enName: 'Kill Switch',
    description: '若连接偶然中断，立即切断非加密流量以防暴露。',
    verificationStatus: 'Pending Product Verification',
  },
  {
    name: 'DNS 泄漏防护',
    enName: 'DNS Leak Protection',
    description: '所有域名解析请求由内部私有 DNS 托管处理。',
    verificationStatus: 'Pending Product Verification',
  },
  {
    name: '公共网络防御',
    enName: 'Public Wi-Fi Protection',
    description: '加入未知开放 Wi-Fi 时自动发起加密连接。',
    verificationStatus: 'Pending Product Verification',
  },
  {
    name: '追踪器拦截',
    enName: 'Tracker Blocking',
    description: '在网关侧主动阻断常见恶意域名与广告追踪链。',
    verificationStatus: 'Pending Product Verification',
  },
  {
    name: 'IP 遮蔽隐秘',
    enName: 'IP Protection',
    description: '对外隐藏源真实 IP 地址，保护访问行为私密。',
    verificationStatus: 'Pending Product Verification',
  },
];
