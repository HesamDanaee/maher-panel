import data from "@/public/data/data.json";
import Flex from "@/src/components/common/Flex";
import Typography from "@/src/components/common/Typography";

export default function Signup() {
  const {
    register: {
      signup: { title },
    },
  } = data;

  return (
    <Flex>
      <Typography variant="h4">{title}</Typography>
    </Flex>
  );
}
