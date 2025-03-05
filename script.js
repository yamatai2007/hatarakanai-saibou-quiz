document.addEventListener("DOMContentLoaded", function () {
    // ==============================
    // 1. グループ名入力の処理
    // ==============================
    const nextButtonGroup = document.getElementById("nextButton");
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

    // ==============================
    // 2. 抗原数入力の処理
    // ==============================
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");

    if (antigenCountInput && decreaseButton && increaseButton) {
        let antigenCount = 0;

        function updateDisplay() {
            antigenCountInput.value = antigenCount;
        }

        decreaseButton.addEventListener("click", function () {
            if (antigenCount > 0) {
                antigenCount--;
                updateDisplay();
            }
        });

        increaseButton.addEventListener("click", function () {
            antigenCount++;
            updateDisplay();
        });

        antigenCountInput.addEventListener("input", function () {
            let value = parseInt(antigenCountInput.value);
            antigenCount = isNaN(value) ? 0 : Math.max(0, value);
        });

        updateDisplay();
    }

    // ==============================
    // 3. クイズ難易度選択の処理
    // ==============================
    const difficultyButtons = document.querySelectorAll(".difficulty");
    if (difficultyButtons.length > 0) {
        difficultyButtons.forEach(button => {
            button.addEventListener("click", function () {
                difficultyButtons.forEach(btn => btn.classList.remove("selected"));
                this.classList.add("selected");
                localStorage.setItem("selectedDifficulty", this.getAttribute("data-level"));
            });
        });

        let savedDifficulty = localStorage.getItem("selectedDifficulty");
        if (savedDifficulty) {
            let selectedButton = document.querySelector(`.difficulty[data-level="${savedDifficulty}"]`);
            if (selectedButton) {
                selectedButton.classList.add("selected");
            }
        }
    }

    // ==============================
    // 4. 戻るボタンの処理
    // ==============================
    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }
});
