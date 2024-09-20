import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");
export const createCategorySchema = z.object({
    name: requiredString
})
export const animalNameSchema = z.object({
    name: requiredString,
    category: requiredString,

})