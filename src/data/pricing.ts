export interface PricingPlan {
  id: string;
  name: string;
  billingCycle: string;
  pricePerMonth: string; // e.g. "RM 18"
  totalPrice: string;    // e.g. "RM 118.8"
  discountBadge?: string;
  isPopular?: boolean;
  deviceLimit: string;
  trafficLimit: string;
  refundPolicy: string;
  supportLevel: string;
  features: string[];
  statusMessage: string;
}

export const pricingConfig = {
  currencySymbol: '¥',
  isConfirmed: true,
  unconfirmedNote: '所有方案均享无条件退款保障，支持全平台多设备同时在线',
  plans: [
    {
      id: 'monthly',
      name: '1个月套餐',
      billingCycle: '按月计费',
      pricePerMonth: '¥ 18',
      totalPrice: '¥ 18',
      deviceLimit: '支持 5 台设备同时在线',
      trafficLimit: '无流量限制',
      refundPolicy: '3 天无条件退款保障',
      supportLevel: '标准技术支持与工单解答',
      features: [
        '全平台客户端支持',
        '全球多地区节点智能选择',
        '高强度隧道保护',
        '线路自动推荐分流',
      ],
      statusMessage: '灵活按月订阅，适合短期与临时使用',
    },
    {
      id: 'halfyear',
      name: '6个月套餐',
      billingCycle: '每 6 个月计费一次',
      pricePerMonth: '¥ 13.9',
      totalPrice: '¥ 83.4',
      discountBadge: '省心推荐 (立省 23%)',
      deviceLimit: '支持 7 台设备同时在线',
      trafficLimit: '无流量限制',
      refundPolicy: '7 天无条件退款保障',
      supportLevel: '优先响应客服支持',
      features: [
        '全平台客户端支持',
        '全球多地区节点智能选择',
        '高强度隧道保护',
        '流媒体与常规连接分流',
        'Smart Connection 智能选路',
      ],
      statusMessage: '平衡灵活订阅与长效优惠体验',
    },
    {
      id: 'annual',
      name: '12个月套餐',
      billingCycle: '按年计费',
      pricePerMonth: '¥ 9.9',
      totalPrice: '¥ 118.8',
      discountBadge: '超值首选 (立省 45%)',
      isPopular: true,
      deviceLimit: '支持 10 台设备同时在线',
      trafficLimit: '无流量限制',
      refundPolicy: '30 天无条件退款保障',
      supportLevel: '专属优先技术客服支持',
      features: [
        '全平台客户端支持',
        '全球多地区节点智能选择',
        '高强度隧道保护',
        '常用游戏与流媒体选路优化',
        '全自动智能线路匹配与断网保护',
        '公共 Wi-Fi 保护机制',
      ],
      statusMessage: '最具性价比的长期稳定连接方案',
    },
  ] as PricingPlan[],
};
