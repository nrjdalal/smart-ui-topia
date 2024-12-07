import { Button } from "@/components/shadcn-ui/button";
import { Input } from "@/components/shadcn-ui/input";
import { Label } from "@/components/shadcn-ui/label";

export default function InputDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-03">Input with button</Label>
      <div className="flex gap-2">
        <Input
          id="input-03"
          className="flex-1"
          placeholder="Email"
          type="email"
        />
        <Button variant="outline">Send</Button>
      </div>
    </div>
  );
}
