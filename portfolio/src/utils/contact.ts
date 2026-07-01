export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function buildContactPayload(values: ContactFormValues) {
  return {
    name: values.name,
    email: values.email,
    subject: values.subject,
    message: values.message,
  };
}
