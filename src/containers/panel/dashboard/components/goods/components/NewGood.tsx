"use client";

import Flex from "@/src/components/common/Flex";
import {Button} from "@/src/components/shadcn/button";
import {PiPlus, PiFileCsvLight, PiPenNib} from "react-icons/pi";
import Typography from "@/src/components/common/Typography";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/shadcn/Dropdown-menu";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/src/components/shadcn/dialog";
import goodsData from "@/public/data/panel/goods.json";
import NewGoodForm from "./NewGoodForm";
import useSWRMutation from "swr/mutation";
import APIS from "@/src/constants/apis";
import fetcher from "@/lib/clientFetcher";
import {NewGoodSchemaType} from "@/src/schema/goodsSchema";
import {useState} from "react";
import {useToast} from "@/components/shadcn/use-toast";

interface NewGoodProps {
    goodsResult: Goods[][];
}

export default function NewGood({goodsResult}: NewGoodProps) {
    const [userGoods, setUserGoods] = useState<NewGoodSchemaType[]>([])
    const { toast } = useToast()

    const {
        newGood: {
            button,
            options,
            newGoodForm: {submit},
        },
    } = goodsData;

    const {trigger: addUserGoods} = useSWRMutation(
        APIS.panel.goods.add,
        async (url, {arg}: { arg: string }) =>
            await fetcher<UserGoodsRes, UserGoodsRes>(url, "POST", arg)
    );


    const handleSubmit = async () => {
        const {ok,message} = await addUserGoods(JSON.stringify(userGoods));
        toast({
            title:message
        })
    }

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="sm" className="h-8 gap-1">
                        <PiPlus className="h-3.5 w-3.5"/>
                        <Typography className="text-background sr-only sm:not-sr-only sm:whitespace-nowrap">
                            {button}
                        </Typography>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-full bg-foreground">
                    <Flex className="flex-col gap-y-1">
                        {options.map(({title, icon}, z) => (
                            <DialogTrigger key={`${title}-${z}`}>
                                <DropdownMenuItem className="bg-gray hover:!bg-gray-foreground cursor-pointer">
                                    <Flex className="items-center justify-between">
                                        {
                                            {
                                                file: (
                                                    <PiFileCsvLight className="w-5 h-5 text-background"/>
                                                ),
                                                manual: (
                                                    <PiPenNib className="w-5 h-5 text-background"/>
                                                ),
                                            }[icon]
                                        }
                                        <Typography
                                            variant="p"
                                            className="font-medium text-background"
                                        >
                                            {title}
                                        </Typography>
                                    </Flex>
                                </DropdownMenuItem>
                            </DialogTrigger>
                        ))}
                    </Flex>
                </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent className="!min-w-[800px] !h-auto">
                <NewGoodForm goodsResult={goodsResult} goodsList={userGoods}
                             handleSelectGood={(goods: NewGoodSchemaType[]) => setUserGoods(goods)}/>

                <DialogFooter>
                    <Button className="w-full" variant="default" onClick={handleSubmit}>
                        {submit}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
