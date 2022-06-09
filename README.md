<div align="center">
  <h1> Burger Queen Api Client </h1>
</div>

## Contents

* [1. Project description](#1-project-description)
* [2. Tech stack](#2-tech-stack)
* [3. User stories](#3-user-stories)
* [4. High fidelity prototypes](#4-high-fidelity-prototypes)
* [5. Usability tests](#5-usability-tests)
* [6. Deployed project](#6-deployed-project)
* [7. Authors](#7-authors)

## 1. Project description

This project is a *single page application* made with *React* for a small hamburger restaurant by the name of Burger Queen. Our application allows the management of different aspects of the restaurant based on the several roles an user can have, helping them to perform their assigned tasks. 

The roles we worked with are:
 
* **Manager:** Person in charge of keeping track of the employees, delete them or add new hires. They can also add, delete or edit any of the products in the menu.
* **Waiter:** They can take new orders, edit them and send them to the kitchen to be prepared. The waiter can access the "active orders" screen, where they will see the set of orders that have been served but not charged, or those that are ready to be served, once the kitchen marks them as such, and mark them as delivered after they have brought them to their respective clients. 
* **Chef:** The people working in the kitchen can see a list of orders that have been received and need to be cooked, can mark them as "ready" once they have been prepared, and can consult how long did it take to prepare them for optimization purposes. 

Our application is designed to be used on tablet devices, that's why we approached its design with a mobile-first perspective. 

## 2. Tech stack

<div align="center">
<a title="ReactJs" href="https://es.reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></a>
<a title="ReactRouter" href="https://es.reactjs.org/"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"></a>
<a title="JavaScript" href="https://developer.mozilla.org/es/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></a>
<a title="CSS" href="https://developer.mozilla.org/es/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></a>
<a title="Jest" href="https://jestjs.io/"><img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"></a>
<a title="Eslint" href="https://eslint.org/"><img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"></a>
<a title="Figma" href="https://www.figma.com/file/9Lkk5oAp6M3n7qUvPnAPDb/Burger-Queen?node-id=0%3A1/"><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"></a>
</div>

## 3. User stories

In order to complete this project, the following user stories were solved:

![user-stories](https://github.com/ziomarajimenez/CDMX012-burger-queen-api-client/blob/main/src/assets/user-stories.PNG)

## 4. High fidelity prototypes

Having the user stories in mind, we created high fidelity prototypes in which we wanted to portray an easy to understand interface and provide our users an optimal work flow. This prototypes were key to develop the project.

![prototypes](https://github.com/ziomarajimenez/CDMX012-burger-queen-api-client/blob/main/src/assets/prototypes.png)

## 5. Usability tests
During the development, three usability tests were made and, based on these, the project was adapted to be more user-friendly.

### 5.1 User Story 1

Testing: 
- The user is able to log in with email and password.
- The user can understand the error messages, and correct their mistakes.

Feedback:
- Users wanted to see more descriptive error messages (e. g., what was causing the error, what could you do to fix it).
- Change of color from the error messages, from black to red.

### 5.2 User Story 2 and 4

Testing:
- The user can annotate the table’s number.
- The user can add and delete products to an order.
- The user can see a summary and total purchase.
- The user can edit the order.
- The user can send order to kitchen.
- The user can see the orders ready to be served and the ones delivered.

Feedback:
- Users wanted to be redirected to the main screen by clicking on the logo.
- In the order summary, users wanted to see a description of said order (quantity, product and price).
- Bigger letter size in 'Verify order' screen.

### 5.3 User Story 3, 5 and 6

Testing:
- The user can mark an order ready to serve.
- The user can check how long did it take to prepare it.
- The user can see a list of all their employees.
- The user can add an employee, edit it and delete it.
- The user can see a list of all their products.
- The user can add a product, edit and delete it.

Feedback:
- Placeholders on forms can be confusing to the user.
- Users expect to be able to edit their profile when clicking on the profile logo, not just to log out.

## 6. Deployed project

### 6.1 Log in screen

![Log in](./src/assets/LogInView.png)

### 6.2 Waiter screens

![Waiter main screen](./src/assets/WaiterFirstView.png)

![Waiter order screen](./src/assets/WaiterOrderView.png)

![Waiter verify order screen](./src/assets/WaiterVerifyOrder.png)

![Waiter active orders screen](./src/assets/WaiterActiveOrders.png)

### 6.3 Chef screens

![Chef orders screen](./src/assets/ChefOrders.png)

![Chef prepared orders screen](./src/assets/ChefPrepared.png)

### 6.4 Administrator screens

![Admin employees screen](./src/assets/AdminEmployees.png)

![Admin products screen](./src/assets/AdminProducts.png)

## 7. Authors

| Developers | Contact |
| ------------- | ------------- |
| Perla Del Ángel | [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/perdelangel/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PerlaDelAngel) |
| Ziomara Jiménez | [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ziomarajimenez/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ziomarajimenez) |
| Ma. Isabela Huitrón | [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maisahr/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/maisahr) |