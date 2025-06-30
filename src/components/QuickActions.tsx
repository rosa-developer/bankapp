
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, CreditCard, PiggyBank, FileText, Smartphone, Users } from "lucide-react";

interface QuickActionsProps {
  onTransferClick: () => void;
}

export const QuickActions = ({ onTransferClick }: QuickActionsProps) => {
  const actions = [
    { icon: ArrowRightLeft, label: "Transfer", onClick: onTransferClick, color: "from-blue-500 to-blue-600" },
    { icon: CreditCard, label: "Pay Bills", onClick: () => {}, color: "from-green-500 to-emerald-600" },
    { icon: PiggyBank, label: "Save Money", onClick: () => {}, color: "from-purple-500 to-purple-600" },  
    { icon: FileText, label: "Statements", onClick: () => {}, color: "from-orange-500 to-orange-600" },
    { icon: Smartphone, label: "Mobile Pay", onClick: () => {}, color: "from-pink-500 to-pink-600" },
    { icon: Users, label: "Send Money", onClick: () => {}, color: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-24 flex flex-col space-y-3 border-2 hover:border-transparent hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                onClick={action.onClick}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`p-2 rounded-full bg-gradient-to-r ${action.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
