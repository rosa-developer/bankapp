
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
import { CreditCard, TrendingUp, Shield, Bell, Sparkles, ChevronRight } from "lucide-react";
import { SendMoneyModal } from "@/components/SendMoneyModal";

const Index = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isSendMoneyModalOpen, setIsSendMoneyModalOpen] = useState(false);
  
  const accounts = [
    { id: "1", name: "Checking Account", balance: 2450.75, type: "checking", accountNumber: "****1234" },
    { id: "2", name: "Savings Account", balance: 15670.30, type: "savings", accountNumber: "****5678" },
    { id: "3", name: "Credit Card", balance: -1204.50, type: "credit", accountNumber: "****9012" },
  ];

  const totalBalance = accounts.filter(acc => acc.type !== "credit").reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Modern Header with Glassmorphism */}
        <div className="relative overflow-hidden bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10"></div>
          <div className="relative flex justify-between items-center">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Good morning, John
                  </h1>
                  <p className="text-gray-600 text-lg font-medium">Ready to manage your finances?</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="bg-white/50 hover:bg-white/70 backdrop-blur-sm border border-white/30 shadow-sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
              <Button variant="ghost" size="sm" className="bg-white/50 hover:bg-white/70 backdrop-blur-sm border border-white/30 shadow-sm">
                <Shield className="w-4 h-4 mr-2" />
                Security
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Balance Overview with modern cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">Total Balance</CardTitle>
                    <CardDescription className="text-gray-600 font-medium">Across all accounts</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-8">
                ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className="bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-inner">
                <BalanceChart />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900">Monthly Budget</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">Spending overview</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-4 font-semibold">
                    <span className="text-gray-700">This month</span>
                    <span className="text-gray-900">$1,234 / $2,000</span>
                  </div>
                  <div className="relative">
                    <Progress value={62} className="h-4 bg-gray-200/80 shadow-inner" />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 font-semibold px-3 py-1">
                    38% remaining
                  </Badge>
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    $766
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modern Quick Actions */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-2 hover:shadow-2xl transition-all duration-500">
          <QuickActions 
            onTransferClick={() => setIsTransferModalOpen(true)}
            onSendMoneyClick={() => setIsSendMoneyModalOpen(true)}
          />
        </div>

        {/* Enhanced Accounts Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent flex items-center gap-4">
              <div className="w-2 h-10 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-lg"></div>
              Your Accounts
            </h2>
            <Button variant="outline" className="hover:bg-gray-50 border-gray-200 shadow-sm">
              View All
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        </div>

        {/* Modern Transaction History */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500">
          <TransactionHistory />
        </div>

        {/* Transfer Modal */}
        <TransferModal 
          isOpen={isTransferModalOpen} 
          onClose={() => setIsTransferModalOpen(false)}
          accounts={accounts}
        />
        {/* Send Money Modal (to be implemented) */}
        <SendMoneyModal 
          isOpen={isSendMoneyModalOpen} 
          onClose={() => setIsSendMoneyModalOpen(false)}
          accounts={accounts}
        />
      </div>
    </div>
  );
};

export default Index;
