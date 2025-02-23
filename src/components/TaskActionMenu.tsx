import { MoreHorizontal, Edit, Trash } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TaskActionMenuProps {
    onEdit?: () => void;
    onDelete?: () => void;
}

export const TaskActionMenu = ({ onEdit, onDelete }: TaskActionMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-gray-100 rounded-full p-2">
                <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={onEdit}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Edit className="h-4 w-4" />
                    <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={onDelete}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Trash className="h-4 w-4" />
                    <span>Delete</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

