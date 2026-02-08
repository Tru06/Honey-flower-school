import Tembo from '@tembo-io/sdk';

// Initialize Tembo client with API key
export const temboClient = new Tembo({
  apiKey: process.env.REACT_APP_TEMBO_API_KEY || 'tambo_onaVPCoe7TmawE1BYhtVcnN+5uOwW0ZvHXjTgkUOmwzwLoqmYq7KGegh+4voF/3qWLDxEff7ZkJgEW5YYJjc5KUnUDHRpS3Ke406wpyd70g='
});

// AI Assistant service for school-related queries
export const schoolAssistant = {
  // Create a task for answering school-related questions
  async askQuestion(question) {
    try {
      const task = await temboClient.task.create({
        prompt: `You are a helpful assistant for Honey Flower School. Answer this question: ${question}`,
        agent: 'claudeCode:claude-4-5-sonnet',
      });
      
      return {
        success: true,
        taskId: task.id,
        message: 'Your question has been submitted to our AI assistant.'
      };
    } catch (error) {
      console.error('Tembo AI Error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  },

  // Get common school information
  async getSchoolInfo(topic) {
    const responses = {
      admissions: 'Our admissions process includes: 1) Submit application, 2) Take entrance test, 3) Attend interview, 4) Complete enrollment. Applications open January 15, 2026.',
      fees: 'Annual tuition ranges from $8,500 (Kindergarten) to $14,000 (High School). Registration fee is $500. Scholarships available.',
      schedule: 'School hours: 8:00 AM - 3:00 PM. Office hours: Mon-Fri 8:00 AM - 4:00 PM, Sat 9:00 AM - 1:00 PM.',
      contact: 'Phone: (555) 123-4567, Email: info@honeyflowerschool.edu, Address: 123 Education Lane, Springfield, ST 12345',
      exams: 'Mid-Term Exams: March 15-22, 2026. Final Exams: June 1-15, 2026.',
      holidays: 'Spring Break: April 5-12, 2026. Summer Vacation: June 20 - August 15, 2026.'
    };

    return responses[topic] || 'Please contact our office for more information.';
  }
};

export default temboClient;
