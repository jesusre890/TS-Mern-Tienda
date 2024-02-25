import { Button } from "@material-tailwind/react";

export default function LoadingBox() {
  return (
    <Button placeholder={undefined} variant="text" loading={true}>
      Loading
    </Button>
  );
}
