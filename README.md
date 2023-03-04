# Fleap Dashboard App

This app allows you to monitor a patient's vital signs, such as heart rate, blood pressure, and oxygen saturation, for 1 minute.

# How to Use

- To start monitoring, click on the 'Start' button. The monitoring will continue for 1 minute, and you can see the vital signs data on the screen.
- You can stop monitoring anytime by clicking on the 'Stop' button. If you don't press the 'Stop' button, the monitoring will automatically stop after 1 minute.
- If you want to pause the monitoring temporarily, you can click on the 'Stop' button. When you click on 'Start' again, it will resume from where it left off.

* If you want to start the monitoring again from the beginning, you can press the 'Reset' button to clear the monitoring system.

# Task Info

Currently above app uses the regenerateData function for generating the random data for chart

```
const regenerateData = useCallback(() => {
    let newData = {
      label: 0,
      heartRate: Math.floor(Math.random() * (130 - 30) + 30),
      bloodPressure: Math.floor(Math.random() * (140 - 60) + 60),
      oxygenSaturation: Math.random() * (100 - 85) + 85,
    };

    // showing alerts for urgent alerts
    if (newData.heartRate < 60) toast.error('Urgent Alert: Heart rate below 60');
    else if (newData.heartRate > 100) toast.error('Urgent Alert: Heart rate above 100');

    if (newData.heartRate < 80) toast.error('Urgent Alert: Blood Pressure below 80');
    else if (newData.heartRate > 120) toast.error('Urgent Alert: Blood Pressure above 120');

    if (newData.oxygenSaturation < 85) toast.error('Urgent Alert: Oxygen Saturation below 85');

    setAllData((oldData) => {
      const newLabel = oldData.length * 5;
      newData.label = newLabel;
      return [newData, ...oldData];
    });
    setCurrentData(newData);
  }, []);
```

Instaed of this function we can also use api for getting data so we can change the above function as follows

```
// function when api is available
  const fetchData = useCallback(async () => {
    const res = await fetch('https://myapi.com/patient/:id/vitals');
    const newData = await res.json();

    // showing alerts for urgent alerts
    if (newData.heartRate < 60) toast.error('Urgent Alert: Heart rate below 60');
    else if (newData.heartRate > 100) toast.error('Urgent Alert: Heart rate above 100');

    if (newData.heartRate < 80) toast.error('Urgent Alert: Blood Pressure below 80');
    else if (newData.heartRate > 120) toast.error('Urgent Alert: Blood Pressure above 120');

    if (newData.oxygenSaturation < 85) toast.error('Urgent Alert: Oxygen Saturation below 85');

    setAllData((oldData) => {
      return [newData, ...oldData];
    });
    setCurrentData(newData);
  }, []);
```

# Folder Structure

```           
  ├── public  
  |── src   
  |   ├── assets                        # stores Static files      
  │   ├── components                    # components
  |   |   |── Card
  |   |   |   |── Card.js
  |   |   |   └── Card.css
  |   |   └──...
  │   ├── context                       # context for App
  |   |   └── SidebarContext.js
  │   ├── hooks                         # custom hooks
  |   |   └── useWindowDimensions.js
  │   ├── pages                         # folder to stores different pages
  |   |   |── Dashboard
  |   |   |   |── Dashboard.js
  |   |   |   └── Dashboard.css
  |   |   └──...
  │   ├── utils                         # extra utils files 
  |   |   |── getCardIcon.js
  |   |   └──...
  |   |── App.css
  |   |── App.js
  │   └── index.js   
  |── .eslintrc.json                    # config file for Eslint         
  |── .gitignore                        
  |── .prettierignore
  |── .prettierrc.json                  # config file for prettier       
  |── package.json         
  |── README.md      
  └── yarn.lock
```

# Setup

To use this app locally, you'll need to set up a basic React app on your machine. Here's how to do it:

1. First, make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/.
2. Open your terminal or command prompt clone this repo using the command :`git clone https://github.com/JayP09/fleap-dashboard-app`
3. Now change Directory to `fleap-dashboard-app`
4. Now you can install the necessary dependencies by running the following command:`npm install or yarn install`
5. Finally, you can start the development server by running: `yarn start or npm start`

This will open the app in your default browser at http://localhost:3000.

# Demo

[Demo Link](https://fleap-dashboard-app.vercel.app/)

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn lint`

Runs the linter on your codebase. A linter is a tool that analyzes your code and checks for potential errors or violations of best practices.

### `yarn format`

Runs the prettier on your codebase according to a pre-configured style.
