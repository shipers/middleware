import {Data} from "@retter/rdk";
import middy from '@middy/core'
import {metaStateTagMiddleware, handleErrorMiddleware} from "../middlewares";


const testMethod = async (data: Data): Promise<Data> => {

    data.state.private!["test"] = "test-data-from-method"

    return data
}
const testMethodHandler = middy(testMethod as any).use(metaStateTagMiddleware())

const testMethodError = async (data: Data): Promise<Data> => {
    data.state.private!["test"] = "test-data-from-method-error"
    throw new Error("test error")
}
const testMethodErrorHandler = middy(testMethodError as any).use(handleErrorMiddleware())

export {
    testMethodHandler,
    testMethodErrorHandler
}
