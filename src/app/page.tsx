import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardContent className="flex gap-2">
          <Input />
          <Button variant="outline">Cadastrar</Button>
        </CardContent>
        <Separator/>
      </Card>
    </main>
  );
}

export default Home;