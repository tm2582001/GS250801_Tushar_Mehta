## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/tm2582001/GS250801_Tushar_Mehta.git
   cd GS250801_Tushar_Mehta
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Features and Implementation Highlights

### 1. Interactive Data Grid Implementation

The application uses AG Grid to display data in a highly interactive and customizable manner. Features include:

- Sortable and filterable columns
- Row deletion functionality
- Custom cell renderers
- Auto-height adjustment

This demonstrates proficiency in integrating and extending complex third-party libraries to meet specific requirements.

### 2. Data Visualization

The Chart component shows a robust implementation of data visualization using Recharts:

- Combined chart types (bar and line) on a single view
- Multi-axis visualization showing different but related metrics
- Formatted tooltips for better user experience
- Responsive design that adapts to container size

This showcases advanced data presentation skills and the ability to create intuitive visualizations for complex data.


### 3. Component Architecture

The project follows a clean and maintainable component structure:

- Reusable components with proper typing
- Clear separation of concerns
- Consistent styling approach
- Conditional rendering based on state

This shows proficiency in designing scalable React applications with well-organized code.

### 4. Styling and UI/UX

The application uses Tailwind CSS for styling:

- Responsive design that works across device sizes
- Consistent visual language throughout the application
- Interactive elements with appropriate feedback
- Accessibility considerations in color and contrast

This highlights the ability to create polished, professional user interfaces with attention to detail.

## File Structure

- **/src/components** - all the reusable components that can be use with other components
- **/src/route** - contains components which will be displayed on a perticular route
- **/src/store** - contains code for redux library
- **/src/utils** - all the utility files for the project
- **/src/assets** - contains all the static files.


## Things I will improve 
- add dragable components for store page
- add logic to insert and update data 