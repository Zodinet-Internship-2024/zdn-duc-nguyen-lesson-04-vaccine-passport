import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Name must be at least 1 characters long" }),
  // .regex(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/, "Name not valid"),
  gender: z.string().min(2).max(4),
  cardId: z
    .string()
    .length(12, { message: "Card ID must be 12 characters long" })
    .regex(/^[0-9]{12}$/, "Card ID not valid")
    .refine((val) => !/[eE\-\+\s]/.test(val), {
      message: 'Card ID cannot contain "e", "-", "+", or spaces',
    }),
  district: z.string().min(1, { message: "District is required" }),
  ward: z.string().min(1, { message: "Ward is required" }),
  province: z.string().min(1, { message: "Province is required" }),
  dateOfBirth: z.coerce
    .date()
    .refine((date) => !isNaN(date.getTime()), {
      message: "Date of birth is required",
    })
    .transform((date) => {
      const newDate = new Date(date);
      return {
        day: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear(),
      };
    }),
});

// const customMessage = "This field is required";
// const schemaWithCustomMessage = z.object({
//   firstName: z
//     .string()
//     .min(2)
//     .max(255)
//     .optional()
//     .refine((value) => !!value, { message: customMessage }),
//   gender: z
//     .string()
//     .min(1)
//     .max(1)
//     .optional()
//     .refine((value) => !!value, { message: customMessage }),
//   cardId: z
//     .string()
//     .length(9)
//     .optional()
//     .refine((value) => !!value, { message: customMessage }),
//   district: z
//     .string()
//     .optional()
//     .refine((value) => !!value, { message: customMessage }),
//   ward: z
//     .string()
//     .optional()
//     .refine((value) => !!value, { message: customMessage }),
// });

export default schema;
