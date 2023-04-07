# Netflix Survey Form
This is a simple survey form built with HTML and CSS as part of the [freeCodeCamp](https://www.freecodecamp.org/) curriculum for the Responsive Web Design Certification. The survey form is designed to gather feedback from users about their experience with the Netflix streaming service.

## ✨ Features
The survey form includes the following features:
* A variety of input fields to collect different types of feedback, such as multiple choice questions, text fields, and dropdown menus.
* A responsive design that adapts to different screen sizes, from desktop to mobile.
* Validation of user input to ensure that required fields are filled out correctly, including email format, number format, and number range.
* Clear labels and placeholder texts to guide the user through the form.
* A submit button to submit the completed form.
* Personalized CSS styling to give the form a unique look and feel.

## ⚙️ Instalation
To install the Netflix Survey Form project, follow these steps:

1. Fork the project from [this repository](https://github.com/larissasoarre/NetflixSurveyForm).
2. Clone the forked repository to your local machine using the command 'git clone'.
3. Open the index.html file in your web browser to view the survey.

## 🌐 Usage
To use the Netflix Survey Form project, follow these steps:

1. Open the index.html file in your web browser to view the survey.
2. Fill in the fields in the survey form, including your name, email address, age, weekly Netflix usage, satisfaction with movie selection, and devices used to watch Netflix.
3. Select any checkboxes that apply to the devices you use to watch Netflix.
4. Enter any suggestions or feedback about Netflix content in the comments box.
5. Click the "Submit" button to submit your survey response.

Important notes:

* All fields marked with an asterisk (*) are required.
* The form of the project does not have an action attribute specified in the form tag. This means that upon submission of the form, the data will not be sent to a server-side script or backend application.

## 👥 User Stories
In order for the project to be acepted, it had to fullfil the following user stories:

1. There is a page title in an h1 element with an id of title.*
2. There is have a short explanation in a p element with an id of description.
3. There is have a form element with an id of survey-form.
4. Inside the form element, the user is required to enter their name in an input field that has an id of name and a type of text.
5. Inside the form element, the user is required to enter their email in an input field that has an id of email.
6. If the user enter an email that is not formatted correctly, the user will see an HTML5 validation error.
7. Inside the form, the user can enter a number in an input field that has an id of number.
8. The number input should not accept non-numbers, either by preventing the user from typing them or by showing an HTML5 validation error (depends on the browser).
9. If the user enter numbers outside the range of the number input, which are defined by the min and max attributes, the user will see an HTML5 validation error.
10. For the name, email, and number input fields, there is a corresponding label elements in the form, that describe the purpose of each field with the following ids: id="name-label", id="email-label", and id="number-label".
11. For the name, email, and number input fields, there is a placeholder text that gives a description or instructions for each field.
12. Inside the form element, there is a select dropdown element with an id of dropdown and at least two options to choose from.
13. Inside the form element, the user can select an option from a group of at least two radio buttons that are grouped using the name attribute.
14. Inside the form element, the user can select several fields from a series of checkboxes, each of which must have a value attribute.
15. Inside the form element, the user is presented with a textarea for additional comments.
16. Inside the form element, the user is presented with a button with id of submit to submit all the inputs.

***Note for the item 1:** After completing the project, I decided to replace the text-based company name in the h1 tag with the Netflix logo, as it improved the visual appeal of the page.

## 🧾 License
This project is licensed under the MIT License.

## 🥰 Acknowledgements
Thanks to [freeCodeCamp](https://www.freecodecamp.org/) for providing the curriculum and guidance for this project.