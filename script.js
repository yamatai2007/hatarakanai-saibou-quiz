document.addEventListener("DOMContentLoaded", function () {
    // ==============================
    // 1. ゲームスタート画面の処理
    // ==============================
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html"; // グループ名入力画面へ遷移
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
                window.location.href = "antigen.html"; // 抗原数入力画面へ遷移
            } else {
                alert("グループ名を入力してください");
            }
        });
    }

    // ==============================
    // 3. 抗原数入力の処理（修正済み）
    // ==============================
    const antigenCountInput = document.getElementById("antigenCount");
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const nextButtonAntigen = document.getElementById("nextButtonAntigen");

    if (antigenCountInput && decreaseButton && increaseButton && nextButtonAntigen) {
        let antigenCount = 0; // 初期値

        // 画面表示を更新する関数
        function updateDisplay() {
            antigenCountInput.value = antigenCount;
        }

        // マイナスボタン
        decreaseButton.addEventListener("click", function () {
            if (antigenCount > 0) {
                antigenCount--;
                updateDisplay();
            }
        });

        // プラスボタン
        increaseButton.addEventListener("click", function () {
            antigenCount++;
            updateDisplay();
        });

        // 直接入力の対応
        antigenCountInput.addEventListener("input", function () {
            let value = parseInt(antigenCountInput.value, 10);
            if (!isNaN(value) && value >= 0) {
                antigenCount = value;
            } else {
                antigenCount = 0;
            }
            updateDisplay();
        });

        // 次へボタン
        nextButtonAntigen.addEventListener("click", function () {
            localStorage.setItem("antigenCount", antigenCount);
            window.location.href = "quiz_level.html"; // クイズ難易度選択へ遷移
        });

        updateDisplay(); // 初期表示
    }

    // ==============================
    // 4. 戻るボタンの処理（最初のページ以外に適用）
    // ==============================
    const backButton = document.getElementById("backButton");
    if (backButton && window.location.pathname !== "/index.html") {
        backButton.addEventListener("click", function () {
            window.history.back(); // 1つ前のページに戻る
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // クイズ難易度選択の処理
    const difficultyButtons = document.querySelectorAll(".difficulty-btn");
    let selectedLevel = null;

    difficultyButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 既存の選択を解除
            difficultyButtons.forEach(btn => btn.classList.remove("selected"));

            // 新しい選択を適用
            this.classList.add("selected");
            selectedLevel = this.getAttribute("data-level");
        });
    });

    // 次へボタンの処理
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", function () {
        if (selectedLevel) {
            localStorage.setItem("quizLevel", selectedLevel);
            window.location.href = "quiz.html"; // クイズ画面へ遷移
        } else {
            alert("難易度を選択してください");
        }
    });

    // 戻るボタンの処理
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", function () {
        window.location.href = "antigen.html"; // 抗原数入力画面へ戻る
    });
});
