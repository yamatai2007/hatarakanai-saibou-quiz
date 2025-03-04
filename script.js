document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", function () {
            window.location.href = "group.html"; // グループ名入力画面へ遷移
        });
    }

    const nextButton = document.getElementById("nextButton");
    if (nextButton) {
        nextButton.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value;
            if (groupName.trim() !== "") {
                localStorage.setItem("groupName", groupName);
                window.location.href = "antigen.html"; // 次の画面へ遷移（仮）
            } else {
                alert("グループ名を入力してください");
            }
        });
    }
});
