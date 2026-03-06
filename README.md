# CleaningCompany-app

## Project Overview
This project is a client-facing web dashboard designed for CoreCleen Solutions Ltd. 

The platform allows clients to:
- Submit cleaning service requests
- View queued requests
- Track service history
- Contact support


## Objectives
The goal was to design and implement a responsive and user-friendly dashboard interface while ensuring scalability and maintainability.


## Features Implemented

### UI/UX
- Responsive dashboard layout (Grid & Flexbox)
- Sidebar navigation
- Interactive cards
- Status badges
- Form Validation
- Dark Mode Support
- Interactive Calendar
- Dropdown Components

### Functional Features
- Service request submission form
- Query tracking system
- History page
- Contact support form
- Form Validation


## Technologies Used
- HTML5
- Tailwind CSS3 (Flexbox & Grid)
- React JavaScript (TypeSCript)
- Figma (Design & Prototyping)
- shadcn/ui (Provided pre-built UI components)
- date-fns (Used for formatting and managing dates in the calendar component)
- Git and GitHub

## Project Structure

CleaningCompany-app/
  src
   |___app
      └──components
         ├── figma
         ├── ui
         └── apply-service.tsx
         └── contact-support.tsx
         └── dashboard-layout.tsx
         └── dashboard-overview.tsx
         └── etc
    
   ├── assets
         └── logo.png
   ├── styles 
      └── fonts.css
      └── tailwind.css
      └── index.css
      └── theme.css
 
   ├── main.tsx
 ├── index.html
 ├── README.md
 ├── package.json

## Responsiveness
The layout adapts across:
- Desktop
- Tablet
- Mobile devices

## Interactive Elements
- Button hover animations
- Form validation using JavaScript
- Dynamic status badge styling


# Usability Testing & Feedback

A small usability test was conducted using simulated users interacting with the interface.

### Issue 1: Poor Text Visibility in Dark Mode
Some form labels and text  were difficult to read in dark mode.

**Solution**
Updated Tailwind classes to include dark mode variants.


### Issue 2: Dropdown Text Overlapping
Dropdown menu items appeared cluttered and overlapped with surrounding content.

**Solution**
Improved spacing and contrast.



### Issue 3: Calendar Closing Too Quickly
The calendar picker initially closed immediately when clicked, making date selection difficult.

**Solution**
Adjusted so the calendar remains open until a date is selected.


# Collaboration With Back-End Developers

How I Collaborate with back-end developers during handoff

Key practices include:
- Clear explanation of the logic used for frontend and how backend can integrate with frontend functionality
- Explaint to them authentication and access rights
- Clearly defining API endpoints for service booking submissions
- Documenting expected request and response formats
- Testing API responses



# Handling Client Feedback

How I incorporate client feedback while maintaining design integrity

Changes are evaluated based on:
- usability improvements
- consistency with the overall design system
- technical feasibility
- feedback is implemented without compromising usability principles such as accessibility, readability, and responsive design.


# Known Limitations

- This version is front-end only and does not connect to a live backend.
- Form submissions are currently simulated.
- Authentication and user accounts are not implemented.
- All the statistics, names and data used showed in the user interface are place holders
- No email confirmations for signup. login and forgot password
- No admin login



## Author
Blessing Nagaba 
BSc. Software Engineering  
Design Engineer Assessment – Kanzu Code

## Figma design files

Check out the [Figma prototype](https://www.figma.com/make/FKO1jmz0QBNr3b5M56naRP/CleaningCompany-app?fullscreen=1&t=DHr51GyKnUJ9eJmu-1) 

Check out the [Figma desktop and mobile design wireframe](https://www.figma.com/make/FKO1jmz0QBNr3b5M56naRP/CleaningCompany-app?t=wjNldFWTKNrVWIjR-1)

## How to run

To get started with the CleaningCompany app, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/NagabaBlessing/CleaningCompany-app.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd CleaningCompany-app
    ```

3. **Install the required dependencies:**
    ```bash
    npm install
    ```

4. **Start the application:**
    ```bash
    npm run dev
    ```

## Usage

After starting the application, you can access it at `http://localhost:5174/`

