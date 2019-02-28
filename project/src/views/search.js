import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import searchCss from './search.scss';

function Search(props) {
    // console.log(props, 'props')
    let [search, setSearch] = useState('');
    let [showSuggest, setShowSuggest] = useState(false);
    let [showResult, setShowResult] = useState(false);

    useEffect(() => {
        props.searchHot();
    }, []);

    useEffect(() => {
        if (search) {
            props.searchSuggest(search);
        }
        setShowSuggest(!!search);
        setShowResult(false);
    }, [search]);

    function searchChange(e) {
        setSearch(e.target.value)
    }
    //搜索结果
    function searchResult(e) {
        window._hmt.push(['_trackEvent', '搜索结果', 'click', '网易云音乐']);
        if (e.keyCode === 13 && search) {
            setShowSuggest(false);
            setShowResult(true);
            props.searchResult(search);
        }
    }
    //歌曲
    function goPlay(e) {
        if (e.target.tagName.toUpperCase() === 'P') {
            window._hmt.push(['_trackEvent', '点击歌曲', 'click', '网易云音乐']);
            props.history.push({
                pathname: `/song/${e.target.dataset.id}`
            })
            //搜索结果到歌单
            props.addSongList({ids:props.search.searchResult.map(item=>item.id).join(',')})
        }
    }

    return (
        <div className={searchCss.search}>
            <header>
                <input type="text" placeholder="知否知否 最近很火哦" autoFocus
                    value={search}
                    onChange={searchChange}
                    onKeyDown={searchResult} />
                <p onClick={() => window.history.back()}>取消</p>
            </header>
            <div className={searchCss.hot}>
                <p>热门搜索</p>
                <ul>
                    {
                        props.search.searchHot.map((item, index) => {
                            return <li key={index}>{item.first}</li>
                        })
                    }
                </ul>
            </div>
            <div className={searchCss.suggest}>
                {showSuggest ? <section>{
                    props.search.searchSuggest.map((item, index) => {
                        return <p key={index}>{item.name + '类型：' + item.type}</p>
                    })
                }</section> : null}
            </div>
            <div className={searchCss.result}>
                {showResult ? <section onClick={goPlay}>{
                    props.search.searchResult.map((item, index) => {
                        return <p key={index} data-id={item.id}>{item.name}</p>
                    })
                }</section> : null}
            </div>
        </div>
    );
}

Search.propTypes = {
};
const mapStateToProps = state => {
    return {
        search: state.search
    }
};
const mapDispatchToProps = dispatch => {
    return {
        searchHot: () => {
            dispatch({
                type: 'search/searchHot'
            })
        },
        searchSuggest: payload => {
            dispatch({
                type: 'search/searchSuggest',
                payload
            })
        },
        searchResult: payload => {
            dispatch({
                type: 'search/searchResult',
                payload
            })
        },
        addSongList: payload => {
            dispatch({
                type: 'play/songDetail',
                payload
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);


