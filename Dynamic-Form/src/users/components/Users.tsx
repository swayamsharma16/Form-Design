


// import { Stack, TextField, FormControlLabel, Checkbox, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
// import { useFormContext, Controller } from "react-hook-form";
// import { Schema } from "../types/schema";

// export function Users() {
//   const { register, control, watch, formState: { errors } } = useFormContext<Schema>();

//   const surveyTopic = watch("surveyTopic");

//   return (
//     <Stack spacing={3}>
//       <TextField
//         {...register("name")}
//         label="Full Name"
//         error={!!errors.name}
//         helperText={errors.name?.message}
//         fullWidth
//       />
//       <TextField
//         {...register("email")}
//         label="Email"
//         error={!!errors.email}
//         helperText={errors.email?.message}
//         fullWidth
//       />
//       <FormControl fullWidth>
//         <InputLabel>Survey Topic</InputLabel>
//         <Controller
//           name="surveyTopic"
//           control={control}
//           render={({ field }) => (
//             <Select {...field} label="Survey Topic">
//               <MenuItem value="Technology">Technology</MenuItem>
//               <MenuItem value="Health">Health</MenuItem>
//               <MenuItem value="Education">Education</MenuItem>
//             </Select>
//           )}
//         />
//       </FormControl>
//       {surveyTopic === "Technology" && (
//         <>
//           <FormControl fullWidth>
//             <InputLabel>Favorite Programming Language</InputLabel>
//             <Controller
//               name="technology.favoriteProgrammingLanguage"
//               control={control}
//               render={({ field }) => (
//                 <Select {...field} label="Favorite Programming Language">
//                   <MenuItem value="JavaScript">JavaScript</MenuItem>
//                   <MenuItem value="Python">Python</MenuItem>
//                   <MenuItem value="Java">Java</MenuItem>
//                   <MenuItem value="C#">C#</MenuItem>
//                 </Select>
//               )}
//             />
//       </FormControl>
//           <Controller
//             name="technology.yearsOfExperience"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Years of Experience"
//                 type="number"
//                 error={!!errors.technology?.yearsOfExperience}
//                 helperText={errors.technology?.yearsOfExperience?.message}
//                 fullWidth
//                 InputProps={{ inputProps: { min: 0 } }} // Ensure non-negative input
//               />
//             )}
//           />
//         </>
//       )}
//       {surveyTopic === "Health" && (
//         <>
//           <FormControl fullWidth>
//             <InputLabel>Exercise Frequency</InputLabel>
//             <Controller
//               name="health.exerciseFrequency"
//               control={control}
//               render={({ field }) => (
//                 <Select {...field} label="Exercise Frequency">
//                   <MenuItem value="Daily">Daily</MenuItem>
//                   <MenuItem value="Weekly">Weekly</MenuItem>
//                   <MenuItem value="Monthly">Monthly</MenuItem>
//                   <MenuItem value="Rarely">Rarely</MenuItem>
//                 </Select>
//               )}
//             />
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel>Diet Preference</InputLabel>
//             <Controller
//               name="health.dietPreference"
//               control={control}
//               render={({ field }) => (
//                 <Select {...field} label="Diet Preference">
//                   <MenuItem value="Vegetarian">Vegetarian</MenuItem>
//                   <MenuItem value="Vegan">Vegan</MenuItem>
//                   <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
//                 </Select>
//               )}
//             />
//           </FormControl>
//         </>
//       )}
//       {surveyTopic === "Education" && (
//         <>
//           <FormControl fullWidth>
//             <InputLabel>Highest Qualification</InputLabel>
//             <Controller
//               name="education.highestQualification"
//               control={control}
//               render={({ field }) => (
//                 <Select {...field} label="Highest Qualification">
//                   <MenuItem value="High School">High School</MenuItem>
//                   <MenuItem value="Bachelor's">Bachelor's</MenuItem>
//                   <MenuItem value="Master's">Master's</MenuItem>
//                   <MenuItem value="PhD">PhD</MenuItem>
//                 </Select>
//               )}
//             />
//           </FormControl>
//           <TextField
//             {...register("education.fieldOfStudy")}
//             label="Field of Study"
//             error={!!errors.education?.fieldOfStudy}
//             helperText={errors.education?.fieldOfStudy?.message}
//             fullWidth
//           />
//         </>
//       )}
//       <TextField
//         {...register("feedback")}
//         label="Feedback"
//         error={!!errors.feedback}
//         helperText={errors.feedback?.message}
//         fullWidth
//         multiline
//         minRows={4}
//       />
//       <Button type="submit" variant="contained" color="primary" fullWidth>
//         Submit
//       </Button>
//     </Stack>
//   );
// }


import { Stack, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { Schema } from "../types/schema";

export function Users() {
  const { control, watch, register, formState: { errors } } = useFormContext<Schema>();
  const surveyTopic = watch("surveyTopic");

  return (
    <Stack spacing={3}>
      <TextField
        {...register("name", { required: "Name is required" })}
        label="Full Name"
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
      />
      <TextField
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Survey Topic</InputLabel>
        <Controller
          name="surveyTopic"
          control={control}
          render={({ field }) => (
            <Select {...field} label="Survey Topic">
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Health">Health</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      
      {surveyTopic === "Technology" && (
        <>
          <FormControl fullWidth>
            <InputLabel>Favorite Programming Language</InputLabel>
            <Controller
              name="technology.favoriteProgrammingLanguage"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Favorite Programming Language">
                  <MenuItem value="JavaScript">JavaScript</MenuItem>
                  <MenuItem value="Python">Python</MenuItem>
                  <MenuItem value="Java">Java</MenuItem>
                  <MenuItem value="C#">C#</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <Controller
            name="technology.yearsOfExperience"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Years of Experience"
                type="number"
                error={!!errors.technology?.yearsOfExperience}
                helperText={errors.technology?.yearsOfExperience?.message}
                fullWidth
                onChange={(e) => field.onChange(parseInt(e.target.value, 10) || 0)} // Parse value as integer
                InputProps={{ inputProps: { min: 0 } }} // Ensure non-negative input
              />
            )}
          />
        </>
      )}

      {surveyTopic === "Health" && (
        <>
          <FormControl fullWidth>
            <InputLabel>Exercise Frequency</InputLabel>
            <Controller
              name="health.exerciseFrequency"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Exercise Frequency">
                  <MenuItem value="Daily">Daily</MenuItem>
                  <MenuItem value="Weekly">Weekly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Rarely">Rarely</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Diet Preference</InputLabel>
            <Controller
              name="health.dietPreference"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Diet Preference">
                  <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                  <MenuItem value="Vegan">Vegan</MenuItem>
                  <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </>
      )}

      {surveyTopic === "Education" && (
        <>
          <FormControl fullWidth>
            <InputLabel>Highest Qualification</InputLabel>
            <Controller
              name="education.highestQualification"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Highest Qualification">
                  <MenuItem value="High School">High School</MenuItem>
                  <MenuItem value="Bachelor's">Bachelor's</MenuItem>
                  <MenuItem value="Master's">Master's</MenuItem>
                  <MenuItem value="PhD">PhD</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <TextField
            {...register("education.fieldOfStudy")}
            label="Field of Study"
            error={!!errors.education?.fieldOfStudy}
            helperText={errors.education?.fieldOfStudy?.message}
            fullWidth
          />
        </>
      )}

      <TextField
        {...register("feedback")}
        label="Feedback"
        error={!!errors.feedback}
        helperText={errors.feedback?.message}
        fullWidth
        multiline
        minRows={4}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Stack>
  );
}
