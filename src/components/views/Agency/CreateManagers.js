import React, { useRef, useState } from 'react';
import { BsPersonPlusFill, BsPersonDashFill, BsPersonCheckFill } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';
import { onEmailCheckHandler } from '../../../utils/functionUtils';
import BackgroundBlur from '../Common/Background';
import '../../scss/agency/CreateManagers.scss';
import { IconContainer } from '../Common/Components';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MANAGERS } from '../../../_actions/openModules';
import { useEffect } from 'react';
import { getManagers } from '../../../_reducers/artists';
import Loading from '../Common/Loading';
import { CREATE_MANAGER, CREATE_MANAGER_TR, DELETE_MANAGER, DELETE_MANAGER_TR } from '../../../_actions/artists';
import { TiArrowBack } from 'react-icons/ti';

function CreateManagers({ match }) {
    const { data, loading, error } = useSelector(state => state.artists.managers);
    const artists = useSelector(state => state.openModules.create.managers.data);
    const dispatch = useDispatch();
    const [ManagerEmail, setManagerEmail] = useState('');
    const [ManagerName, setManagerName] = useState('');
    const [Level, setLevel] = useState('');
    const [Manage, setManage] = useState('');
    const [Password, setPassword] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Managers, setManagers] = useState(new Array());
    const checkEmailButton = useRef(new Array());
    const checkPasswordButton = useRef(new Array());
    const checkApplyManagerButton = useRef(new Array());
    const managerNode = useRef(new Array());
    const parentNode = useRef();
    const agencyId = parseInt(match.params.agencyId, 10)


    useEffect(() => {
        dispatch(getManagers(agencyId))
    }, [dispatch, getManagers, agencyId])

    if (loading || !data) return <Loading />
    if (error) return <div>에러</div>

    const onChangeEmail = (e, i) => {
        setManagerEmail(e.currentTarget.value)
        checkEmailButton.current[i].style.backgroundColor = "#F4D4D4"
        checkEmailButton.current[i].style.borderColor = "#F4D4D4"
        checkEmailButton.current[i].innerHTML = "확인"
        checkEmailButton.current[i].disabled = false
    }

    const onBackHistory = () => {
        /* eslint-disable-next-line */
        if (confirm('등록을 취소하시겠습니까?')) {
            dispatch({ type: OPEN_MANAGERS })
        }
    }

    const onPasswordCheckHandler = (email, button, isPassword) => {
        setPassword('1234')
        alert('임시비밀번호가 발급되었습니다. 계정등록시 이메일로 전송됩니다')
        button.style.backgroundColor = "white"
        button.style.borderColor = "white"
        button.innerHTML = "완료"
        button.disabled = 'disabled'
    }

    const onValidation = (i) => {
        // 유효성 검사 시작
        const regName = /^(?=.*?[가-힣a-zA-Z]).{2,}$/
        const regMobile = /^\d{3}-\d{3,4}-\d{4}$/
        if (!regName.test(ManagerName)) {
            return alert('이름을 정확히 입력해주세요')
        } else if (checkEmailButton.current[i].textContent !== '완료') {
            return alert('이메일을 확인해주세요')
        } else if (checkPasswordButton.current[i].textContent !== '완료') {
            return alert('임시 비밀번호를 발급해주세요')
        } else if (!regMobile.test(Mobile)) {
            return alert('연락처를 정확히 입력해주세요')
        } else {
            return true
        }
    }

    const onCreateManager = (e, i) => {
        const emptyManager = {
            name: '',
            email: '',
            password: '',
            mobile: '',
            level: '',
            artistId: 999, 
        }
        if (checkApplyManagerButton.current[data.length -1].textContent === '등록') {
            return alert('입력할 데이터를 등록한 후 추가해주세요')
        } else {
            dispatch({ type: CREATE_MANAGER_TR, manager: emptyManager})
        }
    }

    const onDeleteManager = (e, i) => {
        if (checkApplyManagerButton.current[i].textContent === '등록') {
            return dispatch({ type: DELETE_MANAGER_TR, index: data.length -1 })
        }
        /* eslint-disable-next-line */
        if (confirm('데이터를 삭제하시겠습니까?')) {
            console.log(data[i], i)
            dispatch({ type: DELETE_MANAGER, data: {agencyId: agencyId, managerId: data[i].id} })
        }
    }

    const onApplyManager = (e, i) => {
        const manager = {
            name: ManagerName,
            email: ManagerEmail,
            password: '123456',
            mobile: Mobile,
            level: Level,
            artistId: Manage
        }
        onValidation(i) 
        && dispatch({ type: CREATE_MANAGER, data: {agencyId: agencyId, manager: manager} })
    }

    

    return (
        <BackgroundBlur>
            <div className="artistManagerContainer">
                <h2>
                    CREATE MANAGER
                    <IconContainer size="60px" color="white" hover style={{ transform: "rotate(45deg)" }}>
                        <TiArrowBack onClick={onBackHistory}/>
                    </IconContainer>
                </h2>
                <aside className="addManagerRowContainer">
                    <IconContainer size="40px" color="#F4D4D4">
                        <BsPersonPlusFill onClick={(e) => {onCreateManager(e, data.length - 1)}}/>
                    </IconContainer>
                </aside>
                <div className="tableHeader">
                    <table className="table">
                        <colgroup>
                            <col width="8%"/>
                            <col width="10%"/>
                            <col width="12%"/>
                            <col width="10%"/>
                            <col width="30%"/>
                            <col width="10%"/>
                            <col width="12%"/>
                            <col width="8%"/>
                        </colgroup>
                        <thead>
                            <tr>
                                <td>DEL</td>
                                <td>Auth</td>
                                <td>Manage</td>
                                <td>Name</td>
                                <td>Account</td>
                                <td>Pwd</td>
                                <td>Mobile</td>
                                <td>ADD</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tableBody">
                    <table className="table">
                        <colgroup>
                            <col width="8%"/>
                            <col width="10%"/>
                            <col width="12%"/>
                            <col width="10%"/>
                            <col width="30%"/>
                            <col width="10%"/>
                            <col width="12%"/>
                            <col width="8%"/>
                        </colgroup>
                        <tbody ref={parentNode}>
                        {
                            data.map((manager, i) => {
                                return (
                                <tr key={manager.id} ref={e => {managerNode.current[i] = e}}>
                                    <td>
                                        {
                                            i !== 0
                                            && 
                                            <IconContainer size="30px" color="#5C5F78">
                                                <BsPersonDashFill onClick={(e) => {onDeleteManager(e, i)}}/>
                                            </IconContainer>
                                        }
                                    </td>
                                    <td>
                                        <select onChange={(e) => {setLevel(e.currentTarget.value)}}>
                                            <option value="" selected={manager.level === '' ? true : false}>권한</option>
                                            <option value="boss" selected={manager.level === 'boss' ? true : false}>마스터</option>
                                            <option value="manager" selected={manager.level === 'manager' ? true : false}>매니저</option>
                                            <option value="imployee" selected={manager.level === 'imployee' ? true : false}>게스트</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select onChange={(e) => {setManage(e.currentTarget.value)}}>
                                            <option value="all" selected={manager.artistId === 0 ? true : false}>전체</option>
                                            {
                                                artists.map(artist => {
                                                    return (
                                                        <option
                                                            value={artist.nameEN}
                                                            selected={manager.artistId === artist.id ? true : false}
                                                            key={artist.id}
                                                        >{artist.nameKR}</option>
                                                    )
                                                })
                                            }
                                            <option value="none" selected={manager.artistId === 999 ? true : false}>비할당</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={manager.name !== '' ? manager.name : ManagerName}
                                            placeholder="이름을 입력하세요"
                                            onChange={(e) => {setManagerName(e.currentTarget.value)}}
                                        />
                                    </td>
                                    <td>
                                        <div className="checkAccount">
                                            <input
                                                type="email"
                                                value={manager.email ? manager.email : ManagerEmail}
                                                placeholder="로그인 계정으로 사용할 이메일을 입력하세요"
                                                disabled={manager.email ? true : false}
                                                onChange={(e) => {onChangeEmail(e, i)}}
                                            />
                                            <button 
                                                ref={e => {checkEmailButton.current[i] = e}}
                                                onClick={(e) => {onEmailCheckHandler(ManagerEmail, checkEmailButton.current[i], setManagerEmail)}}
                                                disabled={manager.email ? true : false}
                                                style={manager.email ? {backgroundColor: 'white', borderColor: 'white'} : {backgroundColor: '#f4d4d4', borderColor: '#f4d4d4'}}
                                            >{manager.email ? '완료' : '확인'}</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button 
                                            ref={e => {checkPasswordButton.current[i] = e}}
                                            onClick={(e) => {onPasswordCheckHandler(ManagerEmail, checkPasswordButton.current[i], manager.password)}}
                                            disabled={manager.password ? true : false}
                                            style={manager.password ? {backgroundColor: 'white', borderColor: 'white'} : {backgroundColor: '#f4d4d4', borderColor: '#f4d4d4'}}
                                        >{manager.password ? '완료' : '발급'}</button>
                                    </td>
                                    <td>
                                        <input
                                            type="tel"
                                            value={manager.mobile ? manager.mobile : Mobile}
                                            placeholder="연락처를 입력하세요"
                                            onChange={(e) => {setMobile(e.currentTarget.value)}}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            ref={e => {checkApplyManagerButton.current[i] = e}}
                                            onClick={(e) => {onApplyManager(e, i)}}
                                            disabled={manager.name ? true : false}
                                            style={manager.name ? {backgroundColor: 'white', borderColor: 'white'} : {backgroundColor: '#f4d4d4', borderColor: '#f4d4d4'}}
                                        >{manager.name ? '완료' : '등록'}</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </BackgroundBlur>
    );
}

export default withRouter(CreateManagers);