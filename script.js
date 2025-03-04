document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            const groupName = document.getElementById("groupName").value;
            if (groupName.trim() !== "") {
                localStorage.setItem("groupName", groupName);
                window.location.href = "nextPage.html"; // 次のページへ遷移
            } else {
                alert("グループ名を入力してください");
            }
        });
    } else {
        console.error("nextButton が見つかりません");
    }
});
