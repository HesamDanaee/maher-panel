import Flex from "@/src/components/common/Flex";
import { invoices } from "@/src/constants/mockData";
import Typography from "@/src/components/common/Typography";
import DataCard from "@/src/components/common/DataCard";

export default function InvoicesDataCard() {
  return (
    <DataCard
      list={invoices}
      render={({ billIssue, shippingStatus, tier, billType }, z) => (
        <li key={`item-${z}`}>
          <Flex className="justify-between flex-col border-[1px] border-muted p-2 rounded-md">
            <Flex className="justify-between">
              <Typography variant="p" className="font-extralight">
                {tier}
              </Typography>
              <Typography variant="p" className="font-extralight">
                {billType}
              </Typography>
            </Flex>
            <Flex className="justify-between">
              <Typography variant="p" className="font-extralight">
                {billIssue}
              </Typography>
              <Typography variant="p" className="font-extralight">
                {shippingStatus}
              </Typography>
            </Flex>
          </Flex>
        </li>
      )}
    />
  );
}
