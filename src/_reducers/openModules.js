import * as openModule from "../_actions/openModules"

const initialState = {
    sign: {
        email: false,
        password: false,
        foundAccount: false
    },
    main: {
        help: false,
        agency: false,
    },
    header: {
        notification: false,
        mail: false,
        more: false,
        getMail: false,
        sendMail: false,
        mailForm: false,
    },
    common: {
        alert: false,
        confirm: false,
        chooseMenu: {
            open: false,
            data: null
        }
    },
    create: {
        artist: false,
        managers: {
            open: false,
            data: null
        },
    }
}

export default function openModulesReducer(state = initialState, action) {
    switch (action.type) {
        case openModule.OPEN_FIND_EMAIL:
            return {
                ...state,
                sign: {
                    ...state.sign,
                    email: !state.sign.email
                } 
            }
        case openModule.OPEN_FIND_PASSWORD:
            return {
                ...state,
                sign: {
                    ...state.sign,
                    password: !state.sign.password
                } 
            }
        case openModule.OPEN_FOUND_ACCOUNT:
            return {
                ...state,
                sign: {
                    ...state.sign,
                    foundAccount: !state.sign.foundAccount
                } 
            }
        case openModule.OPEN_NOTIFICATION:
            return {
                ...state,
                header: {
                    ...state.header,
                    mail: false,
                    more: false,
                    getMail: false,
                    sendMail: false,
                    mailForm: false,
                    notification: !state.header.notification
                } 
            }
        case openModule.OPEN_MAIL:
            return {
                ...state,
                header: {
                    ...state.header,
                    notification: false,
                    more: false,
                    getMail: false,
                    sendMail: false,
                    mailForm: false,
                    mail: !state.header.mail
                } 
            }
        case openModule.OPEN_MORE_MENU:
            return {
                ...state,
                header: {
                    ...state.header,
                    notification: false,
                    mail: false,
                    getMail: false,
                    sendMail: false,
                    mailForm: false,
                    more: !state.header.more
                } 
            }
        case openModule.OPEN_GETMAIL:
            return {
                ...state,
                header: {
                    ...state.header,
                    notification: false,
                    mail: false,
                    more: false,
                    sendMail: false,
                    mailForm: false,
                    getMail: !state.header.getMail
                } 
            }
        case openModule.OPEN_SENDMAIL:
            return {
                ...state,
                header: {
                    ...state.header,
                    notification: false,
                    mail: false,
                    more: false,
                    getMail: false,
                    mailForm: false,
                    sendMail: !state.header.sendMail
                } 
            }
        case openModule.OPEN_MAILFORM:
            return {
                ...state,
                header: {
                    ...state.header,
                    notification: false,
                    mail: false,
                    more: false,
                    getMail: false,
                    sendMail: false,
                    mailForm: !state.header.mailForm
                } 
            }
        case openModule.OPEN_HELP_CENTER:
            return {
                ...state,
                main: {
                    ...state.main,
                    help: !state.main.help
                } 
            }
        case openModule.OPEN_APPLY_AGENCY:
            return {
                ...state,
                main: {
                    ...state.main,
                    help: false,
                    agency: !state.main.agency
                } 
            }
        case openModule.OPEN_CREATE_MEMBER:
            return {
                ...state,
                create: {
                    ...state.create,
                    artist: !state.create.artist
                }
            }
        case openModule.OPEN_CONFIRM:
            return {
                ...state,
                common: {
                    ...state.common,
                    alert: !state.common.alert
                } 
            }
        case openModule.OPEN_CHOOSEMENU:
            return {
                ...state,
                common: {
                    ...state.common,
                    chooseMenu: {
                        open: !state.common.chooseMenu.open,
                        data: action.data
                    }
                } 
            }
        case openModule.OPEN_MANAGERS:
            return {
                ...state,
                create: {
                    ...state.create,
                    managers: {
                        ...state.create.managers,
                        open: !state.create.managers.open,
                        data: action.data
                    }
                } 
            }
        default:
            return state;
    }
}