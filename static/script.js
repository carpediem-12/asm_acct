// 예시 데이터 배열: 학번과 이름에 따른 계정 정보
const studentAccounts = [
    { studentId: "2024001", name: "홍길동", email: "hong@example.com", password: "pass1234" },
    { studentId: "2024002", name: "김철수", email: "kim@example.com", password: "qwerty12" },
    { studentId: "2024003", name: "박영희", email: "park@example.com", password: "abc12345" }
    // 더 많은 데이터는 여기에 추가
];

// 검색 함수
function searchAccount() {
    // 입력 필드 값 가져오기
    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();

    // 결과 div
    const resultDiv = document.getElementById("result");

    // 검색 로직: 배열에서 해당 학번과 이름을 가진 계정 찾기
    const account = studentAccounts.find(acc => acc.studentId === studentId && acc.name === studentName);

    if (account) {
        // 계정 정보 출력
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <strong>계정 정보</strong><br>
            📧 이메일: ${account.email}<br>
            🔑 비밀번호: ${account.password}
        `;
    } else {
        // 검색 실패 메시지
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <strong>해당하는 계정을 찾을 수 없습니다.</strong>
        `;
    }
}
