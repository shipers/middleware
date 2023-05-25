### Shipers Method Middlewares

### Installation
` npm install --save @shipers/middleware`

#### Middlewares
| Middleware Name | Middleware Key         | Description                                                 |
|-----------------|------------------------|-------------------------------------------------------------|
| Meta State Tag  | metaStateTagMiddleware | Adds meta state tags to private state with 'meta' field key |


### Usage

#### index.ts
```typescript
const testMethod = async (data: Data): Promise<Data> => {

    data.state.private!["test"] = "test-data-from-method"

    return data
}
const testMethodHandler = shippy(testMethod).use(metaStateTag()) // wrapped middy method

export {
    testMethodHandler
}
```

#### template.yml
```yaml

methods:
  - method: test
    type: WRITE
    handler: index.testMethodHandler

```

#### index.test.ts
```typescript
test('test', async (t) => {

    const data = getMockedData()

    await testMethodHandler(data, {}) // usage in code

    t.truthy(data.state.private!["meta"])

    t.truthy(data.state.private!["meta"].cAt)
    t.truthy(data.state.private!["meta"].cBy)

    t.truthy(data.state.private!["meta"].uAt)
    t.truthy(data.state.private!["meta"].uBy)

    t.is(data.state.private!["meta"].cBy.identity, "testIdentity")
    t.is(data.state.private!["meta"].uBy.identity, "testIdentity")

})
```
