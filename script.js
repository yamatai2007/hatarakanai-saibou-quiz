document.addEventListener("DOMContentLoaded", function () {
    // ==============================
    // 1. グループ名入力処理
    // ==============================
    const nextButtonGroup = document.getElementById("nextButton");
    if (nextButtonGroup) {
        nextButtonGroup.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value.trim();
            if (groupName !== "") {
                localStorage.setItem("groupName", groupName);
                window.location.href = "antigen.html"; // 抗原数入力画面へ遷移
            } else {
                alert("グループ名を入力してください");
            }
        });
    }

    // ==============================
    // 2. 抗原数入力処理
    // ==============================
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const nextButtonAntigen = document.getElementById("nextButton");

    if (antigenCountInput && decreaseButton && increaseButton && nextButtonAntigen) {
        let antigenCount = localStorage.getItem("antigenCount") 
            ? parseInt(localStorage.getItem("antigenCount"), 10) 
            : 0;
        
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
            const value = parseInt(antigenCountInput.value, 10);
            antigenCount = isNaN(value) || value < 0 ? 0 : value;
        });

        nextButtonAntigen.addEventListener("click", function () {
            localStorage.setItem("antigenCount", antigenCount);
            window.location.href = "quiz_level.html"; // クイズ難易度選択へ遷移
        });

        updateDisplay();
    }

    // ==============================
    // 3. クイズ難易度選択処理
    // ==============================
    const levelButtons = document.querySelectorAll(".level-button");
    const nextButtonQuiz = document.getElementById("nextButton");

    if (levelButtons.length > 0 && nextButtonQuiz) {
        let selectedLevel = localStorage.getItem("selectedLevel") 
            ? parseInt(localStorage.getItem("selectedLevel"), 10) 
            : null;

        function updateSelection() {
            levelButtons.forEach((button) => {
                const level = parseInt(button.dataset.level, 10);
                if (level === selectedLevel) {
                    button.classList.add("selected");
                } else {
                    button.classList.remove("selected");
                }
            });
        }

        levelButtons.forEach((button) => {
            button.addEventListener("click", function () {
                selectedLevel = parseInt(this.dataset.level, 10);
                localStorage.setItem("selectedLevel", selectedLevel);
                updateSelection();
            });
        });

        nextButtonQuiz.addEventListener("click", function () {
            if (selectedLevel !== null) {
                window.location.href = "quiz.html";
            } else {
                alert("難易度を選択してください");
            }
        });

        updateSelection();
    }

    // ==============================
    // 4. 戻るボタン処理（全ページ対応）
    // ==============================
    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }
});
