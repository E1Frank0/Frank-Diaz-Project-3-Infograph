// Frank Diaz, DIG 2930, Professor Kahn Mai

/* For this project, I will program fully functional charts that show the user data on a certain topic. I will be using a mix of jQuery and Chartjs to hopefully complete this project. */

// Declare a function below that will begin the jQuery coding and allows all the data to function properly.

$(function() {
    'use strict'
    // Create a variable to connect it to the first canvas element id from the DOM.
    var doughnutChart = $('.best-selling-consoles');
    
    
    // Create a variable that will display the chart onto the screen.
    var mainChart = new Chart(doughnutChart, {
        
        // Use a type property to set the chart to a Doughnut chart.
        type: 'doughnut',
        
        // Type all the data down so that the chart can display it on the dom.
        data: {
            labels: ["Playstation 2", "Nintendo DS", "Game Boy", "Playstation 1", "Nintendo Wii"],
            
            // Set up the colors and numerical data of the chart.
            datasets: [
                {
                    label: "Console Sales (millions)",
                    backgroundColor: ["#4169E1", "#FFB6C1", "#00FF7F", "#FFD700", "#00BFFF"],
                    data: [155, 154.02, 118.69, 102.49, 101.63]
                }
            ]
        },
        // Set up the title display for the chart.
        options: {
            title: {
                display: true,
                text: 'Top 5 Best Selling Game Consoles by Sales (millions)'
            }
        }
    });
    
    // Create a variable to set up the PS2 best selling games polar area chart.
    var firstPolarChart = $('.ps2-best-selling-games');
    
    var ps2GameSales = new Chart(firstPolarChart, {
        
        type: 'polarArea',
        data: {
            labels: ["Grand Theft Auto: San Andreas", "Gran Turismo 3: A-Spec", "Gran Turismo 4", "Grand Theft Auto: Vice City", "Final Fantasy X"],
            datasets: [
                {
                    label: "Playstation 2 Game Sales (millions)",
                    backgroundColor: ["#3CB371", "#B22222", "#0000CD", "#FF1493", "#EEE8AA"],
                    data: [17.33, 14.89, 11.76, 9.61, 8]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Top 5 Best Selling Playstation 2 Games (millions)'
            }
        }
    });
    
    var firstLineChart = $('.ps2-yearly-sales');
    
    var ps2YearlySales = new Chart(firstLineChart, {
        
        type: 'line',
        data: {
            labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
            datasets: [{
                data: [6.4, 24.99, 49.59, 69.49, 81.39, 101.37, 103,69, 117.89, 132, 140, 147, 153, 156.5, 158],
                label: "Playstation 2",
                borderColor: "#4169E1",
                fill: false
            }
          ]
        },
        options: {
            title: {
                display: true,
                text: 'Playstation 2 Sales by Year in Millions World Wide (As of 2013)'
            }
        }
    });
    
    var secondPolarChart = $('.ds-best-selling-games');
    
    var dsGameSales = new Chart(secondPolarChart, {
        
        type: 'polarArea',
        data: {
            labels: ["New Super Mario Bros.", "Nintendogs", "Mario Kart DS", "Brain Age", "Pokemon Diamond and Pearl"],
            datasets: [
                {
                    label: "Nintendo DS Game Sales (millions)",
                    backgroundColor: ["#87CEEB", "#FFB6C1", "#FF0000", "#FF1493", "	#FFFF00"],
                    data: [30.80, 23.96, 23.60, 19.01, 17.67]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Top 5 Best Selling Nintendo DS Games (millions)'
            }
        }
    });
    
    var secondLineChart = $('.ds-yearly-sales');
    
    var dsYearlySales = new Chart(secondLineChart, {
        
        type: 'line',
        data: {
            labels: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2016],
            datasets: [{
                data: [2.84, 14.43, 35.61, 64.79, 96.22, 125.13, 144.59, 151.06, 153.67, 153.98, 154.01, 154.02, 156.5],
                label: "Nintendo DS",
                borderColor: "#FFB6C1",
                fill: false
            }
          ]
        },
        options: {
            title: {
                display: true,
                text: 'Nintendo DS Sales by Year in Millions World Wide (As of 2016)'
            }
        }
    });
    
    var thirdPolarChart = $('.gb-best-selling-games');
    
    var gbGameSales = new Chart(thirdPolarChart, {
        
        type: 'polarArea',
        data: {
            labels: ["Tetris", "Pokemon Red, Green and Blue", "Pokemon Gold and Silver", "Super Mario Land", "Pokemon Yellow"],
            datasets: [
                {
                    label: "Game Boy Game Sales (millions)",
                    backgroundColor: ["#0000FF", "#008000", "#FFD700", "#FF0000", "#FFFF00"],
                    data: [35, 31, 23, 18, 14]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Top 5 Best Selling Game Boy Games (millions)'
            }
        }
    });
    
    var thirdLineChart = $('.gb-yearly-sales');
    
    var gbYearlySales = new Chart(thirdLineChart, {
        
        type: 'line',
        data: {
            labels: [1989, 1990, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002],
            datasets: [{
                data: [380, 1540, 3910, 2080, 3220, 3680, 2220, 1500, 1390, 3000, 4480, 8710, 7740,],
                label: "Game Boy",
                borderColor: "#00FF7F",
                fill: false
            }
          ]
        },
        options: {
            title: {
                display: true,
                text: 'Game Boy Sales by Year in Millions in North America (As of 2002)'
            }
        }
    });
    
    var fourthPolarChart = $('.ps1-best-selling-games');
    
    var ps1GameSales = new Chart(fourthPolarChart, {
        
        type: 'polarArea',
        data: {
            labels: ["Gran Turismo", "Final Fantasy VII", "Gran Turismo 2", "Tekken 3", "Harry Potter and the Philosopher's Stone"],
            datasets: [
                {
                    label: "Playstation 1 Game Sales (millions)",
                    backgroundColor: ["#B22222", "#00BFFF", "#0000CD", "#FF4500", "#800000"],
                    data: [10850, 9800, 9370, 8300, 8000]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Top 5 Best Selling Playstation 1 Games (millions)'
            }
        }
    });
    
    var fithPolarChart = $('.wii-best-selling-games');
    
    var wiiGameSales = new Chart(fithPolarChart, {
        
        type: 'polarArea',
        data: {
            labels: ["Wii Sports", "Mario Kart Wii", "Wii Sports Resort", "New Super Mario Bros. Wii", "Wii Play"],
            datasets: [
                {
                    label: "Wii Game Sales (millions)",
                    backgroundColor: ["#AFEEEE", "#0000CD", "#FFFF00", "#FF0000", "#FFA500"],
                    data: [82.83, 37.02, 33.06, 30.11, 28.02]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Top 5 Best Selling Wii Games (millions)'
            }
        }
    });
    
    var fithLineChart = $('.wii-yearly-sales');
    
    var wiiYearlySales = new Chart(fithLineChart, {
        
        type: 'line',
        data: {
            labels: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            datasets: [{
                data: [3.19, 20.13, 44.96, 67.45, 84.64, 94.97, 99.38, 100.90, 101.44, 101.63,],
                label: "Wii",
                borderColor:  "#00BFFF",
                fill: false
            }
          ]
        },
        options: {
            title: {
                display: true,
                text: 'Wii Sales by Year in Millions World Wide (As of 2016)'
            }
        }
    });
    
})



