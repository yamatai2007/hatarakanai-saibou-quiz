document.addEventListener("DOMContentLoaded", function () {
    // ==============================
    // 1. ゲームスタート画面の処理
    // ==============================
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html";
        });
    }

    // ==============================
    // 2. グループ名入力の処理
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
    // 3. 抗原数入力の処理
    // ==============================
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");

    if (antigenCountInput && decreaseButton && increaseButton) {
        let antigenCount = parseInt(antigenCountInput.value);

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
            antigenCount = parseInt(antigenCountInput.value) || 0;
        });

        updateDisplay();
    }

    // ==============================
    // 4. クイズ難易度選択の処理
    // ==============================
    const levelButtons = document.querySelectorAll(".level-button");

    if (levelButtons.length > 0) {
        levelButtons.forEach(button => {
            button.addEventListener("click", function () {
                levelButtons.forEach(btn => btn.classList.remove("selected"));
                this.classList.add("selected");
                localStorage.setItem("selectedLevel", this.dataset.level);
            });
        });
    }

    // ==============================
    // 5. 戻るボタンの処理
    // ==============================
    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }
});
