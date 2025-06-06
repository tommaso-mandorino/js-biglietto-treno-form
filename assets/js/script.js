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

        // Get kilometers number DOM element
        const kilometersNumberElement = document.getElementById('kilometers-number');

        // Get age DOM element
        const ageElement = document.getElementById('age');

        // Get submit button DOM element
        const submitButtonElement = document.getElementById('submit-button');

    // #endregion DOM elements

// #endregion Constant declaration section

// #region Script logic

    // ON form submit event
    ticketFormElement.addEventListener('submit', event => {

        // Prevent default submit behaviour
        event.preventDefault();

        // #region Ticket calculation logic

            // Get user entered kilometers number
            const kilometersNumber = kilometersNumberElement.value;

            // Get user entered age
            const age = ageElement.value;

            // Calculate total travel price
            let totalTravelPrice = kilometersNumber * KM_PRICE;

            // IF passenger age is underage
            if ( age < UNDERAGE_AGE ) {

                // Apply underage discount
                totalTravelPrice = totalTravelPrice - ( (totalTravelPrice / 100 ) * UNDERAGE_DISCOUNT_PERCENTAGE );

            }
            // ELSE IF passenger age is senior 
            else if ( age > SENIOR_AGE ) {

                // Apply senior discount
                totalTravelPrice = totalTravelPrice - ( (totalTravelPrice / 100 ) * SENIOR_DISCOUNT_PERCENTAGE );

            }

        // #endregion Ticket calculation logic

        // #region Output section

            // Price rounding
            totalTravelPrice = totalTravelPrice.toFixed(2);

            // Price formatting for italian comma price format
            totalTravelPrice = totalTravelPrice.toString().replace('.', ',');

            // Price output
            console.log('Il prezzo totale del viaggio è di: ' + totalTravelPrice + " €");

        // #endregion Output section

    });

// #endregion Script logic