
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
import { CreditCard, TrendingUp, Shield, Bell } from "lucide-react";

const Index = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  
  const accounts = [
    { id: "1", name: "Checking Account", balance: 2450.75, type: "checking", accountNumber: "****1234" },
    { id: "2", name: "Savings Account", balance: 15670.30, type: "savings", accountNumber: "****5678" },
    { id: "3", name: "Credit Card", balance: -1204.50, type: "credit", accountNumber: "****9012" },
  ];

  const totalBalance = accounts.filter(acc => acc.type !== "credit").reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white rounded-lg p-6 shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, John</h1>
            <p className="text-gray-600 mt-1">Here's your financial overview</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Button>
          </div>
        </div>

        {/* Balance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Total Balance
              </CardTitle>
              <CardDescription>All accounts combined</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-600 mb-4">
                ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <BalanceChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Spending</CardTitle>
              <CardDescription>Budget overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Spent this month</span>
                    <span>$1,234 / $2,000</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <Badge variant="secondary">38% remaining</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <QuickActions onTransferClick={() => setIsTransferModalOpen(true)} />

        {/* Accounts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>

        {/* Transaction History */}
        <TransactionHistory />

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
