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

        // 次へボタン
        nextButtonAntigen.addEventListener("click", function () {
            localStorage.setItem("antigenCount", antigenCount);
            window.location.href = "quiz_level.html"; // クイズ難易度選択へ遷移
        });

        updateDisplay(); // 初期表示
    }

    // ==============================
    // 4. 戻るボタンの処理（全ページ対応）
    // ==============================
    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back(); // 1つ前のページに戻る
        });
    }
});
