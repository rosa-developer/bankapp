
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AccountCard } from "@/components/AccountCard";
import { TransactionHistory } from "@/components/TransactionHistory";
import { TransferModal } from "@/components/TransferModal";
import { QuickActions } from "@/components/QuickActions";
import { BalanceChart } from "@/components/BalanceChart";
import { CreditCard, TrendingUp, Shield, Bell, Sparkles } from "lucide-react";

const Index = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  
  const accounts = [
    { id: "1", name: "Checking Account", balance: 2450.75, type: "checking", accountNumber: "****1234" },
    { id: "2", name: "Savings Account", balance: 15670.30, type: "savings", accountNumber: "****5678" },
    { id: "3", name: "Credit Card", balance: -1204.50, type: "credit", accountNumber: "****9012" },
  ];

  const totalBalance = accounts.filter(acc => acc.type !== "credit").reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Enhanced Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 shadow-xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative flex justify-between items-center">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-8 h-8 text-yellow-300" />
                <h1 className="text-4xl font-bold">Welcome back, John</h1>
              </div>
              <p className="text-blue-100 text-lg">Your financial dashboard awaits</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Security
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Balance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-full">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-800">Total Balance</CardTitle>
                    <CardDescription className="text-gray-600">All accounts combined</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                <BalanceChart />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-800">Monthly Spending</CardTitle>
                  <CardDescription className="text-gray-600">Budget overview</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-3 font-medium">
                    <span className="text-gray-700">Spent this month</span>
                    <span className="text-gray-900">$1,234 / $2,000</span>
                  </div>
                  <Progress value={62} className="h-3 bg-gray-200" />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                    38% remaining
                  </Badge>
                  <span className="text-2xl font-bold text-green-600">$766</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-1">
          <QuickActions onTransferClick={() => setIsTransferModalOpen(true)} />
        </div>

        {/* Enhanced Accounts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            Your Accounts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        </div>

        {/* Enhanced Transaction History */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <TransactionHistory />
        </div>

        {/* Transfer Modal */}
        <TransferModal 
          isOpen={isTransferModalOpen} 
          onClose={() => setIsTransferModalOpen(false)}
          accounts={accounts}
        />
      </div>
    </div>
  );
};

export default Index;
