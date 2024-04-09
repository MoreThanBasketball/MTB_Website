var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth(); 

document.addEventListener("DOMContentLoaded", function () {
    displayCalendar(currentYear, currentMonth);
});

function displayCalendar(year, month) {
    var calendarContainer = document.getElementById("calendar-container");
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDayOfMonth = new Date(year, month, 1).getDay();

    document.getElementById("month-year-display").innerText = getMonthName(month) + " " + year;

    var table = document.createElement("table");
    var headerRow = table.createTHead().insertRow(0);

    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (var i = 0; i < daysOfWeek.length; i++) {
        var cell = headerRow.insertCell(i);
        cell.innerHTML = daysOfWeek[i];
    }

    var date = 1;
    for (var i = 0; i < 6; i++) {
        var row = table.insertRow(i + 1);
        for (var j = 0; j < 7; j++) {
            var cell = row.insertCell(j);
    
            if (i === 0 && j < firstDayOfMonth) {
                cell.innerHTML = "";
            } else if (date <= daysInMonth) {
                var dateCell = document.createElement("div");
                dateCell.innerHTML = date;
    
                dateCell.addEventListener("click", function () {
                    var selectedDate = this.innerHTML;
                    document.getElementById("selected-date").innerText = selectedDate;
                    showTimeSlots();
                    showInfoBox(this);
                });
    
                cell.appendChild(dateCell);
                date++;
            }
        }
    }
    

    calendarContainer.innerHTML = "";
    calendarContainer.appendChild(table);
}

function showTimeSlots() {
    document.getElementById("selected-info").style.display = "block";
}

function changeMonth(change) {
    currentMonth += change;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    displayCalendar(currentYear, currentMonth);
}

function getMonthName(month) {
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
}

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    bookTimeSlot();
});

function bookTimeSlot() {
    var selectedDate = document.getElementById("selected-date").innerText;
    var fullName = document.getElementById("full-name").value;
    var organization = document.getElementById("organization").value;
    var email = document.getElementById("email").value;
    var startTime = document.getElementById("start-time").value;
    var endTime = document.getElementById("end-time").value;

    var bookedSlot = document.createElement("div");
    bookedSlot.className = "booked-slot";
    bookedSlot.innerHTML = startTime + " - " + endTime + "<br>" + organization;
    document.getElementById("calendar-container").querySelector(":contains('" + selectedDate + "')").appendChild(bookedSlot);

    document.getElementById("selected-info").style.display = "none";
}

function closeInfoBox() {
    document.getElementById("selected-info").style.display = "none";
}
function showInfoBox(selectedDateElement) {
    var infoBox = document.getElementById("selected-info");
    var selectedDateRect = selectedDateElement.getBoundingClientRect();

 
    var infoBoxTop = selectedDateRect.bottom + 5; 
    var infoBoxLeft = selectedDateRect.left + (selectedDateRect.width / 2) - (infoBox.offsetWidth / 2);

  
    var maxLeft = document.documentElement.clientWidth - infoBox.offsetWidth;
    if (infoBoxLeft < 0) {
        infoBoxLeft = 0;
    } else if (infoBoxLeft > maxLeft) {
        infoBoxLeft = maxLeft;
    }
    infoBox.style.display = "block";
    infoBox.style.position = "absolute";
    infoBox.style.top = infoBoxTop + "100px"; 
    infoBox.style.left = infoBoxLeft + "px";
    infoBox.style.transform = "translateY(30px)"; 
}














