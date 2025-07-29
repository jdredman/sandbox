/**
 * Debt Snowball Calculator
 * 
 * This script animates a timeline visualization showing how additional payments
 * can accelerate debt payoff dates.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Configuration (could be moved to a config object for easier maintenance)
    const CONFIG = {
        colors: {
            primary: '#0073b9',
            inactive: '#d5d9db'
        },
        timeline: {
            baselineStartPos: 50,   // Initial position (%)
            baselineEndPos: 80,     // Maximum right position (%)
            acceleratedStartPos: 25, // Initial position after animation (%)
            acceleratedEndPos: 15,   // Minimum left position (%)
            animationDuration: 500   // Animation duration in ms
        },
        payoff: {
            baselineMonths: 65,     // Months to payoff with minimum payments
            minAcceleratedMonths: 20, // Minimum months with max additional payment
            maxSliderValue: 1000     // Maximum slider value
        }
    };
    
    // DOM elements
    const elements = {
        slider: document.getElementById('payment-slider'),
        payment: document.getElementById('additional-payment'),
        baselineProgress: document.querySelector('.baseline-progress'),
        acceleratedProgress: document.querySelector('.accelerated-progress'),
        baselineMarker: document.querySelector('.marker.baseline'),
        acceleratedMarker: document.querySelector('.marker.accelerated'),
        acceleratedDate: document.querySelector('.marker.accelerated .marker-date')
    };
    
    // State tracking
    let state = {
        baselineAnimated: false,
        currentAcceleratedMonths: CONFIG.payoff.baselineMonths - 32, // Initial value (Mar 2028)
        currentSliderValue: 0
    };
    
    // Initialize UI
    function init() {
        // Set initial positions
        elements.baselineMarker.style.left = `${CONFIG.timeline.baselineStartPos}%`;
        elements.baselineProgress.style.width = `${CONFIG.timeline.baselineStartPos}%`;
        
        // Initialize slider and input
        updateSliderFill(0);
        
        // Add event listener
        elements.slider.addEventListener('input', handleSliderInput);
    }
    
    // Handle slider input changes
    function handleSliderInput() {
        const value = parseInt(this.value);
        updateUI(value);
    }
    
    // Update slider's filled area
    function updateSliderFill(value) {
        const progress = (value / CONFIG.payoff.maxSliderValue) * 100;
        elements.slider.style.setProperty('--progress', `${progress}%`);
    }
    
    // Update payment display with animation
    function updatePaymentDisplay(value) {
        elements.payment.value = '$' + value.toLocaleString();
        animateElement(elements.payment);
    }
    
    // Helper to animate an element
    function animateElement(element) {
        element.classList.add('animate-number');
        setTimeout(() => {
            element.classList.remove('animate-number');
        }, CONFIG.timeline.animationDuration);
    }
    
    // Reset UI to initial state
    function resetUI() {
        if (!state.baselineAnimated) return;
        
        // Reset baseline marker and progress
        elements.baselineMarker.style.left = `${CONFIG.timeline.baselineStartPos}%`;
        elements.baselineMarker.classList.remove('animated');
        elements.baselineProgress.style.width = `${CONFIG.timeline.baselineStartPos}%`;
        elements.baselineProgress.style.backgroundColor = CONFIG.colors.primary;
        
        // Hide accelerated elements
        elements.acceleratedMarker.classList.remove('visible');
        elements.acceleratedProgress.style.opacity = '0';
        
        // Reset state
        state.baselineAnimated = false;
    }
    
    // Perform initial animation when value > 0
    function initialAnimation() {
        if (state.baselineAnimated) return;
        state.baselineAnimated = true;
        
        // Animate baseline marker and progress
        elements.baselineMarker.style.left = '75%';
        elements.baselineProgress.style.backgroundColor = CONFIG.colors.inactive;
        elements.baselineMarker.classList.add('animated');
        
        // Show accelerated marker and progress
        elements.acceleratedProgress.style.opacity = '1';
        elements.acceleratedProgress.style.width = `${CONFIG.timeline.acceleratedStartPos}%`;
        elements.acceleratedMarker.style.left = `${CONFIG.timeline.acceleratedStartPos}%`;
        elements.acceleratedMarker.classList.add('visible');
    }
    
    // Update positions based on slider value
    function updatePositions(value) {
        // Calculate percentage of max payment (0-100%)
        const paymentPercentage = value / CONFIG.payoff.maxSliderValue;
        
        // Calculate new positions
        const newBaselinePos = 75 + (paymentPercentage * (CONFIG.timeline.baselineEndPos - 75));
        const newAcceleratedPos = CONFIG.timeline.acceleratedStartPos - 
                                 (paymentPercentage * (CONFIG.timeline.acceleratedStartPos - CONFIG.timeline.acceleratedEndPos));
        
        // Update progress bar widths and marker positions
        elements.baselineProgress.style.width = `${newBaselinePos}%`;
        elements.acceleratedProgress.style.width = `${newAcceleratedPos}%`;
        elements.baselineMarker.style.left = `${newBaselinePos}%`;
        elements.acceleratedMarker.style.left = `${newAcceleratedPos}%`;
    }
    
    // Update accelerated payoff date based on additional payment
    function updatePayoffDate(value) {
        // Calculate months to payoff based on additional payment
        const monthsReduction = (value / CONFIG.payoff.maxSliderValue) * 45; // 45 = max months reduction
        const newMonths = Math.max(CONFIG.payoff.minAcceleratedMonths, 
                                  CONFIG.payoff.baselineMonths - monthsReduction);
        
        // Only update if months changed significantly (rounded to nearest month)
        const roundedNewMonths = Math.round(newMonths);
        if (Math.round(state.currentAcceleratedMonths) !== roundedNewMonths) {
            const newDate = calculateNewDate(roundedNewMonths);
            elements.acceleratedDate.textContent = newDate;
            animateElement(elements.acceleratedDate);
            state.currentAcceleratedMonths = newMonths;
        }
    }
    
    // Calculate a human-readable date from number of months
    function calculateNewDate(months) {
        const date = new Date(2025, 6); // July 2025 (0-indexed month)
        date.setMonth(date.getMonth() + Math.round(months));
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
    
    // Main function to update the UI based on slider value
    function updateUI(value) {
        // Store current value
        state.currentSliderValue = value;
        
        // Update slider fill and payment display
        updateSliderFill(value);
        updatePaymentDisplay(value);
        
        // Handle reset or continue with animation
        if (value === 0) {
            resetUI();
            return;
        }
        
        // Initial animation when moving from 0
        if (!state.baselineAnimated) {
            initialAnimation();
        }
        
        // Update positions and dates
        updatePositions(value);
        updatePayoffDate(value);
    }
    
    // Initialize the calculator
    init();
    
    // For potential testing or external access
    return {
        updateUI,
        getState: () => ({ ...state }) // Return copy of state for inspection
    };
});
