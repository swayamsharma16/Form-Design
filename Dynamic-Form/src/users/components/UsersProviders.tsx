


import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { Typography, Box, Paper, Button, List, ListItem, ListItemText } from "@mui/material";
import { useWatch } from "react-hook-form";
import axios from "axios";

import { Schema, defaultValues, schema } from "../types/schema";
import { Users } from "./Users";

// Component to display additional questions
function AdditionalQuestions({ questions }: { questions: any[] }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Additional Questions
      </Typography>
      <List>
        {questions.map((question, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText
              primary={question}
              
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export function UsersProviders() {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  
  const surveyTopic = useWatch({
    control: methods.control,
    name: "surveyTopic",
  });

  const [formData, setFormData] = useState<Schema | null>(null);
  const [additionalQuestions, setAdditionalQuestions] = useState<any[]>([]);

  useEffect(() => {
    const fetchAdditionalQuestions = async () => {
      try {
        const response = await axios.get(`https://form-design-co2n.onrender.com/api/${surveyTopic}`);
        setAdditionalQuestions(response.data);
        console.log("Additional Questions Fetched:", response.data);
      } catch (error) {
        console.error("Error fetching additional questions:", error);
        setAdditionalQuestions([]);
      }
    };

    if (surveyTopic) {
      fetchAdditionalQuestions();
    }
  }, [surveyTopic]);

  const onSubmit = (data: Schema) => {
    setFormData(data);
  };

  if (formData) {
    return (
      <Box sx={{ mt: 5, maxWidth: 600, mx: "auto", p: 3 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography variant="body1">
            <strong>Name:</strong> {formData.name}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {formData.email}
          </Typography>
          {formData.surveyTopic && (
            <Typography variant="body1">
              <strong>Survey Topic:</strong> {formData.surveyTopic}
            </Typography>
          )}
          {formData.technology && formData.surveyTopic === "Technology" && (
            <>
              <Typography variant="body1">
                <strong>Favorite Programming Language:</strong> {formData.technology.favoriteProgrammingLanguage}
              </Typography>
              <Typography variant="body1">
                <strong>Years of Experience:</strong> {formData.technology.yearsOfExperience}
              </Typography>
            </>
          )}
          {formData.health && formData.surveyTopic === "Health" && (
            <>
              <Typography variant="body1">
                <strong>Exercise Frequency:</strong> {formData.health.exerciseFrequency}
              </Typography>
              <Typography variant="body1">
                <strong>Diet Preference:</strong> {formData.health.dietPreference}
              </Typography>
            </>
          )}
          {formData.education && formData.surveyTopic === "Education" && (
            <>
              <Typography variant="body1">
                <strong>Highest Qualification:</strong> {formData.education.highestQualification}
              </Typography>
              <Typography variant="body1">
                <strong>Field of Study:</strong> {formData.education.fieldOfStudy}
              </Typography>
            </>
          )}
          <Typography variant="body1">
            <strong>Feedback:</strong> {formData.feedback}
          </Typography>
          <Button onClick={() => setFormData(null)} variant="contained" color="primary" sx={{ mt: 3 }}>
            Back to Form
          </Button>
        </Paper>

        {additionalQuestions.length > 0 && (
          <Paper elevation={3} sx={{ mt: 3, p: 3 }}>
            <AdditionalQuestions questions={additionalQuestions} />
          </Paper>
        )}
      </Box>
    );
  }

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5,
        }}
      >
        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ width: '100%', maxWidth: 500 }}>
          <Users />
        </Box>
      </Box>
    </FormProvider>
  );
}
