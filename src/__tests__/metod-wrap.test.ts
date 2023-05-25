import test from "ava";
import {testMethodErrorHandler, testMethodHandler} from "./wrapped-method";
import {getMockedData} from "./utils";


test('run method and modify meta tag successfully', async (t) => {

    const data = getMockedData()

    await testMethodHandler(data, {})

    t.truthy(data.state.private!["meta"])

    t.truthy(data.state.private!["meta"].cAt)
    t.truthy(data.state.private!["meta"].cBy)

    t.truthy(data.state.private!["meta"].uAt)
    t.truthy(data.state.private!["meta"].uBy)

    t.is(data.state.private!["meta"].cBy.identity, "testIdentity")
    t.is(data.state.private!["meta"].uBy.identity, "testIdentity")

})

test('run method error handling successfully', async (t) => {

    const data = getMockedData()

    const timestampMock = 1234567890123

    data.state.private!["meta"] = {
        cAt: timestampMock,
        cBy: {
            identity: "testIdentity",
            method: "testMethod",
            userId: "testUserId"
        },
        uAt: timestampMock,
        uBy: {
            identity: "testIdentity",
            method: "testMethod",
            userId: "testUserId"
        }
    }

    await testMethodErrorHandler(data, {})

    t.is(data.state.private!["meta"].cAt, timestampMock)
    t.is(data.state.private!["meta"].uAt, timestampMock)

    //t.is(data.response.statusCode, 400)

})
