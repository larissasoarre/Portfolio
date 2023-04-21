# Markdown Language Guide
Introducing the Markdown Language Guide - your ultimate resource for creating technical documentation. This website project provides a comprehensive guide to the Markdown language, offering a cheatsheet and detailed explanations of its syntax and formatting options. Whether you're a beginner or an experienced developer, this guide will help you create professional-looking documentation that is clear, concise, and easy to read.

This website was built as part of the [freeCodeCamp](https://www.freecodecamp.org/) curriculum for the Responsive Web Design Certification.

Curious? Click [here](https://larissasoares.com/projects/markdown%20technical%20documentation/) to access the page.

## ✨ Features
The guide includes the following features:
* Interactive Cheatsheet that provides quick access to Markdown syntax and formatting options. You are able to click on any feature in the table of contents to learn more about it.
* In-Depth Explanations of each Markdown feature, including step-by-step instructions on how to use them effectively. This will help you understand the syntax and formatting options in detail.
* Examples and Best Practices for using Markdown in technical documentation. It helps you to see how different features can be combined to create professional-looking documentation.
* A user-friendly interface with a clear table of contents that makes it easy for you to navigate to the section you need. You are able to easily move between sections without getting lost.

## ⚙️ Instalation
To use the Markdown Guide project, follow these steps:

1. Fork the project from [this repository](https://github.com/larissasoarre/MarkdownGuide).
2. Clone the forked repository to your local machine using the command `git clone`.
3. Open the index.html file in your web browser to view the project.

## 👥 User Stories
In order for the project to be acepted, it had to fullfil the following user stories:

1. There is a main element with a corresponding `id="main-doc"`, which contains the page's main content (technical documentation).
2. Within the `#main-doc` element, there are several section elements, each with a class of `main-section`. There should be a minimum of five.
3. The first element within each `.main-section` should be a `header` element, which contains text that describes the topic of that section.
4. Each section element with the class of `main-section` should also have an `id` that corresponds with the text of each header contained within it. Any spaces should be replaced with underscores (e.g. The section that contains the header "JavaScript and Java" should have a corresponding `id="JavaScript_and_Java"`).
5. The `.main-section` elements should contain at least ten `p` elements total (not each).
6. The `.main-section` elements should contain at least five `code` elements total (not each).
7. The `.main-section` elements should contain at least five `li` items total (not each).
8. There is a `nav` element with a corresponding `id="navbar"`.
9. The `navbar` element should contain one `header` element which contains text that describes the topic of the technical documentation.
10. The navbar should contain link `a` elements with the class of `nav-link`. There should be one for every element with the class `main-section`.
11. The `header` element in the `#navbar` must come before any link `a` elements in the navbar.
12. Each element with the class of `nav-link` should contain text that corresponds to the header text within each section (e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world").
13. When you click on a `navbar` element, the page should navigate to the corresponding section of the `#main-doc` element (e.g. If you click on a `.nav-link` element that contains the text "Hello world", the page navigates to a `section` element with that id, and contains the corresponding header).
14. On regular sized devices (laptops, desktops), the element with `id="navbar"` should be shown on the left side of the screen and should always be visible to the user.
15. The technical documentation should use at least one media query.

## 🧾 License
This project is licensed under the MIT License.

## 🥰 Acknowledgements
Thanks to [freeCodeCamp](https://www.freecodecamp.org/) for providing the curriculum and guidance for this project.