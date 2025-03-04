document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");
    const groupNameInput = document.getElementById("groupName");

    if (!nextButton) {
        console.error("nextButton が見つかりません");
        return;
    }

    nextButton.addEventListener("click", function () {
        if (!groupNameInput) {
            console.error("groupNameInput が見つかりません");
            return;
        }

        const groupName = groupNameInput.value.trim();

        if (groupName !== "") {
            localStorage.setItem("groupName", groupName);
            window.location.href = "nextPage.html"; // 次のページへ移動
        } else {
            alert("グループ名を入力してください");
        }
    });
});
