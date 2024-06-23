

// import { z } from "zod";
// import { patterns } from "../../constants";

// export const schema = z.object({
//   name: z.string().min(1, { message: "Name is Required" }),
//   email: z.string().min(1, { message: "Email is required" }).refine((text) => patterns.email.test(text), {
//     message: "Email not valid",
//   }),
//   age: z.number().min(1, { message: "Age must be greater than 0" }),
//   attendingWithGuest: z.boolean(),
//   guestName: z.string().min(1, { message: "Guest Name is required" }).optional().nullable(),
// }).refine((data) => !data.attendingWithGuest || (data.attendingWithGuest && data.guestName), {
//   message: "Guest Name is required if attending with a guest",
//   path: ["guestName"],
// });

// export type Schema = z.infer<typeof schema>;

// export const defaultValues: Schema = {
//   email: "",
//   name: "",
//   age: 0,
//   attendingWithGuest: false,
//   guestName: null,
// };



import { z } from "zod";
import { patterns } from "../../constants";

const technologySchema = z.object({
  favoriteProgrammingLanguage: z.string().min(1, { message: "Favorite Programming Language is required" }),
  yearsOfExperience: z.number().min(0, { message: "Years of Experience must be 0 or greater" }),
});

const healthSchema = z.object({
  exerciseFrequency: z.string().min(1, { message: "Exercise Frequency is required" }),
  dietPreference: z.string().min(1, { message: "Diet Preference is required" }),
});

const educationSchema = z.object({
  highestQualification: z.string().min(1, { message: "Highest Qualification is required" }),
  fieldOfStudy: z.string().min(1, { message: "Field of Study is required" }),
});

export const schema = z.object({
  name: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).refine((text) => patterns.email.test(text), {
    message: "Email not valid",
  }),
  surveyTopic: z.string().min(1, { message: "Survey Topic is required" }),
  technology: z.optional(technologySchema),
  health: z.optional(healthSchema),
  education: z.optional(educationSchema),
  feedback: z.string().min(50, { message: "Feedback must be at least 50 characters" }),
}).refine((data) => {
  if (data.surveyTopic === "Technology") return technologySchema.safeParse(data.technology).success;
  if (data.surveyTopic === "Health") return healthSchema.safeParse(data.health).success;
  if (data.surveyTopic === "Education") return educationSchema.safeParse(data.education).success;
  return true;
}, {
  message: "Survey section fields are required based on the selected topic",
  path: ["surveyTopic"]
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  name: "",
  email: "",
  surveyTopic: "",
  feedback: "",
};
