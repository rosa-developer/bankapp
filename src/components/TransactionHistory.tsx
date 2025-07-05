
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Coffee, Fuel, ShoppingBag, Wifi, ChevronRight } from "lucide-react";

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
    <Card className="border-0 shadow-none bg-transparent">
      <CardHeader className="pb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-10 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-lg"></div>
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Recent Transactions
              </CardTitle>
              <CardDescription className="text-gray-600 font-medium text-lg">
                Your latest financial activity
              </CardDescription>
            </div>
          </div>
          <Button variant="outline" size="sm" className="hover:bg-gray-50 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            View All
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((transaction, index) => {
            const IconComponent = transaction.icon;
            const isIncome = transaction.amount > 0;
            
            return (
              <div 
                key={transaction.id} 
                className="group flex items-center justify-between p-6 rounded-2xl hover:bg-white/80 transition-all duration-300 border border-gray-100/80 hover:border-gray-200 hover:shadow-lg backdrop-blur-sm hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
                    isIncome 
                      ? 'bg-gradient-to-br from-emerald-400 to-green-500' 
                      : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                  }`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900 group-hover:text-gray-800 transition-colors">
                      {transaction.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <p className="text-sm text-gray-500 font-medium">{transaction.date}</p>
                      <Badge 
                        variant={transaction.status === "pending" ? "secondary" : "outline"} 
                        className={`text-xs font-semibold px-3 py-1 ${
                          transaction.status === "pending" 
                            ? 'bg-amber-100 text-amber-800 border-amber-200' 
                            : 'bg-emerald-100 text-emerald-800 border-emerald-200'
                        }`}
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-2xl transition-all duration-300 ${
                    isIncome 
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent'
                  }`}>
                    {isIncome ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 font-medium mt-1">{transaction.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
