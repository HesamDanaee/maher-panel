import Grid, { GridCol } from "./Grid";

interface StepsProps<X> {
  steps: X[];
}

export default function Steps<X>({ steps }: StepsProps<X>) {
  return (
    <Grid>
      <GridCol>
        <div></div>
      </GridCol>
    </Grid>
  );
}
