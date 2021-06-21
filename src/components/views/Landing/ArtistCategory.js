import React from 'react';
import { withRouter } from 'react-router-dom';
import { numberWithCommas } from '../../../utils/functionUtils';
import '../../scss/landing/ArtistCategory.scss';
import { CategoryButton } from '../Common/Components';

function ArtistCategory({ artist, match, history }) {
    console.log("아티스트 : ", artist, "매치 : ", match)
    const matchURL = match.url.substring(0, match.url.indexOf("/", 1))
    const agencyId = parseInt(match.params.agencyId, 10)
    const artistId = parseInt(match.params.artistId, 10)

    return (
        <aside className="artistCategoryContainer">
            <div className="informationContainer">
                <p>{artist.nameEN}</p>
                <p>{numberWithCommas(artist.fan)} FAN</p>
                <div className="profileImagesContainer">
                    {
                        artist.members.map(member => {
                            return <img src={member.imageURL} alt="멤버" key={member.id}/>
                        })
                    }
                    
                </div>
            </div>
            <div className="selectCategoryContainer">
                <CategoryButton
                    path={matchURL === '/feed'}
                    onClick={() => {history.push(`/feed/agency/${agencyId}/artist/${artistId}`)}}
                    style={{ 
                        width: 120,
                        height: 50,
                        fontFamily: 'Yoon Minguk',
                        fontSize: 18,
                    }}
                >FAN</CategoryButton>
                <CategoryButton
                    path={matchURL === '/artistFeed'}
                    onClick={() => {history.push(`/artistFeed/agency/${agencyId}/artist/${artistId}`)}}
                    style={{ 
                        width: 120,
                        height: 50,
                        fontFamily: 'Yoon Minguk',
                        fontSize: 18,
                    }}
                >ARTIST</CategoryButton>
                <CategoryButton
                    path={matchURL === '/official'}
                    onClick={() => {history.push(`/artistFeed/agency/${agencyId}/artist/${artistId}`)}}
                    style={{ 
                        width: 120,
                        height: 50,
                        fontFamily: 'Yoon Minguk',
                        fontSize: 18,
                    }}
                >OFFICIAL</CategoryButton>
            </div>
        </aside>
    );
}

export default withRouter(ArtistCategory);