
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, CreditCard, PiggyBank, FileText, Smartphone, Users } from "lucide-react";

interface QuickActionsProps {
  onTransferClick: () => void;
}

export const QuickActions = ({ onTransferClick }: QuickActionsProps) => {
  const actions = [
    { icon: ArrowRightLeft, label: "Transfer", onClick: onTransferClick },
    { icon: CreditCard, label: "Pay Bills", onClick: () => {} },
    { icon: PiggyBank, label: "Save Money", onClick: () => {} },  
    { icon: FileText, label: "Statements", onClick: () => {} },
    { icon: Smartphone, label: "Mobile Pay", onClick: () => {} },
    { icon: Users, label: "Send Money", onClick: () => {} },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex flex-col space-y-2"
                onClick={action.onClick}
              >
                <IconComponent className="w-6 h-6" />
                <span className="text-xs">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
