"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { CiFileOn } from "react-icons/ci";

export const FileDropdown = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          Arquivo
          <ChevronDown className="size-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-60">
        <DropdownMenuItem
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={() => {}} // TODO: Add funcionality
        >
          <CiFileOn className="size-8" />
          <div>
            <p>Abrir</p>
            <p className="text-xs text-muted-foreground">
              Importar arquivo JSON
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
