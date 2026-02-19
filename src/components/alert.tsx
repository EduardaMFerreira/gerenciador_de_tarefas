import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/src/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

const Alert = () => {
    return (
         <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="xs h-7 cursor-pointer"><Trash/>Limpar Tarefas Concluídas</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Tem certeza que deseja excluir 2 itens?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Sim</AlertDialogAction>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Alert;