import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Plus, List, Check, CircleMinus, SquarePen, Trash, ListTodo, Sigma } from 'lucide-react';
import { Badge } from "../components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/ui/alert-dialog";
import EditTask from "@/src/components/edit-task";
import Alert from "../components/alert";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button variant="default" className="cursor-pointer"><Plus/> Cadastrar</Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4"/>
          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant="default"><List/>Todas</Badge>
            <Badge className="cursor-pointer" variant="outline"><CircleMinus/>Não finalizadas</Badge>
            <Badge className="cursor-pointer" variant="outline"><Check/>Concluídas</Badge>
          </div>
          <div className="mt-4 border-b">
            <div className="h-14 flex justify-between items-center border-t">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React.js</p>
              <div className="flex items-center gap-4">

                <EditTask/>

                <Trash size="16" className="cursor-pointer"/>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col">
          <div className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
              <ListTodo size="18"/>
              <p className="text-xs">Tarefas Concluídas (3/3)</p>
            </div>

            <Alert/>           

          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div className="h-full bg-blue-500 rounded-md" style={{width: "50%"}}></div>
          </div>

          <div className="flex justify-end items-center w-full mt-2 gap-2">
            <Sigma size="18"/>
            <p className="text-xs">3 tarefas no total</p>
          </div>


          
        </CardFooter>
      </Card>
    </main>
  );
}

export default Home;