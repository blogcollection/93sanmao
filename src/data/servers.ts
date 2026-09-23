export interface ServerNode {
  id: string;
  city: string;
  country: string;
  flag: string; // SVG or country code
  latencyDemo: number; // in ms
  loadDemo: number; // percentage
  coordinates: { x: number; y: number }; // Percentage on SVG Map (0-100)
  status: 'optimal' | 'normal' | 'busy';
  isDemo: boolean;
}

export const serverNodesConfig = {
  isDemoData: true,
  disclaimerText: 'Network visualization for demonstration. Demo latency values shown.',
  nodes: [
    {
      id: 'sg',
      city: 'Singapore',
      country: '新加坡',
      flag: 'SG',
      latencyDemo: 28,
      loadDemo: 32,
      coordinates: { x: 74, y: 62 },
      status: 'optimal',
      isDemo: true,
    },
    {
      id: 'hk',
      city: 'Hong Kong',
      country: '中国香港',
      flag: 'HK',
      latencyDemo: 18,
      loadDemo: 45,
      coordinates: { x: 78, y: 52 },
      status: 'optimal',
      isDemo: true,
    },
    {
      id: 'tyo',
      city: 'Tokyo',
      country: '日本',
      flag: 'JP',
      latencyDemo: 35,
      loadDemo: 29,
      coordinates: { x: 86, y: 44 },
      status: 'optimal',
      isDemo: true,
    },
    {
      id: 'sel',
      city: 'Seoul',
      country: '韩国',
      flag: 'KR',
      latencyDemo: 42,
      loadDemo: 38,
      coordinates: { x: 82, y: 42 },
      status: 'optimal',
      isDemo: true,
    },
    {
      id: 'lax',
      city: 'Los Angeles',
      country: '美国',
      flag: 'US',
      latencyDemo: 135,
      loadDemo: 54,
      coordinates: { x: 22, y: 42 },
      status: 'normal',
      isDemo: true,
    },
    {
      id: 'sfo',
      city: 'San Francisco',
      country: '美国',
      flag: 'US',
      latencyDemo: 140,
      loadDemo: 40,
      coordinates: { x: 20, y: 40 },
      status: 'normal',
      isDemo: true,
    },
    {
      id: 'syd',
      city: 'Sydney',
      country: '澳大利亚',
      flag: 'AU',
      latencyDemo: 110,
      loadDemo: 26,
      coordinates: { x: 88, y: 82 },
      status: 'optimal',
      isDemo: true,
    },
    {
      id: 'fra',
      city: 'Frankfurt',
      country: '德国',
      flag: 'DE',
      latencyDemo: 178,
      loadDemo: 48,
      coordinates: { x: 52, y: 34 },
      status: 'normal',
      isDemo: true,
    },
    {
      id: 'lon',
      city: 'London',
      country: '英国',
      flag: 'GB',
      latencyDemo: 185,
      loadDemo: 50,
      coordinates: { x: 48, y: 32 },
      status: 'normal',
      isDemo: true,
    },
    {
      id: 'ams',
      city: 'Amsterdam',
      country: '荷兰',
      flag: 'NL',
      latencyDemo: 182,
      loadDemo: 39,
      coordinates: { x: 50, y: 33 },
      status: 'optimal',
      isDemo: true,
    },
  ] as ServerNode[],
};
