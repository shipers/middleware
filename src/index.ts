import middy from "@middy/core";
import {Data} from "@retter/rdk";

export const shippy = (handler: (data: Data) => Promise<Data>) => {
    return middy(handler as any)
}

export * from './models'
export * from "./middlewares"
