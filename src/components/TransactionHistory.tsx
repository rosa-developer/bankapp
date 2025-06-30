
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Coffee, Gas, ShoppingBag, Wifi } from "lucide-react";

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
    icon: Gas,
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
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest account activity</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const IconComponent = transaction.icon;
            const isIncome = transaction.amount > 0;
            
            return (
              <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${isIncome ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <IconComponent className={`w-4 h-4 ${isIncome ? 'text-green-600' : 'text-gray-600'}`} />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-gray-600">{transaction.date}</p>
                      <Badge variant={transaction.status === "pending" ? "secondary" : "outline"} className="text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
                    {isIncome ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">{transaction.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
