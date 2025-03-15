import { z } from "zod"

export const UserAddressformSchema = z.object({
    label: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    zipCode: z.string(),
    street: z.string(),
})
