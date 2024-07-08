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
import { ChevronDown, Download } from "lucide-react";
import { CiFileOn } from "react-icons/ci";

export const ExportDropdown = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <Download className="size-4 mr-2" />
          Baixar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-60">
        <DropdownMenuItem
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={() => {}} // TODO: Add funcionality
        >
          <CiFileOn className="size-8" />
          <div>
            <p>PNG</p>
            <p className="text-xs text-muted-foreground">
              Melhor para compartilhar na web
            </p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={() => {}} // TODO: Add funcionality
        >
          <CiFileOn className="size-8" />
          <div>
            <p>JPG</p>
            <p className="text-xs text-muted-foreground">
              Melhor para imprimir
            </p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={() => {}} // TODO: Add funcionality
        >
          <CiFileOn className="size-8" />
          <div>
            <p>SVG</p>
            <p className="text-xs text-muted-foreground">
              Melhor para edição em software vetorial
            </p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={() => {}} // TODO: Add funcionality
        >
          <CiFileOn className="size-8" />
          <div>
            <p>JSON</p>
            <p className="text-xs text-muted-foreground">
              Salvar para edição posterior
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
