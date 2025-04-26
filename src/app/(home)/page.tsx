import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-4 m-12">
        <div>
          <Button variant="elevated">I am a Button</Button>
        </div>
        <div>
          <Input placeholder='I am a Input' />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea placeholder='I am a Textarea' />
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
