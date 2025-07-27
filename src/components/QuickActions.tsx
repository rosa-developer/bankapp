
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, CreditCard, PiggyBank, FileText, Smartphone, Users } from "lucide-react";

interface QuickActionsProps {
  onTransferClick: () => void;
  onSendMoneyClick: () => void;
}

export const QuickActions = ({ onTransferClick, onSendMoneyClick }: QuickActionsProps) => {
  const actions = [
    { icon: ArrowRightLeft, label: "Transfer", onClick: onTransferClick, gradient: "from-blue-500 via-blue-600 to-indigo-600" },
    { icon: CreditCard, label: "Pay Bills", onClick: () => {}, gradient: "from-emerald-500 via-green-600 to-teal-600" },
    { icon: PiggyBank, label: "Save Money", onClick: () => {}, gradient: "from-violet-500 via-purple-600 to-indigo-600" },  
    { icon: FileText, label: "Statements", onClick: () => {}, gradient: "from-orange-500 via-amber-600 to-yellow-600" },
    { icon: Smartphone, label: "Mobile Pay", onClick: () => {}, gradient: "from-pink-500 via-rose-600 to-red-600" },
    { icon: Users, label: "Send Money", onClick: onSendMoneyClick, gradient: "from-cyan-500 via-blue-600 to-indigo-600" },
  ];

  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardHeader className="pb-6">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent flex items-center gap-4">
          <div className="w-2 h-10 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-lg"></div>
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="group h-28 flex flex-col space-y-4 border-2 border-gray-200/80 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm relative overflow-hidden"
                onClick={action.onClick}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon container */}
                <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${action.gradient} text-white group-hover:scale-110 transition-all duration-500 flex items-center justify-center shadow-lg group-hover:shadow-xl`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                {/* Label */}
                <span className="relative text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {action.label}
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
