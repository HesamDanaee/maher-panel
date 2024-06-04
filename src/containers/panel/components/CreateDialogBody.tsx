import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";
import { PiFileCsvLight, PiPenNib } from "react-icons/pi";
import Grid, { GridCol } from "@/src/components/common/Grid";

interface CreateDialogBodyProps {
  onSubmit: (state: number) => void;

  btns: {
    btn1: {
      title: string;
      description: string;
    };
    btn2: {
      title: string;
      description: string;
    };
  };
}

export default function CreateDialogBody({
  btns,
  onSubmit,
}: CreateDialogBodyProps) {
  const { btn1, btn2 } = btns;

  return (
    <Grid className="max-sm:grid-cols-1 max-sm:grid-rows-2 py-4">
      <GridCol className="max-sm:row-span-1 border-[1px] border-foreground hover:border-accent hover:cursor-pointer rounded-md p-2 group transition-all duration-100 ease-out">
        <Flex className="items-center gap-x-2" onClick={() => onSubmit(1)}>
          <PiFileCsvLight className="w-8 h-8 group-hover:fill-ghost transition-all duration-100 ease-out" />
          <Flex className="flex-col">
            <Typography variant="p" className="font-light">
              {btn1.title}
            </Typography>
            <Typography variant="p" className="font-thin">
              {btn1.description}
            </Typography>
          </Flex>
        </Flex>
      </GridCol>

      <GridCol className="max-sm:row-span-1 border-[1px] border-foreground hover:border-accent hover:cursor-pointer rounded-md p-2 group transition-all duration-100 ease-out">
        <Flex className="items-center gap-x-2">
          <PiPenNib className="w-8 h-8 group-hover:fill-ghost transition-all duration-100 ease-out" />
          <Flex className="flex-col" onClick={() => onSubmit(2)}>
            <Typography className="font-light">{btn2.title}</Typography>
            <Typography className="font-thin">{btn2.description}</Typography>
          </Flex>
        </Flex>
      </GridCol>
    </Grid>
  );
}
