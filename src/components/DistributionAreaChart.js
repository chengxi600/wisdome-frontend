import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ReferenceLine, ReferenceDot, ResponsiveContainer } from 'recharts';

export default function DistributionAreaChart({
  data,
  aspect = 2,
  color = "#000000",
  totalScore = 0,
  xTicks,
  xLabel = '',
  xDomain = ['auto', 'auto'],
  yTicks,
  yLabel = '',
  yDomain = ['auto', 'auto']
}) {

  return (
    <ResponsiveContainer height="100%" width="100%" aspect={aspect}>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0.36%" stopColor={color} stopOpacity={0.3} />
            <stop offset="88.64%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="x"
          type="number"
          axisLine={false}
          tickLine={false}
          ticks={xTicks}
          domain={xDomain}
          label={xLabel}
        />
        <YAxis
          dataKey="y"
          type="number"
          axisLine={false}
          tickLine={false}
          ticks={yTicks}
          domain={yDomain}
          label={{ value: yLabel, dx: -20 }}
        />
        <CartesianGrid strokeDasharray="4 3 3" vertical={false} />
        <ReferenceDot
          x={totalScore}
          y={20}
          r={5}
          fill={color}
          stroke="transparent"
          strokeWidth={1}
          label={{ value: 'You', fill: color, dy: -15 }}
        />
        <ReferenceLine
          x={totalScore}
          stroke={color}
          strokeDasharray="3 3"
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="y"
          stroke={color}
          strokeWidth={2}
          fillOpacity={1} f
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}