"use client";

import { MousePointerClick, Redo2, Undo2 } from "lucide-react";
import { BsCloudCheck } from "react-icons/bs";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileDropdown } from "@/features/editor/components/file-dropdown";
import { Logo } from "@/features/editor/components/logo";
import { ExportDropdown } from "./export-dropdown";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
      <Logo />

      <div className="w-full flex items-center gap-x-1 h-full">
        <FileDropdown />

        <Separator orientation="vertical" className="mx-2" />

        <Hint label="Selecionar">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}} // TODO: Add funcionality
            className="" // TODO: Add dynamic class
          >
            <MousePointerClick className="size-4" />
          </Button>
        </Hint>

        <Hint label="Desafazer">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}} // TODO: Add funcionality
            className="" // TODO: Add dynamic class
          >
            <Undo2 className="size-4" />
          </Button>
        </Hint>

        <Hint label="Refazer">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}} // TODO: Add funcionality
            className="" // TODO: Add dynamic class
          >
            <Redo2 className="size-4" />
          </Button>
        </Hint>

        <Separator orientation="vertical" className="mx-2" />

        <div className="flex items-center gap-x-2">
          <BsCloudCheck className="size-[20px] text-muted-foreground" />
          <div className="text-xs text-muted-foreground">Alterações salvas</div>
        </div>

        <div className="ml-auto flex items-center gap-x-4">
          <ExportDropdown />
        </div>

        {/* TODO: add user dropdown */}
      </div>
    </nav>
  );
};
