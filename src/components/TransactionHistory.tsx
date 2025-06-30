
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Coffee, Fuel, ShoppingBag, Wifi } from "lucide-react";

const transactions = [
  {
    id: "1",
    description: "Starbucks Coffee",
    amount: -4.95,
    date: "Today, 2:30 PM",
    category: "Food & Drink",
    icon: Coffee,
    status: "completed"
  },
  {
    id: "2",
    description: "Salary Deposit",
    amount: 3200.00,
    date: "Yesterday, 9:00 AM",
    category: "Income",
    icon: ArrowDownLeft,
    status: "completed"
  },
  {
    id: "3",
    description: "Shell Gas Station",
    amount: -45.20,
    date: "Dec 28, 5:45 PM",
    category: "Transportation",
    icon: Fuel,
    status: "completed"
  },
  {
    id: "4",
    description: "Amazon Purchase",
    amount: -89.99,
    date: "Dec 27, 3:20 PM",
    category: "Shopping",
    icon: ShoppingBag,
    status: "pending"
  },
  {
    id: "5",
    description: "Internet Bill",
    amount: -79.99,
    date: "Dec 25, 10:00 AM",
    category: "Utilities",
    icon: Wifi,
    status: "completed"
  }
];

export const TransactionHistory = () => {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <div>
              <CardTitle className="text-2xl text-gray-800">Recent Transactions</CardTitle>
              <CardDescription className="text-gray-600">Your latest account activity</CardDescription>
            </div>
          </div>
          <Button variant="outline" size="sm" className="hover:bg-gray-50">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((transaction) => {
            const IconComponent = transaction.icon;
            const isIncome = transaction.amount > 0;
            
            return (
              <div key={transaction.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-gray-100 hover:border-gray-200 hover:shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${isIncome ? 'bg-green-100' : 'bg-blue-100'} shadow-sm`}>
                    <IconComponent className={`w-5 h-5 ${isIncome ? 'text-green-600' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{transaction.description}</p>
                    <div className="flex items-center space-x-3 mt-1">
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                      <Badge 
                        variant={transaction.status === "pending" ? "secondary" : "outline"} 
                        className={`text-xs ${transaction.status === "pending" ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-lg ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
                    {isIncome ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
