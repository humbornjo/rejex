import { Button } from "@mui/material";

function Info() {
  return (
    <div className="flex justify-between gap-4 items-center">
      <InfoItem content="github" icon={<div></div>}></InfoItem>
      <Button className="normal-case text-stone-300">github</Button>
    </div>
  );
}

export default Info;

function InfoItem({ content, icon }: { content: string; icon: JSX.Element }) {
  return (
    <Button
      startIcon={icon}
      className="flex items-center h-6 rounded-sm normal-case text-stone-300 bg-gray-400"
    >
      {content}
    </Button>
  );
}
