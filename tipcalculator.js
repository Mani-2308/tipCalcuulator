function calculateButton() {
    let billAmount = document.getElementById("billAmount").value;
    let percentageTip = document.getElementById("percentageTip").value;

    if (billAmount === "") {
        document.getElementById("errorMessage").textContent = "please Enter a Valid Input.";
    } else if (percentageTip === "") {
        document.getElementById("errorMessage").textContent = "please Enter a Valid Input.";
    } else {
        let billAmount = document.getElementById("billAmount").value;
        let percentageTip = document.getElementById("percentageTip").value;
        let calculatedTip = (parseInt(percentageTip) / 100) * parseInt(billAmount);
        let totalAmount = parseInt(billAmount) + parseInt(calculatedTip);
        document.getElementById("tipAmount").value = calculatedTip;
        document.getElementById("totalAmount").value = totalAmount;
        document.getElementById("errorMessage").textContent = "";
    }
}