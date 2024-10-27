// Show specific sections
function showSavingsTracker() {
    document.getElementById("savings-section").classList.remove("hidden");
    document.getElementById("investment-section").classList.add("hidden");
    document.getElementById("retirement-section").classList.add("hidden");
}

function showInvestmentSuggestions() {
    document.getElementById("savings-section").classList.add("hidden");
    document.getElementById("investment-section").classList.remove("hidden");
    document.getElementById("retirement-section").classList.add("hidden");
    showInvestmentAdvice();
}

function showRetirementPlanner() {
    document.getElementById("savings-section").classList.add("hidden");
    document.getElementById("investment-section").classList.add("hidden");
    document.getElementById("retirement-section").classList.remove("hidden");
}

// Enhanced Savings Goal Calculation
function calculateSavingsProgress() {
    const goalAmount = parseFloat(document.getElementById("goal-amount").value);
    const currentSavings = parseFloat(document.getElementById("current-savings").value);
    const monthlyContribution = parseFloat(document.getElementById("monthly-contribution").value);

    if (isNaN(goalAmount) || isNaN(currentSavings) || isNaN(monthlyContribution)) {
        alert("Please enter valid numbers for your savings goal, current savings, and monthly contribution.");
        return;
    }

    const progress = (currentSavings / goalAmount) * 100;
    let remainingAmount = goalAmount - currentSavings;
    let monthsToGoal = remainingAmount / monthlyContribution;

    const resultText = document.getElementById("savings-result-text");
    if (progress >= 100) {
        resultText.innerText = "Congratulations! You’ve reached your savings goal.";
    } else {
        resultText.innerText = `You have saved ${progress.toFixed(2)}% of your goal. At your current rate of $${monthlyContribution.toFixed(2)} per month, it will take you approximately ${Math.ceil(monthsToGoal)} months to reach your goal.`;
    }

    document.getElementById("savings-result").classList.remove("hidden");
}

// Investment Suggestions Based on Risk Tolerance
function showInvestmentAdvice() {
    let riskTolerance = prompt("What is your risk tolerance? (conservative, moderate, aggressive)").toLowerCase();
    const suggestionText = document.getElementById("investment-suggestion-text");

    if (riskTolerance === "conservative") {
        suggestionText.innerText = "Conservative Option: Consider investing in bonds, high-interest savings accounts, and low-risk mutual funds.";
    } else if (riskTolerance === "moderate") {
        suggestionText.innerText = "Moderate Option: A balanced portfolio with a mix of stocks, bonds, and index funds can give you moderate returns with limited risk.";
    } else if (riskTolerance === "aggressive") {
        suggestionText.innerText = "Aggressive Option: For high returns, consider investing in stocks, ETFs, and high-risk, high-reward options.";
    } else {
        suggestionText.innerText = "Invalid input. Please specify 'conservative', 'moderate', or 'aggressive' for risk tolerance.";
    }
}

// Enhanced Retirement Goal Calculation
function calculateRetirementGoal() {
    const monthlyIncome = parseFloat(document.getElementById("monthly-income").value);
    const yearsInRetirement = parseFloat(document.getElementById("years-retirement").value);
    const inflationRate = parseFloat(document.getElementById("inflation-rate").value) / 100;

    if (isNaN(monthlyIncome) || isNaN(yearsInRetirement) || isNaN(inflationRate)) {
        alert("Please enter valid numbers for monthly income, years in retirement, and expected inflation rate.");
        return;
    }

    const retirementGoal = monthlyIncome * 12 * yearsInRetirement;
    const adjustedGoal = retirementGoal * Math.pow(1 + inflationRate, yearsInRetirement);

    document.getElementById("retirement-result-text").innerText = `To retire comfortably with an inflation adjustment, you need approximately $${adjustedGoal.toLocaleString()} saved.`;
    document.getElementById("retirement-result").classList.remove("hidden");
}

