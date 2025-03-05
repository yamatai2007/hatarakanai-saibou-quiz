document.addEventListener("DOMContentLoaded", function () {
    // スタートボタン
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html";
        });
    }

    // グループ名入力
    const nextButtonGroup = document.getElementById("nextButtonGroup");
    if (nextButtonGroup) {
        nextButtonGroup.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value;
            if (groupName.trim() !== "") {
                localStorage.setItem("groupName", groupName);
                window.location.href = "antigen.html";
            } else {
                alert("グループ名を入力してください");
            }
        });
    }

    // 抗原数入力
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const nextButtonAntigen = document.getElementById("nextButtonAntigen");

    if (antigenCountInput && decreaseButton && increaseButton && nextButtonAntigen) {
        let antigenCount = 0;

        function updateDisplay() {
            antigenCountInput.value = antigenCount;
        }

        decreaseButton.addEventListener("click", function () {
            if (antigenCount > 0) antigenCount--;
            updateDisplay();
        });

        increaseButton.addEventListener("click", function () {
            antigenCount++;
            updateDisplay();
        });

        antigenCountInput.addEventListener("input", function () {
            let value = parseInt(antigenCountInput.value, 10);
            antigenCount = isNaN(value) || value < 0 ? 0 : value;
            updateDisplay();
        });

        nextButtonAntigen.addEventListener("click", function () {
            localStorage.setItem("antigenCount", antigenCount);
            window.location.href = "quiz_level.html";
        });

        updateDisplay();
    }
});
