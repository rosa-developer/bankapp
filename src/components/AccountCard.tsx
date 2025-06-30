
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Eye, EyeOff, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Account {
  id: string;
  name: string;
  balance: number;
  type: string;
  accountNumber: string;
}

interface AccountCardProps {
  account: Account;
}

export const AccountCard = ({ account }: AccountCardProps) => {
  const [showBalance, setShowBalance] = useState(true);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "checking": return "from-blue-500 to-blue-600";
      case "savings": return "from-green-500 to-emerald-600";
      case "credit": return "from-red-500 to-rose-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "checking": return "💳";
      case "savings": return "🏦";
      case "credit": return "💰";
      default: return "💳";
    }
  };

  const formatBalance = (balance: number) => {
    const isNegative = balance < 0;
    const absBalance = Math.abs(balance);
    return `${isNegative ? '-' : ''}$${absBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  return (
    <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${getTypeColor(account.type)}`} />
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{getTypeIcon(account.type)}</div>
            <div>
              <CardTitle className="text-lg text-gray-800">{account.name}</CardTitle>
              <p className="text-sm text-gray-500 font-mono">{account.accountNumber}</p>
            </div>
          </div>
          <Badge variant="outline" className="text-xs font-medium">
            {account.type.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <span className={`text-3xl font-bold ${account.balance < 0 ? 'text-red-600' : 'text-gray-800'}`}>
              {showBalance ? formatBalance(account.balance) : "••••••"}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBalance(!showBalance)}
              className="hover:bg-gray-100"
            >
              {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1 hover:bg-gray-50">
            View Details
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className={`flex-1 bg-gradient-to-r ${getTypeColor(account.type)} hover:opacity-90`}
          >
            <ArrowUpRight className="w-4 h-4 mr-1" />
            Transfer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
