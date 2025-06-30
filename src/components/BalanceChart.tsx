
import { Progress } from "@/components/ui/progress";

export const BalanceChart = () => {
  const data = [
    { month: "Jan", amount: 15000 },
    { month: "Feb", amount: 16200 },
    { month: "Mar", amount: 14800 },
    { month: "Apr", amount: 17500 },
    { month: "May", amount: 18100 },
    { month: "Jun", amount: 18121 },
  ];

  const maxAmount = Math.max(...data.map(d => d.amount));

  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <span className="text-sm font-medium w-8">{item.month}</span>
          <div className="flex-1">
            <Progress 
              value={(item.amount / maxAmount) * 100} 
              className="h-2"
            />
          </div>
          <span className="text-sm text-gray-600 w-16 text-right">
            ${(item.amount / 1000).toFixed(1)}k
          </span>
        </div>
      ))}
    </div>
  );
};
