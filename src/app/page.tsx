import { Input } from '@/components/ui/input';
import {Button} from '../components/ui/button'
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

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
