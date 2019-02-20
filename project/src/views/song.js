import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import songStyle from './song.scss';
import { Icon } from 'antd-mobile';

function SongPage(props) {
    return (
        <div className={songStyle.login}>
            song
        </div>
    );
}

const mapStateToProps = state => {
}
const mapDispatchToProps = dispatch => {
}

export default connect(mapStateToProps, mapDispatchToProps)(SongPage);
