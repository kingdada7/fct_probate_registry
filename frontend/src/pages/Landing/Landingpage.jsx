import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen gap-2 md:flex-row">
      <Button className="bg-[#0b602a] text-white pointer-events-none" variant="outline">Login</Button>
      <Button variant="outline">Sign up</Button>
    </div>
  );
}
