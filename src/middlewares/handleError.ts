import middy from "@middy/core";

/**
 * @experimental
 */
export const handleErrorMiddleware = () => {

    const handleErrorOnError = async (request: middy.Request) => {
        request.response = {
            statusCode: 500,
        }
        request.error = null
        return request
    }

    return {
        onError: handleErrorOnError
    }
}
