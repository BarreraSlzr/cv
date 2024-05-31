import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";

type Props = {
    children: React.ReactNode;
    button: React.HTMLAttributes<HTMLButtonElement>;
};

export default function TooltipTemplate({ children, button }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger></TooltipTrigger>
                <TooltipContent>
                    {children}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
};