import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";

interface CustomDialogProps {
  trigger: ReactNode;
  body: ReactNode;
  title?: "string";
  description?: string;
  footer?: ReactNode;
}

export default function CustomDialog({
  title,
  description,
  trigger,
  body,
  footer,
}: CustomDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {body}
      </DialogContent>
      {footer && <DialogFooter>{footer}</DialogFooter>}
    </Dialog>
  );
}
