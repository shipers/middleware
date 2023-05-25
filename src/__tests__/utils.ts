import {Data} from "@retter/rdk";

export function getMockedData(): Data {
    return {
        config: {stepLimit: 0}, env: {}, events: [], version: 0,
        context: {
            action: "",
            claims: {},
            clientOs: "",
            culture: "",
            headers: {},
            identity: "testIdentity",
            isAnonymous: false,
            methodName: "",
            projectId: 'testProject',
            classId: 'testClassId',
            instanceId: 'testInstanceId',
            requestId: "testRequestId",
            sourceIP: "10.0.0.0",
        },
        response: {body: undefined, headers: {}, isBase64Encoded: false, retryAfter: 0, statusCode: 204},
        request: {
            body: undefined, headers: {}, httpMethod: "", queryStringParams: {}
        },
        state: {
            role: {},
            user: {},
            private: {},
            public: {}
        },
        schedule: [],
        tasks: []
    } as Data
}
