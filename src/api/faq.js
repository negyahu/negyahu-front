const faq = [
    {
        id: 1,
        title: '소속사 신청은 어떻게 하나요?',
        content: '아래 링크로 접속하여 소속사명, 사업자번호, 계정 등 \
        안내에 따라 작성 후 관리자의 승인을 받아주세요 \
        관리자의 승인 후 계정생성 및 활동이 가능합니다',
        link: true
    },
    {
        id: 2,
        title: '소속 아티스트는 어떻게 가입하나요?',
        content: '소속사 관리자가 계정을 생성할 수 있습니다. 소속사 관리자에게 문의하세요',
        link: false
    },
    {
        id: 3,
        title: '소속 아티스트도 멤버십 가입이 가능한가요?',
        content: '소속 아티스트는 멤버십 가입없이 이용 가능합니다.',
        link: false
    },
    {
        id: 4,
        title: '소속 아티스트는 어떻게 활동하나요?',
        content: '소속사로부터 계정을 받은 후 해당 계정으로 활동하시면 됩니다.',
        link: false
    }
]



export const getFAQ = () => {
    return faq;
}