export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
  statusNotice?: string;
}

export const faqList: FAQItem[] = [
  {
    question: '三毛 (SANMAO) 是什么？',
    answer: '三毛是一款面向中文用户的现代 VPN 与全球网络加速服务。通过安全加密隧道与智能网络选路，为您在各类设备上提供稳定、平滑且隐私保护的全球网络访问体验。',
  },
  {
    question: 'VPN 是什么？它是如何工作的？',
    answer: 'VPN (虚拟专用网络) 通过在您的本地设备与远端加速服务器之间建立一条加密隧道，将您的网络数据进行安全封装传输。这不仅能优化跨国访问延迟，还能有效保护您的网络数据不被中途窥探。',
  },
  {
    question: '连接三毛 VPN 会影响我的本土网速吗？',
    answer: '三毛采用了智能分流技术 (Smart Connection Routing)。访问本土网站或应用程序时，流量直连不经过加速隧道；只有访问跨国网络时才会自动走优化专线，从而在保证加速效果的同时不影响本土上网速度。',
  },
  {
    question: '三毛支持哪些设备与操作系统？',
    answer: '三毛提供全平台支持，包含 Windows、macOS、iOS (iPhone/iPad)、Android 手机和平板、Linux 终端，以及 Chrome/Firefox 浏览器扩展与主流路由器插件。',
  },
  {
    question: '一个三毛账号可以同时连接多少台设备？',
    answer: '根据您选择的订阅方案，单个三毛账号支持 5 至 10 台设备同时在线连接。满足个人多设备及家庭成员共享需求。',
  },
  {
    question: '三毛覆盖哪些全球网络节点与地区？',
    answer: '三毛网络覆盖新加坡、日本东京、中国香港、韩国首尔、澳大利亚悉尼、美国洛杉矶与旧金山、德国法兰克福、英国伦敦、荷兰阿姆斯特丹等 60+ 主流节点。系统会自动智能匹配最佳接入路径。',
  },
  {
    question: '订阅方案是否限制每月流量使用？',
    answer: '所有标准订阅方案均提供无流量限制 (Unlimited Traffic) 的高带宽加速隧道。您可以无忧观看高码率视频或下载大型工作文件。',
  },
  {
    question: '三毛是否支持跨国游戏低延迟加速？',
    answer: '支持。三毛针对主流游戏服务器部署了低延迟专线与丢包补偿机制，有效降低游戏中途卡顿、丢包及延迟波动问题。',
  },
  {
    question: '三毛是否支持 4K 流媒体高码率播放？',
    answer: '支持。我们针对流媒体传输优化了数据包缓存与专线带宽分配，确保 4K / 8K 高清视频流畅加载无缓冲。',
  },
  {
    question: '三毛是否记录用户的上网日志与浏览历史？',
    answer: '【Content Pending / 隐私声明审核中】三毛坚守严格的用户隐私保护原则。具体的无日志政策 (No-Logs Policy) 细则正在法务与安全部门审核中，上线后将公开全套审计报告。',
    statusNotice: 'Content Pending',
  },
  {
    question: '如果体验不满意，如何申请退款？',
    answer: '【Content Pending / 退款条款准备中】三毛为不同套餐提供 3 至 30 天无条件退款保障。具体的退款流程与通道在正式商业运营上线时同步开启。',
    statusNotice: 'Content Pending',
  },
  {
    question: '遇到网络连接问题时，如何联系技术客服？',
    answer: '您可以随时通过官网右下角的在线客服系统提问，或发送邮件至 support@sanmao.cfd 提交工单。技术团队提供 24/7 节点监控与支持。',
  },
];
