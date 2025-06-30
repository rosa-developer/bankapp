
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Eye, EyeOff } from "lucide-react";
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
      case "checking": return "bg-blue-600";
      case "savings": return "bg-green-600";
      case "credit": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  const formatBalance = (balance: number) => {
    const isNegative = balance < 0;
    const absBalance = Math.abs(balance);
    return `${isNegative ? '-' : ''}$${absBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  return (
    <Card className="relative overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-1 ${getTypeColor(account.type)}`} />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{account.name}</CardTitle>
            <p className="text-sm text-gray-600">{account.accountNumber}</p>
          </div>
          <CreditCard className="w-6 h-6 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              {showBalance ? formatBalance(account.balance) : "••••••"}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBalance(!showBalance)}
            >
              {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Transfer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
