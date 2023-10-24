# SmartRoom
SmartRoom is an innovative web application that utilizes full-stack development and machine learning to address critical challenges in the education sector. It serves as an intelligent classroom assistant that significantly reduces the workload of teachers by automating various educational processes and providing valuable insights to enhance student performance.

## Tools And Technology
- JavaScript
- React.js
- Java
- Spring Boot
- Spring Security
- MongoDB
- Python
- Fast Api
- Docker

## Features
#### Performance Prediction
At the heart of the project is a machine-learning model that accurately predicts a student's academic performance. This model takes into account various factors, including past performance, demographic information, and social and interpersonal relations. By doing so, it identifies struggling students and offers early interventions, helping educators support individual students effectively and improve their academic outcomes.

#### Teacher Features
- Teachers can monitor student performance predictions, gaining insights into individual and class-wide progress.
- Teachers can provide student parameters and data to enhance the accuracy of the prediction model.
- Teachers can view visual representations of predicted scores, making it easier to identify trends and areas for improvement.
- The system can notify students via email when their predicted scores are low, enabling timely intervention.
- Teachers can access a list of weak-performing students in their class, helping them target support where it's needed most.
- Teachers can conduct seamless online classes enhancing the virtual learning experience for both teachers and students. 
- Teachers can take proctored examinations that guarantee the authenticity of each student and maintain a fair testing environment.
  (Still in Development)

#### Student Features
- Students can view visual representations of their scores and predicted results, helping them track their progress.
- Students can see a list of the top-performing students in their class, fostering healthy competition and motivation.

## Implementation
##### Frontend
The front end of the application is implemented using React.js, Material UI, and Tailwind. These technologies provide a responsive and user-friendly interface. It includes a comprehensive dashboard with a sidebar for easy access to various services, analytics graphs for performance tracking, and leaderboards to motivate students to excel. This combination of technologies ensures an aesthetically pleasing and highly usable front end.

#### Backend
The backend is built using SpringBoot, Spring Security, and Maven. Spring Security ensures secure logins and a robust authentication system, while Maven simplifies project management and dependency handling. MongoDB is integrated to handle student data storage and acts as a medium between the frontend and machine learning model. JWT-based authentication and token management enhance data security and user privacy.

#### Machine Learning
The machine learning component employs Scikit-learn to train a random forest prediction model. This model, achieving an impressive 94% accuracy, plays a critical role in predicting academic performance. It is exposed through an API, using FastAPI to make it readily available to the backend, ensuring seamless integration between various components of the application.


## Prediction Model Parameter
```
1. sex - student's sex (binary: "F" - female or "M" - male)
2. age - student's age (numeric: from 15 to 22)
3. address - student's home address type (binary: "U" - urban or "R" - rural)
4. famsize - family size (binary: "LE3" - less or equal to 3 or "GT3" - greater than 3)
5. Pstatus - parent's cohabitation status (binary: "T" - living together or "A" - apart)
6. Medu - mother's education (numeric: 0 - none,  1 - primary education (4th grade), 2 – 5th to 9th grade, 3 – secondary education or 4 – higher education)
7. Fedu - father's education (numeric: 0 - none,  1 - primary education (4th grade), 2 – 5th to 9th grade, 3 – secondary education or 4 – higher education)
8. Mjob - mother's job (nominal: "teacher", "health" care related, civil "services" (e.g. administrative or police), "at_home" or "other")
9. Fjob - father's job (nominal: "teacher", "health" care related, civil "services" (e.g. administrative or police), "at_home" or "other")
10. traveltime - home to school travel time (numeric: 1 - <15 min., 2 - 15 to 30 min., 3 - 30 min. to 1 hour, or 4 - >1 hour)
11. studytime - weekly study time (numeric: 1 - <2 hours, 2 - 2 to 5 hours, 3 - 5 to 10 hours, or 4 - >10 hours)
12. failures - number of past class failures (numeric: n if 1<=n<3, else 4)
13. schoolsup - extra educational support (binary: yes or no)
14. famsup - family educational support (binary: yes or no)
15. paid - extra paid classes within the course subject (Math or Portuguese) (binary: yes or no)
16. activities - extra-curricular activities (binary: yes or no)
17. nursery - attended nursery school (binary: yes or no)
18. higher - wants to take higher education (binary: yes or no)
19. internet - Internet access at home (binary: yes or no)
20. famrel - quality of family relationships (numeric: from 1 - very bad to 5 - excellent)
21. freetime - free time after school (numeric: from 1 - very low to 5 - very high)
22. health - current health status (numeric: from 1 - very bad to 5 - very good)
23. absences - number of school absences (numeric: from 0 to 93)
24. G1 - marks scored in the first term (0 to 20)
25. G2 - marks scored in the second term (0 to 20)
```
## Working Demo

https://github.com/shivamchaudhary-r/SmartRoom/assets/79602168/d88e8714-33a6-4965-b371-1116bb18cd98

