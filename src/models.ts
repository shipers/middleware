import z from 'zod';

export const MetaStateObject = z.object({
    cAt: z.number().min(13).max(13),
    uAt: z.number().min(13).max(13),
    cBy: z.object({ method: z.string(), userId: z.string(), identity: z.string() }),
    uBy: z.object({ method: z.string(), userId: z.string(), identity: z.string() }),
})
export type MetaStateObject = z.infer<typeof MetaStateObject>

export const BaseState = z.object({
    meta: MetaStateObject
})
export type BaseState = z.infer<typeof BaseState>


