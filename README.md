# SmartRoom
It is a web application which aims to provide a better monitoring and predicting student's performance in upcoming examinations using machine learning model.
This parameters required in the prediction is not restricted to the class performance only but also consider various factors which directly or indirectly can affect the student's performance. 

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
The user's of this application are teacher and student.
Features of teacher's are
1. Can monitor the student's performance prediction.
2. Can provide the student's parameters and data.
3. Can see visual representation of student predicted marks.
4. Can notify student's through email whenever predicted score is low.
5. Can see a list of weak performing student's in the class

Features of student's are
1. Can see visual representation of their scores and predicted result
2. Can see a list of top performing student's in the class

## Implementation
- The frontend was implemented using React.js, which allowed for a responsive and user-friendly interface. The application can retrieve student data, predictions and display them to the teacher in an easy-to-understand format. 
- The backend was built using SpringBoot with dependencies fulfilled by Maven. Spring Security ensured secure logins and robust authentication system. MongoDB was integrated to handle student data storage. It is a medium between frontend and ML Model and fetches the predictions from the machine learning model through an API and stores it in Database. 
- The model was trained on a dataset that included past performance, demographic, and social data for a group of students. The model was able to achieve an accuracy of 94% on the test set, and was able to correctly identify students who were at risk of performance issues. The  ML Model is exposed using an API.




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



https://user-images.githubusercontent.com/50453172/215263423-5b443617-1fd7-428d-ae8b-dbe4b74f4c48.mp4



