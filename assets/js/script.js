// #region Constant declaration section

    // #region Ticket calculation

        // Defined price for 1 km
        const KM_PRICE = 0.21;

        // Defined underage age
        const UNDERAGE_AGE = 18;
        // Defined underage discount percentage
        const UNDERAGE_DISCOUNT_PERCENTAGE = 20;

        // Defined senior age
        const SENIOR_AGE = 65;
        // Defined senior discount percentage
        const SENIOR_DISCOUNT_PERCENTAGE = 40;

    // #endregion Ticket calculation

    // #region DOM elements

        // Get ticket form DOM element
        const ticketFormElement = document.getElementById('ticket-form');

        //#region Input elements
        
            // Get kilometers number input DOM element
            const kilometersNumberInputElement = document.getElementById('kilometers-number-input');

            // Get passenger age input DOM element
            const passengerAgeInputElement = document.getElementById('passenger-age-input');

            // Get passenger name input DOM element
            const passengerNameInputElement = document.getElementById('passenger-name-input');
            
            // Get passenger surname input DOM element
            const passengerSurnameInputElement = document.getElementById('passenger-surname-input');
            
            // Get submit button DOM element
            const submitButtonElement = document.getElementById('submit-button');
            
        //#endregion Input elements

        //#region Output elements

            // Get passenger name output DOM element
            const passengerNameOutputElement = document.getElementById('passenger-name-output');

            // Get passenger surname output DOM element
            const passengerSurnameOutputElement = document.getElementById('passenger-surname-output');
        
            // Get passenger age output DOM element
            const passengerAgeOutputElement = document.getElementById('passenger-age-output');

            // Get kilometers number output DOM element
            const kilometersNumberOutputElement = document.getElementById('kilometers-number-output');

            // Get applied discounts DOM element
            const appliedDiscountsElement = document.getElementById('applied-discounts');

            // Get ticket price DOM element
            const ticketPriceElement = document.getElementById('ticket-price');

        //#endregion Output elements

    // #endregion DOM elements

// #endregion Constant declaration section

// #region Script logic

    // ON form submit event
    ticketFormElement.addEventListener('submit', event => {

        // Prevent default submit behaviour
        event.preventDefault();

        // #region Ticket calculation logic

            // Get passenger entered name
            const passengerName = passengerNameInputElement.value;

            // Get passenger entered surname
            const passengerSurname = passengerSurnameInputElement.value;

            // Get passenger entered age
            const passengerAge = passengerAgeInputElement.value;

            // Get passenger entered kilometers number
            const kilometersNumber = kilometersNumberInputElement.value;

            // Set default discount to none
            let appliedDiscounts = 'nessuno';

            // Calculate total travel price
            let totalTravelPrice = kilometersNumber * KM_PRICE;

            // IF passenger age is underage
            if ( passengerAge < UNDERAGE_AGE ) {

                // Set applied discount to underage promotion
                appliedDiscounts = `minorenne (${UNDERAGE_DISCOUNT_PERCENTAGE} %)`;

                // Apply underage discount
                totalTravelPrice = totalTravelPrice - ( (totalTravelPrice / 100 ) * UNDERAGE_DISCOUNT_PERCENTAGE );

            }
            // ELSE IF passenger age is senior 
            else if ( passengerAge > SENIOR_AGE ) {

                // Set applied discount to senior promotion
                appliedDiscounts = `senior (${SENIOR_DISCOUNT_PERCENTAGE} %)`;

                // Apply senior discount
                totalTravelPrice = totalTravelPrice - ( (totalTravelPrice / 100 ) * SENIOR_DISCOUNT_PERCENTAGE );

            }

        // #endregion Ticket calculation logic

        // #region Ticket price formatting

            // Price rounding
            totalTravelPrice = totalTravelPrice.toFixed(2);

            // Price formatting for italian comma price format
            totalTravelPrice = totalTravelPrice.toString().replace('.', ',');

        // #endregion Ticket price formatting

        // #region Output section

            // Passenger name output
            passengerNameOutputElement.innerText = `Nome: ${passengerName}`;

            // Passenger surname output
            passengerSurnameOutputElement.innerText = `Cognome: ${passengerSurname}`;

            // Passenger age output
            passengerAgeOutputElement.innerText = `Età passeggero: ${passengerAge} anni`;

            // Kilometers number output
            kilometersNumberOutputElement.innerText = `Numero di km: ${kilometersNumber} km`;

            // Applied discounts output
            appliedDiscountsElement.innerText = 'Sconti applicati: ' + appliedDiscounts;

            // Price output
            ticketPriceElement.innerText = 'Prezzo totale del viaggio: ' + totalTravelPrice + " €";

        // #endregion Output section

    });

// #endregion Script logic