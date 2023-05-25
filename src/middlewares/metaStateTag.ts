import {Data} from "@retter/rdk";
import {BaseState, MetaStateObject} from "../models";
import middy from "@middy/core";

export function getStateMeta(data: Data<any, any, any, BaseState>): {
    oldMeta: MetaStateObject,
    newMeta: MetaStateObject
} {
    const date = Date.now()
    const oldMeta = {...data.state.private!.meta}
    return {
        oldMeta,
        newMeta: {
            ...(oldMeta.cAt ? oldMeta : {
                cAt: date,
                cBy: {
                    identity: data.context.identity,
                    method: data.context.methodName,
                    userId: data.context.userId || ""
                },
            }),
            uBy: {identity: data.context.identity, method: data.context.methodName, userId: data.context.userId || ""},
            uAt: date,
        },
    }
}

export const metaStateTagMiddleware = () => {

    const metaStateTagAfter = async (request: middy.Request) => {
        const {response} = request
        if (response.response.statusCode < 400) {
            response.state.private!["meta"] = getStateMeta(response).newMeta
        }
    }

    return {
        after: metaStateTagAfter
    }
}
