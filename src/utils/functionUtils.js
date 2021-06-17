// 사업자 번호 확인
export function checkBusinessNumber(num) {
    // 인증키 9자리
    const authKey = '137137135';
    // 숫자 -> 문자열 변환
    let strNum = num.toString();

    // 합계 및 마지막 숫자 구하기
    let sum = 0
    let lastNum = 0
    for (let i = 0; i < authKey.length; i++) {
        sum += (parseInt(strNum.charAt(i), 10) * parseInt(authKey.charAt(i), 10))
        if (i === 8) {
            lastNum += Math.floor((parseInt(strNum.charAt(i), 10) * parseInt(authKey.charAt(i), 10)) / 10)
        }
    }

    // 합계 + 마지막 숫자를 10으로 나눈 나머지
    let total = (sum + lastNum) % 10;

    // 사업자번호 여부
    let ans = 10 - total;
    // 검증번호
    let verification = strNum.charAt(strNum.length - 1);
    return ans === parseInt(verification, 10) ? true : false
}


// 소속사 등록 유효성 검사
export function createAgencyValidation(data) {
    // 유효성 검사
    const regName = /^(?=.*?[가-힣a-zA-Z]).{2,}$/
    const regPNo = /^(?=.*?[0-9]).{10}$/
    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

    // 할당
    const { AgencyName, BusinessNumber, BoseName, Email, Files } = data;

    // 검사
    if (!regName.test(AgencyName)) {
        alert('소속사명을 입력하세요')
        return false
    } else if (!regPNo.test(BusinessNumber)) {
        alert('사업자번호를 요구사항에 맞춰 입력하세요')
        return false
    } else if (!BoseName) {
        alert('대표자명을 입력하세요')
        return false
    } else if (!regEmail.test(Email)) {
        alert('이메일을 입력하세요')
        return false
    } 
    else if (!Files) {
        alert('파일(사업자등록증)을 첨부바랍니다')
        return false
    }
    return true
}