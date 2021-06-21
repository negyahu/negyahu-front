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
import { CREATE_MANAGER_TR } from '../../../_actions/artists';

function CreateManagers({ match }) {
    const { data, loading, error } = useSelector(state => state.artists.managers);
    const artists = useSelector(state => state.openModules.create.managers.data);
    const dispatch = useDispatch();
    const [ManagerEmail, setManagerEmail] = useState(new Array());
    const [ManagerName, setManagerName] = useState(new Array());
    const [Level, setLevel] = useState(new Array());
    const [Manage, setManage] = useState(new Array());
    const [Password, setPassword] = useState(new Array());
    const [Mobile, setMobile] = useState(new Array());
    const checkEmailButton = useRef(new Array());
    const checkPasswordButton = useRef(new Array());
    const cloneChildNode = useRef(new Array());
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
        button.innerHTML = "발급"
        button.disabled = 'disabled'
    }

    const onCreateManager = (e, i) => {
        const manager = {
            id: '',
            name: '',
            email: '',
            password: '',
            mobile: '',
            level: '',
            artistId: 999, 
        }
        dispatch({ type: CREATE_MANAGER_TR, manager: manager})
    }

    return (
        <BackgroundBlur>
            <div className="artistManagerContainer">
                <h2>CREATE MANAGER</h2>
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
                                <td>del</td>
                                <td>level</td>
                                <td>manage</td>
                                <td>name</td>
                                <td>account</td>
                                <td>pwd</td>
                                <td>Mobile</td>
                                <td>add</td>
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
                                <tr key={manager.id} ref={e => {cloneChildNode.current[i] = e}}>
                                    <td>
                                        {
                                            i !== 0
                                            && 
                                            <IconContainer size="30px" color="#5C5F78">
                                                <BsPersonDashFill />
                                            </IconContainer>
                                        }
                                    </td>
                                    <td>
                                        <select>
                                            <option selected={manager.level === '' ? true : false}>권한</option>
                                            <option value="boss" selected={manager.level === 'boss' ? true : false}>마스터</option>
                                            <option value="manager" selected={manager.level === 'manager' ? true : false}>매니저</option>
                                            <option value="imployee" selected={manager.level === 'imployee' ? true : false}>게스트</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select>
                                            <option value="" selected={manager.artistId === 0 ? true : false}>전체</option>
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
                                            <option value="" selected={manager.artistId === 999 ? true : false}>비할당</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={manager.name ? manager.name : ManagerName}
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
                                            value={Mobile}
                                            placeholder="연락처를 입력하세요"
                                            onChange={(e) => {setMobile(e.currentTarget.value)}}
                                        />
                                    </td>
                                    <td>
                                        <IconContainer size="30px" color="#F4D4D4">
                                            <BsPersonPlusFill onClick={(e) => {onCreateManager(e, i)}}/>
                                        </IconContainer>
                                    </td>
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="createManagersButtonContainer">
                <button>등록하기</button>
                <button onClick={onBackHistory}>취소하기</button>
            </div>
        </BackgroundBlur>
    );
}

export default withRouter(CreateManagers);