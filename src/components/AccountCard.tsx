
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Eye, EyeOff, ArrowUpRight, MoreHorizontal } from "lucide-react";
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

  const getTypeGradient = (type: string) => {
    switch (type) {
      case "checking": return "from-blue-500 via-blue-600 to-indigo-600";
      case "savings": return "from-emerald-500 via-green-600 to-teal-600";
      case "credit": return "from-rose-500 via-red-600 to-pink-600";
      default: return "from-gray-500 via-gray-600 to-slate-600";
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
    <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
      {/* Gradient accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${getTypeGradient(account.type)} shadow-lg`} />
      
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getTypeGradient(account.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <CardHeader className="pb-4 relative">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${getTypeGradient(account.type)} rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {getTypeIcon(account.type)}
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                {account.name}
              </CardTitle>
              <p className="text-sm text-gray-500 font-mono bg-gray-100/80 px-2 py-1 rounded-lg mt-1">
                {account.accountNumber}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className={`text-xs font-semibold px-3 py-1 bg-gradient-to-r ${getTypeGradient(account.type)} text-white shadow-md`}
            >
              {account.type.toUpperCase()}
            </Badge>
            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <span className={`text-3xl font-bold transition-all duration-300 ${
              account.balance < 0 
                ? 'text-red-600' 
                : 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
            }`}>
              {showBalance ? formatBalance(account.balance) : "••••••"}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBalance(!showBalance)}
              className="hover:bg-gray-100 rounded-full w-8 h-8 p-0"
            >
              {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 hover:bg-gray-50 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            View Details
          </Button>
          <Button 
            size="sm" 
            className={`flex-1 bg-gradient-to-r ${getTypeGradient(account.type)} hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
          >
            <ArrowUpRight className="w-4 h-4 mr-1" />
            Transfer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
